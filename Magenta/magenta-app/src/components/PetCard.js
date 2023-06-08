import React from "react";

function PetCard({ pet }) {
  return (
    <div className="petcard">
      <img src={pet.image_url} alt={pet.name} className="pet-image" />
      <h2 className="pet-name">{pet.name}</h2>
      <p>{pet.description}</p>
    </div>
  );
}

export default PetCard;
