import { useNavigate } from "react-router-dom";
import { useState ,useEffect } from "react";

import axios from "axios";
import { useStore } from "zustand";
import {  petsStore } from "../store/PetsKeeper";

function Login() {
  const pets = useStore(petsStore)
  const [users,setUsers] = useState([])
  console.log(users)
  useEffect(() =>{
   axios.get("https://philoxenia.onrender.com").then((r) =>
    setUsers(r.data),
    console.log(users)
   )
  }, [])
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });
  
  const redirect = useNavigate();
  const handleSubmit = (e) => {
     e.preventDefault();
    //map through the users array
    let exixting_user = users.filter((user) =>{
      return user.name === login.name
    })
    if(exixting_user.length !== 0){
    if(exixting_user[0].password === login.password){
    
      axios.get(`https://philoxenia.onrender.com/pets/${exixting_user[0].name}`).then((r) =>{
      if(r.data.length === 0){
        pets.setPetsStore([{
        id:null,
        name:"",
        breed:"",
        image:"",
        user_id:exixting_user[0].id
            }]) 
            redirect("/mypets")}else{
        console.log(r.data)
        pets.setPetsStore(r.data) 
        redirect("/mypets")} 
      }    
      )
 
    }else{
      alert("Incorrect password")
    }}else{
      alert("Incorrect name")
    }
  
   
  };
  return (
    <div >
    <form onSubmit={handleSubmit} className="signin">
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setLogin({ ...login, name: e.target.value })}
      ></input>
      <input type="password" placeholder="password" onChange={(e) => setLogin({
        ...login, password:e.target.value
      })} ></input>
      <button >Login</button>
    </form>
    </div>
  );
}
export default Login;
