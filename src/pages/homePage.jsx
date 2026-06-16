import { Balance } from "../components/ui";
import { useAuth } from "../contexts/auth-context";
import { Sidebar } from "../components";

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="vh-100 w-100">
        <div className="d-flex">
          <div className="border border-black vh-100 w-75">
            <div className="border border-primary h-25 d-flex">
              <Balance balance={user.balance} />
              <div>Total Savings</div>
            </div>
            <div className="border border-success h-50">Stats</div>
            <div className="h-25">
              <div>Goals</div>
              <div>Spending Overview</div>
            </div>
          </div>

          <div className="vh-100">
            <div className="h-75">Transactions</div>
            <div className="h-25">Quick Transfer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
