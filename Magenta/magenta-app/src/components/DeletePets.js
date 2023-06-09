import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function Delete({ pet }) {
  const pets = useStore(petsStore);

  const handleDelete = () => {
    const updatedPetsList = pets.petsList.filter((thispet) => {
      return thispet.id !== pet.id;
    });

    fetch(`http://localhost:9292/pets/${pet.id}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then(() => {
        pets.setPetsStore({ petsList: updatedPetsList }); // Update the state correctly
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <button onClick={handleDelete} id="delete-btn">
      Delete
    </button>
  );
}

export default Delete;
