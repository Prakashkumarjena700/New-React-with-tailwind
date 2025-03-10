import React from "react";
import { Routes, Route } from "react-router";
import Home from "../components/Home";
import About from "../components/About";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
