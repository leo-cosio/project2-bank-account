import { Balance } from "../components/ui";
import { useAuth } from "../contexts/auth-context";
import { HomeTransactions, Sidebar } from "../components";

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="vh-100 w-100">
        <div className="d-flex">
          <div className="border border-black vh-100 w-75 border-3">
            <div className="border border-primary h-25 d-flex border-3">
              <Balance balance={user.balance} />
              <div>Total Savings</div>
            </div>
            <div className="border border-success h-50 border-3">Stats</div>
            <div className="h-25 d-flex justify-content-around">
              <div className="border border-danger border-3">Goals</div>
              <div className="border border-dark border-3">
                Spending Overview
              </div>
            </div>
          </div>

          <div className="vh-100 w-25">
            <div className="h-75 border border-warning border-3 w-100 h-75">
              <h1>Last Transactions</h1>

              <div className="d-flex flex-column justify-content-around">
                <HomeTransactions />
              </div>
            </div>
            <div className="h-25 border border-success border-3">
              Quick Transfer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
