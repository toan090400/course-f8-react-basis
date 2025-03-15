import { useState } from "react";
import MyContext from "./context";

const MyContextProvider = ({ children }) => {
  const [theme, settheme] = useState("light");

  const handlerChange = (value) => {
    settheme(value === "light" ? "dark" : "light");
  };

  const value = {
    theme,
    handlerChange,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
