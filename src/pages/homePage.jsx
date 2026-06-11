import { Balance } from "../contexts/ui";
import { useAuth } from "../contexts/auth-context";
import { LogoutButton } from "../components";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
        <h1>Home Page</h1>

        <div>
          <Balance balance={user.balance} />
        </div>
        <LogoutButton />
      </div>
    </div>
  );
}

export default HomePage;
