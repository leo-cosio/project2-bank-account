import { useForm } from "react-hook-form";
import { Sidebar } from "../components";
import { useAuth } from "../contexts/auth-context";
import { useNavigate } from "react-router";
import * as AuthService from "../services/auth-service";

function NewTransactionPage() {
  const { user, addTransaction } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      type: "transfer",
      amount: "",
      description: "",
      date: new Date().toISOString().slice(0, 16),
    },
  });

  const handleTransaction = async (data) => {
    try {
      const transaction = {
        type: data.type,
        amount:
          data.type === "transfer" || data.type === "withdrawal"
            ? -Number(data.amount)
            : +Number(data.amount),
        description: data.description,
        date: data.date,
        uid: user.uid,
      };

      const response = await AuthService.newTransaction(transaction);
      console.log(response);

      addTransaction(transaction);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex vh-100" style={{ marginLeft: "250px" }}>
      <Sidebar />
      <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
        <h1>New Transaction</h1>

        <form onSubmit={handleSubmit(handleTransaction)}>
          <div className="mb-2">
            <select
              id="type"
              className="form-select"
              {...register("type", { required: "Type is required" })}
            >
              <option value="transfer">Transfer</option>
              <option value="deposit">Deposit</option>
              <option value="withdrawal">Withdrawal</option>
            </select>
            {errors.type && (
              <small className="text-danger">{errors.type.message}</small>
            )}
          </div>

          <div className="mb-2">
            <input
              {...register("amount", {
                required: "Minimum amount is 1€!",
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "Minimum amount is 1€!",
                },
              })}
              type="number"
              className="form-control"
              placeholder="0€"
              min={1}
            />
          </div>

          <div className="mb-2">
            <input
              {...register("description")}
              type="text"
              className="form-control"
              placeholder="Description"
            />
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
