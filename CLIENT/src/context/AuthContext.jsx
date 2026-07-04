import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem("UserData");

    if (data) {
      setUser(JSON.parse(data));
      setIsLogin(true);
    }
  }, []);

  const value = {
    user,
    setUser,
    isLogin,
    setIsLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);