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
    <nav className="sticky top-0 z-50 w-full py-3 text-white bg-black">
      <div className="page_container">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">PixelAI</h1>
          {user ? (
            <button
              className="py-1.5 px-4 rounded-md bg-primary font-semibold text-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="py-1.5 px-4 rounded-md bg-primary font-semibold text-lg">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
