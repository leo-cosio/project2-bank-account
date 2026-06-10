import { Balance } from "../contexts/ui";
import { useAuth } from "../contexts/auth-context";

function HomePage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>

      <Balance balance={user.balance} />
    </div>
  );
}

export default HomePage;
