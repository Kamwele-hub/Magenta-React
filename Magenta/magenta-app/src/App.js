import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./models/Home";
import AllPets from "./models/AllPets";
import Mypets from "./models/MyPets";
import Register from "./models/Register.js";
import CSS from "./CSS/App.css"
import NavBar from "./components/NavBar.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="../models/mypets" element={<Mypets />} />
        <Route exact path="../models/allpets" element={<AllPets />} />
        <Route exact path="./models/register" element={<Register changeForm={() => {}} />} />
      </Routes>
    </Router>
  );
}

export default App;
