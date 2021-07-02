import React from 'react';

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <button>home</button>
        </li>
        <li>
          <button>blog</button>
        </li>
        <li>
          <button>products</button>
        </li>
        <li>
          <button>about</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
