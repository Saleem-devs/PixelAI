import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase";

const withAuthProtection = (Component) => {
  const ProtectedComponent = (props) => {
    const [user, loading] = useAuthState(auth);
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      if (!authenticated && !loading && !user) {
        navigate("/login");
      } else {
        setAuthenticated(true);
      }
    }, [authenticated, loading, navigate, user]);

    return <Component {...props} />;
  };

  return ProtectedComponent;
};

export default withAuthProtection;
