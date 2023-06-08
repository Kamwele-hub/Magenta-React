import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function Login() {
  const pets = useStore(petsStore);
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9292/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = users.find((user) => user.name === login.name);

    if (existingUser) {
      if (existingUser.password === login.password) {
        fetch(`http://localhost:9292/pets/${existingUser.name}`, {
          method: "POST",
        })
          .then((response) => response.json())
          .then((data) => {
            const petsData = data;
            if (petsData.length === 0) {
              pets.setPetsStore([
                {
                  id: null,
                  name: "",
                  breed: "",
                  image: "",
                  user_id: existingUser.id,
                },
              ]);
              navigate("/mypets");
            } else {
              pets.setPetsStore(petsData);
              navigate("/mypets");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
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
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
