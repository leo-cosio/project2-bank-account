import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center min-vh-100">
      <h1 className="mb-4">Login</h1>

      <form>
        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        {/* Botón submit */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
