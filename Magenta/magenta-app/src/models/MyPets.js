import React, { useEffect, useState } from "react";
import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";
import PetCard from "../components/PetCard";

function Mypets() {
  const [myPets, setMyPets] = useState([]);
  const fetchMyPets = useStore((state) => state.fetchMyPets);

  useEffect(() => {
    fetchMyPets()
      .then((data) => {
        setMyPets(data);
      })
      .catch((error) => {
        console.error("Error fetching my pets:", error);
      });
  }, [fetchMyPets]);

  return (
    <div className="container">
      <h1>Petfinder</h1>
      <div className="card-container">
        {myPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Mypets;
