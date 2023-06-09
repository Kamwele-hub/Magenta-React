import { useState } from "react";
import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function AddPet({ user_id }) {
  const pets = useStore(petsStore);
  const [displayForm, setdisplayForm] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    image_url: "",
    user_id: user_id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setdisplayForm(false);
    console.log(newPet);

    fetch("http://localhost:9292", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((response) => response.json())
      .then((data) => {
        pets.setPetsStore([...pets.petsList, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if(displayForm === false){
    return <button 
    onClick={() => setdisplayForm(true)
    } >Add new pet</button>
}else{
    return <form onSubmit={handleSubmit} className="mypets">
    <input  type="text" placeholder="name" onChange={(e) =>{
    setNewPet({...newPet, "name":e.target.value})
    }}></input>
    <input type="text" placeholder="breed" onChange={(e) =>{
    setNewPet({...newPet, "breed":e.target.value})
    }}></input>
    <input type="url" placeholder="image" onChange={(e) =>{
    setNewPet({...newPet, "image_url":e.target.value})
    }}></input>
    <button type="submit"  >Add new Pet</button>
    </form>
}

}

export default AddPet;