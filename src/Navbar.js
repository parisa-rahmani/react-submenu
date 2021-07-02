import React from 'react';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSubmenu } = useGlobalContext();

  const displaySubmenu = e => {
    const page = e.target.textContent;
    const btn = e.target.getBoundingClientRect();
    const center = (btn.left + btn.right) / 2;
    const bottom = btn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <button onMouseOver={displaySubmenu}>home</button>
        </li>
        <li>
          <button onMouseOver={displaySubmenu}>blog</button>
        </li>
        <li>
          <button onMouseOver={displaySubmenu}>products</button>
        </li>
        <li>
          <button onMouseOver={displaySubmenu}>about</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
