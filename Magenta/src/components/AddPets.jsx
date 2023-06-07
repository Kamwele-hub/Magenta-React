import React, { useState } from "react";
import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function AddPet({ user_id }) {
  const pets = useStore(petsStore);
  const [displayForm, setDisplayForm] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    image_url: "",
    user_id: user_id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayForm(false);
    axios
      .post("https://magenta.onrender.com/pet", newPet)
      .then((response) => {
        const newPetData = response.data;
        pets.set([...pets, newPetData]);
      })
      .catch((error) => {
        console.error("Error adding new pet:", error);
      });
  };

  if (!displayForm) {
    return (
      <button onClick={() => setDisplayForm(true)}>Add new pet</button>
    );
  } else {
    return (
      <form onSubmit={handleSubmit} className="mypets">
        <input
          type="text"
          placeholder="name"
          value={newPet.name}
          onChange={(e) =>
            setNewPet((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="breed"
          value={newPet.breed}
          onChange={(e) =>
            setNewPet((prev) => ({ ...prev, breed: e.target.value }))
          }
        />
        <input
          type="url"
          placeholder="image"
          value={newPet.image_url}
          onChange={(e) =>
            setNewPet((prev) => ({ ...prev, image_url: e.target.value }))
          }
        />
        <button type="submit">Add new Pet</button>
      </form>
    );
  }
}

export default AddPet;
