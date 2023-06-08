import React, { useEffect } from "react";
import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";
import PetCard from "../components/PetCard";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import axios from "axios";

function AllPets() {
  const pets = useStore(petsStore);

  useEffect(() => {
    axios.get("https://magenta.onrender.com/pets").then((response) => {
      pets.setPetsStore(response.data);
    });
  }, [pets]);

  return (
    <>
      <div className="header">
        <h1 className="title">Magenta</h1>
        <Link to="/" className="link">
          Logout
        </Link>
        <Link to="/mypets" className="link">
          Mypets
        </Link>
        <Search />
      </div>
      <div className="pets-container">
        {pets.petsList.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </>
  );
}

export default AllPets;
