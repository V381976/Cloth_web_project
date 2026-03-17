import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../reduxStore/AllFeatureSlice/AuthSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormStatus } from "react-dom";

/* React 19 Loading Button */

function SubmitButton() {

  const { pending } = useFormStatus();

  return (

    <button
      type="submit"
      disabled={pending}
      className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition"
    >
      {pending ? "Logging in..." : "Login"}
    </button>

  );

}

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  /* React 19 Form Action */

  const LoginAction =  async(formData) => {

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {

      setError("All fields are required");
      return;

    }

    try {

      const result = await  dispatch(LoginUser({ email, password }));

      if (result.meta.requestStatus === "fulfilled") {

        navigate("/");

      } else {

        setError("Invalid email or password");

      }

    } catch (err) {

      setError("Something went wrong");

    }

  };
  
  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        action={LoginAction}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >

        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        {/* Error Message */}

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* Email */}

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
        />

        {/* Password */}

        <div className="relative">

          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border p-2 mb-4 rounded"
          />

          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        {/* Submit Button */}

        <SubmitButton />

        {/* Signup Link */}

        <p className="text-sm text-center mt-4">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-blue-500 font-medium"
          >
            Signup
          </Link>

        </p>

      </form>

    </div>

  );

}

export default Login;