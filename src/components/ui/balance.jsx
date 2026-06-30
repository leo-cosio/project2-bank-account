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
    <div
      id="balanceCard"
      className="card w-50 me-3 border border-0 rounded-0 justify-content-between p-4"
    >
      <div>
        <h3 className="mb-3">Total Balance</h3>
        <h1>{balance}€</h1>
      </div>
      <div className="d-flex">
        <div className="w-50 border-end me-5 border-secondary-subtle">
          <h5>Income</h5>
          <h4 className="text-success">+{income}</h4>
        </div>
        <div className="w-50">
          <h5>Expenses</h5>
          <h4 className="text-danger">{expenses}</h4>
        </div>
      </div>
    </div>
  );
}

export default Balance;
