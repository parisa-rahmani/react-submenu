import './App.css';
import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
import Submenu from './Submenu';

const App = () => {
  return (
    <div>
      <Navbar />
      <Submenu />
      <Head />
    </div>
  );
};

export default App;
