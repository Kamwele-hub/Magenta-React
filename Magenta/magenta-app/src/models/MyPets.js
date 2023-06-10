import React, { useEffect, useState } from 'react';
import PetCard from '../components/PetCard';
import Layout from '../components/Layout';
import Edit from '../components/Edit';

function MyPets() {
  const [myPets, setMyPets] = useState([]);

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

  const handlePetUpdate = (updatedPet) => {
    const updatedPets = myPets.map((pet) => {
      if (pet.id === updatedPet.id) {
        return updatedPet;
      }
      return pet;
    });

    setMyPets(updatedPets);
  };

  return (
    <Layout>
      <div className="mypets-container">
        <h1>My Pets</h1>
        <div className="pet-card-container">
          {myPets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <PetCard pet={pet} />
              <Edit pet={pet} onPetUpdate={handlePetUpdate} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MyPets;
