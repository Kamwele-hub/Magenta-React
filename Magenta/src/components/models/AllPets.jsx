import PetCard from "../components/Petcard";
import { useStore } from "zustand";
import { petsStore} from "../store/PetsKeeper";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import AddPet from "../components/AddPets";

function AllPets() {
  const pets = useStore(petsStore);
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    // This will be the fetch to a specific user's pets
    axios.get('https://philoxenia.onrender.com/pets')
      .then((r) => setMyPets(r.data));
  }, []);

  useEffect(() => {
    pets.setPetsStore(myPets);
  }, [myPets]);

  return (
    <>
      <div className="header">
        <h1 className="title">Philoxenia</h1>
        <Link exact to="/" className="link">Logout</Link>
        <Link exact to="/mypets" className="link">Mypets</Link>
        <Search />
      </div>
      <div className="pets-container">
      {pets.petsList.map((pet)=>{
     return <PetCard pet={pet}/>
       })}
      </div>
    </>
  );
}

export default AllPets;