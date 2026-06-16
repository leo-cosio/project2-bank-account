import { useForm } from "react-hook-form";
import { Sidebar } from "../components";

function NewTransactionPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm();

  const handleTransaction = async () => {};

  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
        <h1>New Transaction</h1>

        <form onSubmit={handleSubmit(handleTransaction)}>
          <div className="mb-2">
            <input type="text" className="form-control" />
          </div>
          <div className="mb-2">
            <input type="number" className="form-control" />
          </div>
          <div className="mb-2">
            <input type="email" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={!isValid}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTransactionPage;
