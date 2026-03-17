import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignupUser } from "../reduxStore/AllFeatureSlice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useFormStatus } from "react-dom";

/* React 19 Loading Button */

function SubmitButton() {

  const { pending } = useFormStatus();

  return (

    <button
      type="submit"
      disabled={pending}
      className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
    >
      {pending ? "Creating account..." : "Sign Up"}
    </button>

  );

}

function Signup() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const SignupAction = async (formData) => {

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {

      setError("All fields are required");
      return;

    }

    try {

      const result = await dispatch(
        SignupUser({ name, email, password })
      );

      if (result.meta.requestStatus === "fulfilled") {

        navigate("/");

      } else {

        setError("Signup failed");

      }

    } catch (err) {

      setError("Something went wrong");

    }

  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        action={SignupAction}
        className="bg-white p-6 rounded shadow w-96"
      >

        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full border p-2 mb-3 rounded"
        />

        <SubmitButton />

      </form>

    </div>

  );

}

export default Signup;