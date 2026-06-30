import { NavLink } from "react-router";
import { Sidebar } from "../components";
import { useAuth } from "../contexts/auth-context";

function TransactionsPage() {
  const { user } = useAuth();
  const { transactions } = user;
  const sortedTransactions = [...transactions].reverse();

  return (
    <div className="d-flex vh-100" style={{ marginLeft: "250px" }}>
      <Sidebar />

      <div className="w-100 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 mb-0">Transactions</h1>

          <NavLink to="/new-transaction" className="btn btn-primary">
            New transaction
          </NavLink>
        </div>

        <div className="card shadow-sm">
          <div className="card-body p-0">
            <ol className="list-group list-group-flush">
              {sortedTransactions.map((transaction) => {
                const isIncome = transaction.amount > 0;
                const amountLabel = isIncome
                  ? `+${transaction.amount}€`
                  : `${transaction.amount}€`;

                return (
                  <li
                    key={transaction.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div className="fw-semibold text-capitalize">
                        {transaction.description || transaction.type}
                      </div>
                      <small className="text-muted">
                        {transaction.type} · {transaction.date}
                      </small>
                    </div>

                    <span
                      className={
                        "fw-semibold " +
                        (isIncome ? "text-success" : "text-danger")
                      }
                    >
                      {amountLabel}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage;
