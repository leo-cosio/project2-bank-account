import { useAuth } from "../../contexts/auth-context";

function Balance({ balance }) {
  const { user } = useAuth();

  const income = user.transactions.reduce((acc, transaction) => {
    if (transaction.amount > 0) {
      acc += transaction.amount;
    }

    return acc;
  }, 0);

  const expenses = user.transactions.reduce((acc, transaction) => {
    if (transaction.amount < 0) {
      acc += transaction.amount;
    }

    return acc;
  }, 0);

  return (
    <div id="balanceCard" className="card w-50 me-3 border border-0 rounded-0">
      <h2>Total Balance</h2>
      <h1>{balance}€</h1>
      <div className="d-flex">
        <div className="w-50">
          <p>Income</p>
          <h4 className="text-success">+{income}</h4>
        </div>
        <div className="w-50">
          <p>Expenses</p>
          <h4 className="text-danger">{expenses}</h4>
        </div>
      </div>
    </div>
  );
}

export default Balance;
