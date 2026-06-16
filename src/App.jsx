import { Navigate, Route, Routes } from "react-router";
import { HomePage, LoginPage, TransactionsPage } from "./pages";
import PrivateRoute from "./guards/privateRoute";
import NewTransactionPage from "./pages/newTransactionPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <TransactionsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/new-transaction"
          element={
            <PrivateRoute>
              <NewTransactionPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
