import { Navigate, Route, Routes } from "react-router";
import { HomePage, LoginPage, TransactionsPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </>
  );
}

export default App;
