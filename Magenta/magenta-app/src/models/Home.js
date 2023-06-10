import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import AllPets from './AllPets';
import Layout from '../components/Layout';
import MyPets from "./MyPets";

function Home() {
  const [displayRegister, setDisplayRegister] = useState(true);

  const changeForm = () => {
    setDisplayRegister(!displayRegister);
  };

  if (displayRegister) {
    return (
      <div>
        <h1>Magenta Petfinder App</h1>
        <Register changeForm={changeForm} />
        <span onClick={changeForm} className="lUser">
          Already registered?
          <div className="hover">Go to login</div>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Find Pets</h1>
        <Login changeForm={changeForm} />
        <p onClick={changeForm} className="lUser">
          Go back to registration
        </p>
      </div>
    );
  }
}

function HomeWithLayout() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default HomeWithLayout;
