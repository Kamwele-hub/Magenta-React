import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
          <div className="nav-left">
            <Link className='brand' to="/">Philoxenia</Link>
          </div>
          <div className="nav-middle">
            <Link className='menu' to="/allpets">Pets</Link>
            <Link className='menu' to="/mypets">MyPets</Link>
          </div>
          <div className="nav-right">
            <Link className='menu' to="/login">Log out</Link>
          </div>
        </nav>
      );
}

export default Navbar;