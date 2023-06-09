import React, { useState } from 'react';
import { useStore } from 'zustand';
import { petsStore } from '../store/PetsKeeper';

function Edit({ pet }) {
  const pets = useStore(petsStore);
  const [displayForm, setDisplayForm] = useState(false);
  const [changePet, setChangePet] = useState({
    name: '',
    breed: '',
    image: '',
    user_id: pet.user_id,
  });

  console.log(changePet);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayForm(false);

    let other_pets = pets.petsData.filter((thispet) => {
      return thispet.id !== pet.id;
    });

    fetch(`http://localhost:9292/pets/${pet.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(changePet), // Send the updated pet data in the request body
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Update request failed.');
        }
      })
      .then((data) => {
        pets.setPetsKeeper([...other_pets, data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (displayForm === false) {
    return (
      <button onClick={() => setDisplayForm(true)}>
        Update pet
      </button>
    );
  } else {
    return (
      <form onSubmit={handleSubmit} id="input">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setChangePet({ ...changePet, name: e.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="breed"
          onChange={(e) => {
            setChangePet({ ...changePet, breed: e.target.value });
          }}
        ></input>
        <input
          type="url"
          placeholder="add image"
          onChange={(e) => {
            setChangePet({ ...changePet, image: e.target.value });
          }}
        ></input>
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default Edit;
