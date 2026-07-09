import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

const [isLogin, setIsLogin] = useState(false);

const [role, setRole] = useState(user ? user.userType : null);

  useEffect(() => {
    const data = sessionStorage.getItem("UserData");

 if (data) {

  const userData = JSON.parse(data);

  setUser(userData);

  setIsLogin(true);

  setRole(userData.userType);

}
  }, []);

const UpdateUser = (updatedUser) => {

  setUser(updatedUser);

  setRole(updatedUser.userType);

  sessionStorage.setItem(
    "UserData",
    JSON.stringify(updatedUser)
  );

};

const value = {
  user,
  setUser,
  UpdateUser,

  role,
  setRole,

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