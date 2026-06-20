import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as AuthService from "../services/auth-service";
import { useAuth } from "../contexts/auth-context";
import { useEffect } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm();

  // If an user already exists then go to home
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  // On submit do:
  const handleLogin = async (user) => {
    try {
      //Send user data to API
      user = await AuthService.loginUser(user);
      login(user);
      navigate("/home");
    } catch (error) {
      console.error(error);

      // If something went wrong
      if (error.response?.status === 401) {
        const message = error.response.data?.message;

        setError("password", { message });

        return;
      }

      if (error.response?.status === 400) {
        Object.keys(error.response.data.errors).forEach((field) => {
          setError(field, { message: error.response.data.errors[field] });
        });
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
      <h1 className="mb-4">Login</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        {/* Email */}
        <div className="mb-3">
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            autoComplete="on"
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
