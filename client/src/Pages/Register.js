import React, { useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import { auth, googleProvider } from "../Config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      setLoading(false);
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  return (
    <>
      <main>
        <Nav />
        <section className="py-12 px-6 bg-[#f9fafc] min-h-[70vh]">
          <div className="max-w-md mx-auto bg-white p-8 shadow-md">
            <h2 className="text-xl font-medium mb-4">Register</h2>
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border outline-none rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border outline-none rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border outline-none rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-4 py-2 rounded-md mb-4"
              >
                {loading ? <Loader /> : "Sign Up"}
              </button>
            </form>
            <div className="flex items-center  mb-4 ">
              <hr className="h-0.5 w-full" />
              <p className="text-center py-1 px-1.5 border">OR</p>
              <hr className="h-0.5 w-full" />
            </div>

            <button
              onClick={signInWithGoogle}
              className="w-full bg-black text-white px-4 py-2 rounded-md mb-6"
            >
              Sign Up with Google
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-primary">
                Log In
              </Link>
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Register;
