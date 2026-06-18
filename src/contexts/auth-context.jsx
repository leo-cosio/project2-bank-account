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
    // eslint-disable-next-line no-unused-vars
    const { credentials, ...safeUser } = user;
    self.localStorage.setItem(LS_CURRENT_USER_KEY, JSON.stringify(safeUser));
    setUser(safeUser);
  };

  const logout = () => {
    self.localStorage.removeItem(LS_CURRENT_USER_KEY);
    setUser(undefined);
  };

  const addTransaction = (transaction) => {
    // eslint-disable-next-line no-unused-vars
    const { uuid, ...rest } = transaction;

    setUser((prev) => {
      if (!prev) return prev;

      // Le añado un nuevo id a la transacción
      const newTransaction = {
        id: prev.transactions.length + 1,
        ...rest,
      };

      // Actualizo el usuario empujando los valores anteriores junto la nueva transacción mirando y añadiendole un ID a la transacción
      const updatedUser = {
        ...prev,
        balance: prev.balance + newTransaction.amount,
        transactions: [...prev.transactions, newTransaction],
      };

      self.localStorage.setItem(
        LS_CURRENT_USER_KEY,
        JSON.stringify(updatedUser),
      );

      return updatedUser;
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, addTransaction }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
