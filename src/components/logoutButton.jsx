import { useNavigate } from "react-router";
import { useAuth } from "../contexts/auth-context";

function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <button type="button" className="btn bg-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
