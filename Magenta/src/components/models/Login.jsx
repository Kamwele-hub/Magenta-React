import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function Login() {
  const pets = useStore(petsStore);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://magenta.onrender.com").then((r) => {
      setUsers(r.data);
      console.log(r.data);
    });
  }, []);

  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let existing_user = users.find((user) => user.name === login.name);

    if (existing_user) {
      if (existing_user.password === login.password) {
        axios.get(`https://magenta.onrender.com/pets/${existing_user.name}`).then((r) => {
          if (r.data.length === 0) {
            pets.setPetsStore([
              {
                id: null,
                name: "",
                breed: "",
                image: "",
                user_id: existing_user.id,
              },
            ]);
            redirect("/mypets");
          } else {
            console.log(r.data);
            pets.setPetsStore(r.data);
            redirect("/mypets");
          }
        });
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("Incorrect name");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signin">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setLogin({ ...login, name: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
