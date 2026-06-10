import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as AuthService from "../services/auth-service";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try {
      console.log(user);
      user = await AuthService.loginUser(user);
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
      <h1 className="mb-4">Login</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        {/* Email */}
        <div className="mb-3">
          <input
            {...register("email")}
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            {...register("password")}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            autoComplete="on"
          />
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
