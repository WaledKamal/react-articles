import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import View from "../Pages/View";
import Error404 from "../Pages/Error404";

export default function NavRoot() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/View/:topicId" element={<View/>}/>
      <Route path="/View" element={<Error404/>}/>
    </Routes>
  );
}
