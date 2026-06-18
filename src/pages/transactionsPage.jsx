import { NavLink } from "react-router";
import { Sidebar } from "../components";
import { useAuth } from "../contexts/auth-context";

function TransactionsPage() {
  const { user } = useAuth();
  const { transactions } = user;

  return (
    <div className="d-flex vh-100">
      <Sidebar />

      <div className="w-100">
        <div>
          <ol>
            {transactions
              .map((transaction) => (
                <li key={transaction.id}>
                  {transaction.amount > 0
                    ? `+${transaction.amount}`
                    : `${transaction.amount}`}{" "}
                  - {transaction.type} - {transaction.description} -{" "}
                  {transaction.date}
                </li>
              ))
              .reverse()}
          </ol>
        </div>

        <NavLink to="/new-transaction" />
      </div>
    </div>
  );
}

export default TransactionsPage;
