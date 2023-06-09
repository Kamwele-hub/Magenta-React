import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="nav-left">
          <Link className="brand" to="/">
            Magenta
          </Link>
        </li>
        <li className="nav-middle">
          <Link className="menu" to="/allpets">
            Pets
          </Link>
          <Link className="menu" to="/mypets">
            MyPets
          </Link>
          <li>
          <Link className="menu" to="/add">
            AddPet
          </Link>
          </li>
        </li>
        <li className="nav-right">
          <Link className="menu" to="/login">
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
