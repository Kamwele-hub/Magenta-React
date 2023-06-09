import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./models/Home";
import AllPets from "./models/AllPets";
import Mypets from "./models/MyPets";
import Register from "./models/Register.js";
import   "./App.css";
import Navigation from "./components/NavBar"
import Delete from "./components/DeletePets";
import Add from "./components/AddPets";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mypets" element={<Mypets />} />
        <Route exact path="/allpets" element={<AllPets />} />
        <Route exact path="/register" element={<Register changeForm={() => {}} />} />
      </Routes>
    </Router>
  );
}

export default App;
