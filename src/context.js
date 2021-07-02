import React, { useContext, useState } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = props => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSubmenu = (text, location) => {
    const page = sublinks.find(link => link.page === text);
    setPage(page);
    setLocation(location);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ isSubmenuOpen, openSubmenu, closeSubmenu, location, page }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
