import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./templates/Home/Home";
import About from "./templates/About/About";
import Design from "./templates/Portfolio/Design/Design";
import Development from "./templates/Portfolio/Development/Development";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-me" exact element={<About />} />
        <Route path="/design-projects" exact element={<Design />} />
        <Route path="/development-projects" exact element={<Development />} />
      </Routes>
    </Router>
  );
};

export default App;
