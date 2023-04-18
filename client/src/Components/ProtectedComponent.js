import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase";
import Login from "../Pages/Login";
import Loader from "./Loader";

const ProtectedComponent = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    // Render a loading indicator
    return (
      <div className="h-[90vh] w-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!user) {
    // Render the login component
    return <Login />;
  }

  // Render the protected component
  return <>{children}</>;
};

export default ProtectedComponent;
