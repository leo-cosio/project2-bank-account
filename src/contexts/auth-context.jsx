import { useContext, createContext, useState } from "react";

const AuthContext = createContext();
const LS_CURRENT_USER_KEY = "current-user";

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    self.localStorage.getItem(LS_CURRENT_USER_KEY)
      ? JSON.parse(self.localStorage.getItem(LS_CURRENT_USER_KEY))
      : undefined,
  );

  const login = (user) => {
    self.localStorage.setItem(LS_CURRENT_USER_KEY, JSON.stringify(user));
  };

  const logout = () => {
    self.localStorage.removeItem(LS_CURRENT_USER_KEY);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
