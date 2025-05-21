import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail, validatePassword } from "../../validations/loginValidations";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter  a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must contain Minimum eight characters, at least one letter and one number");
      return;
    }
    setError("");
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border border-gray-300 rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-xs pb-1" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="btn-primary cursor-pointer">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registred yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
