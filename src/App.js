import React from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./views/Home";

function App() {
  return (
    <>
      <div className="App">
        <Home />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
