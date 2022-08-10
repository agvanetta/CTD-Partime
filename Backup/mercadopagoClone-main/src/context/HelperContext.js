import { createContext, useState } from "react";

const HelperContext = createContext();

const initialContext = "";

const HelperProvider = ({ children }) => {
  const [filter, setFilter] = useState(initialContext);
  const [styleSidebar, setStyleSidebar] = useState("Inicio");

  const handleFilter = () => {
    setFilter((current) => !current);
  };

  const data = { filter, handleFilter, setFilter,styleSidebar, setStyleSidebar };

  return (
    <HelperContext.Provider value={data}>
      {children}
    </HelperContext.Provider>
  );
};

export { HelperProvider };

export default HelperContext;