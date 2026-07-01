import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("UserData");

    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const value = {
    user,
    setUser,
    isLogin: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);