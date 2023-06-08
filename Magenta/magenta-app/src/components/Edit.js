import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";
import { useState } from "react";
import axios from "axios";

function Edit({pet}){
const pets = useStore(petsStore)
const [displayForm,setdisplayForm] = useState(false)
const [changePet, setchangePet] = useState({
"name" : "",
"breed" : "",
"image" : "",
"user_id" : pet.user_id
})
console.log(changePet)
const handleSubmit = (e)  =>{
e.preventDefault()
setdisplayForm(false)
let other_pets = pets.petsData.filter((thispet)=>{
 return thispet.id !== pet.id
})
console.log(other_pets)
axios
.put(`https://philoxenia.onrender.com/pets/${pet.id}`,changePet)
.then((r) => pets.setPetsKeeper([...other_pets, changePet])
);
}
if(displayForm === false){
    return <button 
    onClick={() => setdisplayForm(true)
    }>Update pet</button>
}else{
    return <form onSubmit={handleSubmit} id="input">
    <input type="text" placeholder="name" onChange={(e) =>{
    setchangePet({...changePet, "name":e.target.value})
    }}></input>
    <input type="text" placeholder="breed" onChange={(e) =>{
    setchangePet({...changePet, "breed" : e.target.value})
    }}></input>
    <input type="url" placeholder="add image" onChange={(e) =>{
    setchangePet({...changePet, "image" : e.target.value})
    }}></input>
    <button type="submit">Update</button>
    </form>
}
}
export default Edit;