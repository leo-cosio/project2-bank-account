import { Balance } from "../components/ui";
import { useAuth } from "../contexts/auth-context";
import { HomeTransactions, Sidebar, Stats } from "../components";
import { NavLink } from "react-router";

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="vh-100 w-100" style={{ marginLeft: "250px" }}>
        <div className="d-flex">
          <div className="vh-100 w-75 p-3">
            <div className="h-25 d-flex pb-3">
              <Balance balance={user.balance} />
              <div className="w-50 border border-warning border-3"></div>
            </div>
            <Stats />
          </div>

          <div className="vh-100 w-25">
            <div className="h-75 w-100 mt-3 p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Last Transactions</h1>
                <NavLink to="/new-transaction" className="btn btn-primary h-50">
                  New transaction
                </NavLink>
              </div>

              <div className="d-flex flex-column justify-content-around">
                <HomeTransactions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
