import { Balance } from "../components/ui";
import { useAuth } from "../contexts/auth-context";
import { Sidebar } from "../components";

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex justify-content-center align-items-center vh-100 w-100 flex-column">
        <h1>Home Page</h1>

        <div>
          <Balance balance={user.balance} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
