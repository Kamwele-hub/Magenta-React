import PetCard from "../components/PetCard";
import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AddPets from "../components/AddPets";

function AllPets() {
  const pets = useStore(petsStore);
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    // This will be the fetch to a specific user's pets
    fetch('http://localhost:9292//pets')
      .then((response) => response.json())
      .then((data) => setMyPets(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    pets.setPetsStore(myPets);
  }, [myPets]);

  return (
    <>
      <div className="header">
        <h1 className="title">Magenta</h1>
        <Link exact to="/" className="link">
          Logout
        </Link>
        <Link exact to="/mypets" className="link">
          Mypets
        </Link>
        <Search />
      </div>
      <div className="pets-container">
        {pets.petsList.map((pet) => {
          return <PetCard pet={pet} />;
        })}
      </div>
    </>
  );
}

export default AllPets;
