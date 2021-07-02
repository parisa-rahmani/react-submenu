import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from './context';
import './App.css';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <div
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h3>{page}</h3>
      <div className="submenu-link">
        {links.map((link, index) => {
          return (
            <a key={index} href={link.url}>
              {link.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
