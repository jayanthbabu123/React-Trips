import { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const isTokenExisted = localStorage.getItem("token");
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
    isAuthenticated: isTokenExisted ? true : false,
  });
  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
