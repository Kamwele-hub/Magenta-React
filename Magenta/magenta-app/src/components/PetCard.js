import React from "react";
import Delete from "./DeletePets";
import  "../App.css";
import {useStore} from "zustand"

function PetCard({ pet }) {
  return (
    <div className="petcard">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <h2 className="pet-name">Name: {pet.name}</h2>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <Delete pet={pet} /> {/* Pass the pet prop to the Delete component */}
    </div>
  );
}

export default PetCard;
