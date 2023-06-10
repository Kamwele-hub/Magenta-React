import React, { useEffect, useState } from 'react';
import PetCard from '../components/PetCard';
import Layout from '../components/Layout';

function MyPets() {
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/mypets')
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
      <div className="mypets-container">
        <h1>My Pets</h1>
        <div className="pet-card-container">
          {myPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MyPets;
