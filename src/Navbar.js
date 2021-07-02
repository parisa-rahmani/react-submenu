import React from 'react';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = e => {
    const page = e.target.textContent;
    const btn = e.target.getBoundingClientRect();
    const center = (btn.left + btn.right) / 2;
    const bottom = btn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = e => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <div className="nav-container" onMouseOver={handleSubmenu}>
      <ul className="nav-list">
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            home
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            blog
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            about
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
