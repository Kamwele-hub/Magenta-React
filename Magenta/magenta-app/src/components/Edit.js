import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function Delete({ pet }) {
  const pets = useStore(petsStore);

  const handleDelete = () => {
    const updatedPetsList = pets.petsList.filter((thispet) => {
      return thispet.id !== pet.id;
    });

    fetch(`http://localhost:9292/pets/${pet.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          pets.setPetsStore(updatedPetsList);
        } else {
          throw new Error("Error deleting pet");
        }
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
