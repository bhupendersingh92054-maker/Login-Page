import React from "react";
import Login from "./components/Login";
import Hero from "./components/Hero";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
