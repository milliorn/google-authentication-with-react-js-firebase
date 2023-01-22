import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes></Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
