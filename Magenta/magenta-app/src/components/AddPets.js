import { useState } from "react";
import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function AddPet({ createForm }) {
  const pets = useStore(petsStore);
  const [displayForm, setDisplayForm] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    image_url: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayForm(false);
    console.log(newPet);

    createForm(newPet);
  };

  if (displayForm === false) {
    return (
      <button onClick={() => setDisplayForm(true)}>Add new pet</button>
    );
  } else {
    return (
      <form onSubmit={handleSubmit} className="mypets">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter pet name"
            onChange={(e) => {
              setNewPet({ ...newPet, name: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            id="breed"
            placeholder="Enter pet breed"
            onChange={(e) => {
              setNewPet({ ...newPet, breed: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            placeholder="Enter pet age"
            onChange={(e) => {
              setNewPet({ ...newPet, age: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            placeholder="Enter pet image URL"
            onChange={(e) => {
              setNewPet({ ...newPet, image_url: e.target.value });
            }}
          />
        </div>
        <button type="submit">Add new Pet</button>
      </form>
    );
  }
}

export default AddPet;
