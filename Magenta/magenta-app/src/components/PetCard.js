import { useStore } from "zustand";
import { petsStore } from "../store/PetsKeeper";

function PetCard({ pet }) {
  const pets = useStore(petsStore);

  return (
    <div className="petcard">
      <p className="pet-name">{pet.name}</p>
      <img className="pet-image" src={pet.image} alt={pet.name} />
      <p>{pets.petsList[0]?.name}</p> {/* Example usage of the pets value */}
    </div>
  );
}

export default PetCard;
