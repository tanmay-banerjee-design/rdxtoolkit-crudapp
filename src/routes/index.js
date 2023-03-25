import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBooks from "../features/AddBooks";
import ShowBooks from "../features/ShowBooks";
import Navbar from "../layoutes/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/show-books" element={<ShowBooks />} />
        <Route path="/add-book" element={<AddBooks />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Index;
