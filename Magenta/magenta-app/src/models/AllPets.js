import React, { useEffect, useState } from "react";
import { useStore } from "zustand";
// import { petsStore } from "../store/PetsKeeper";
import PetCard from "../components/PetCard";

function AllPets() {
  const [pets, setPets] = useState([]);
  // const fetchPets = useStore((state) => state.fetchPets);

  useEffect(() => {
    fetch("http://localhost:9292/pets")
    .then ((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });
  }, []);

  return (
    <div>
      <h1>All Pets</h1>
      <div className="card-container">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default AllPets;
