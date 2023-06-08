import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";
import PetCard from "../components/PetCard";
import Delete from "../components/DeletePets";
import Edit from "../components/Edit";
import AddPet from "../components/AddPets"
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState,useEffect } from "react";

function Mypets(){
  const myPets = useStore(petsStore);

  return (
    <>
    <div className="container">
      <h1>Petfinder</h1>
      
      <div className="links">
        <Link to="/allpets" className="link">
           all pets
        </Link>
        <Link to="/" className="link">
          Logout
        </Link>
        <div className="add-pet">

          <AddPet className='add-pet' user_id={myPets.petsList.user_id} />
        </div>
      </div>
      <div className="card-container">
        {myPets.petsList.map((pet) => {
          return <>
          <div key={pet.id}>
            <PetCard pet={pet} />
            <div className="pet-buttons">
              <Delete pet={pet} />
              <Edit pet={pet} />
            </div>
            
          </div>
          </>
})}
      </div>
    </div>
    </>
  );
}

export default Mypets;
