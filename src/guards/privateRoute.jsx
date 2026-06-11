import { Navigate } from "react-router";
import { useAuth } from "../contexts/auth-context";

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
