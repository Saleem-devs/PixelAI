import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase";

function Nav() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full py-3 text-black bg-[#f9fafc]">
      <div className="container px-8 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">PixelAI</h1>
          {user ? (
            <button
              className="py-2 px-6 rounded-md bg-primary text-white"
              onClick={handleLogout}
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="py-2 px-6 rounded-md bg-primary text-white">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
