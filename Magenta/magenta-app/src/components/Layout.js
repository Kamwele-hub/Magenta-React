import React from 'react';
import Navbar from '../components/NavBar';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
