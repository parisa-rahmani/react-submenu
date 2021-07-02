import React from 'react';
import './App.css';
import { useGlobalContext } from './context';

const Head = () => {
  const { closeSubmenu } = useGlobalContext();
  return <div className="head" onMouseOver={closeSubmenu}></div>;
};

export default Head;
