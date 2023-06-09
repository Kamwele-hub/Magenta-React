import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import AllPets from './AllPets';
import Mypets from './MyPets';
import Navbar from '../components/NavBar';
import "../App.css";
// import Edit from  '../components/Edit'

function Home() {
  const [displayRegister, displayLogin] = useState(true);

  const changeForm = () => {
    displayLogin(!displayRegister);
  };

  if (displayRegister === true) {
    return (
      <>
        <h1>Magenta Petfinder App</h1>
        <Register changeForm={changeForm} />
        <span onClick={changeForm} className="lUser">
          Already registered?
          <div className="hover">
            Go to login
          </div>
        </span>
        <AllPets /> {/* <AllPets /> component included here */}
      </>
    );
  } else {
    return (
      <>
        <h1>Find Pets</h1>
        <Login changeForm={changeForm} />
        <p onClick={changeForm} className="lUser">
          Go back to registration
        </p>
        <AllPets /> {/* <AllPets /> component included here */}
      </>
    );
  }
}

export default Home;
