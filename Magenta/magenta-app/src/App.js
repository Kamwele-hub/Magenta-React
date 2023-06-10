import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./models/Home";
import AllPets from "./models/AllPets";
import Mypets from "./models/MyPets";
import Register from "./models/Register";
import AddPet from "./components/AddPets";
import Navbar from "./components/NavBar";


function createForm(newPet) {
  // Perform form submission or API request to add the new pet
  fetch("http://localhost:9292/pet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPet),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data or update the pet list in the state
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mypets" element={<Mypets />} />
        <Route exact path="/allpets" element={<AllPets />} />
        <Route
          exact
          path="/register"
          element={<Register changeForm={() => {}} />}
        />
        <Route
          exact
          path="/addpet"
          element={<AddPet createForm={createForm} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
