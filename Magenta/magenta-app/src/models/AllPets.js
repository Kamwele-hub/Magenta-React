import React, { useEffect, useState } from 'react';
import PetCard from '../components/PetCard';
import Layout from '../components/Layout';

function AllPets() {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/pets')
      .then((response) => response.json())
      .then((data) => {
        setAllPets(data);
      })
      .catch((error) => {
        console.error('Error fetching all pets:', error);
      });
  }, []);

  return (
    <Layout>
      <div className="all-pets-container">
        <h1>Available Pets</h1>
        <div className="card-container">
          {allPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default AllPets;
