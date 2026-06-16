import { useAuth } from "../contexts/auth-context";

function HomeTransactions() {
  const { user } = useAuth();
  const { transactions } = user;

  const LAST_N = 3;

  const lastTransactions = transactions.slice(-LAST_N).reverse();

  return (
    <>
      {lastTransactions.map((transaction) => (
        <div key={transaction.id} className="card">
          <div className="card-body">
            <h5 className="card-title">
              {transaction.amount > 0
                ? `+${transaction.amount}`
                : `${transaction.amount}`}
            </h5>
            <h6 className="card-subtitle">{transaction.type}</h6>
            <p className="card-text">{transaction.description}</p>
            <small>{transaction.date}</small>
          </div>
        </div>
      ))}
    </>
  );
}

export default HomeTransactions;
