import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import CreateImage from "./Pages/CreateImage";
import Snackbar from "./Components/Snackbar";

function App() {
  return (
    <>
      <Router>
        <Snackbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateImage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
