import React, { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import { petsStore } from '../store/PetsKeeper';
import PetCard from '../components/PetCard';
import Layout from '../components/Layout';
// Import other components

function MyPets() {
  const [myPets, setMyPets] = useState([]);
  // const fetchMyPets = useStore((state) => state.fetchMyPets);

  useEffect(() => {
    fetch('http://localhost:9292/pets')
      .then((response) => response.json())
      .then((data) => {
        setMyPets(data);
      })
      .catch((error) => {
        console.error('Error fetching my pets:', error);
      });
  }, []);

  return (
    <Layout>
      <div className="pet-container">
        <h1>Petfinder</h1>
        <div className="pet-container">
          {myPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MyPets;
