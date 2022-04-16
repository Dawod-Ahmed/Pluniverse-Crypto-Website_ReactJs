import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import HomePage from "./Pages/Home/index";
import BadgePage from "./Pages/BagdePage/index";
const App = () => {
  return (
    <div>
      {/* <Router>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/founderbadge" element={<BadgePage />}></Route>
      </Router> */}
      {/* <HomePage /> */}
      <BadgePage />
    </div>
  );
};

export default App;
