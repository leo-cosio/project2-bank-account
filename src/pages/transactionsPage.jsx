import { Sidebar } from "../components";

function TransactionsPage() {
  return (
    <div className="d-flex">
      <Sidebar />
      <h1 className="d-flex justify-content-center align-items-center vh-100 w-100 flex-column">
        Transactions Page
      </h1>
    </div>
  );
}

export default TransactionsPage;
