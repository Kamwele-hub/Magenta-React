import React from "react";
import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function Delete({ pet }) {
  const pets = useStore(petsStore);
  let other_pets = pets.petsList.filter((thispet) => {
    return thispet.id !== pet.id;
  });
  
  console.log("pets:", pets);
  console.log("other_pets:", other_pets);

  const handleDelete = () => {
    console.log("Deleting pet:", pet);
    axios
      .delete(`https://magenta.onrender.com/pets/${pet.id}`)
      .then(() => {
        console.log("Pet deleted successfully");
        pets.set(other_pets);
      })
      .catch((error) => {
        console.error("Error deleting pet:", error);
      });
  };
  
  console.log("Rendering Delete component");

  return (
    <button onClick={handleDelete} id="delete-btn">
      Delete
    </button>
  );
}

export default Delete;
