import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./pages/Signin";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
