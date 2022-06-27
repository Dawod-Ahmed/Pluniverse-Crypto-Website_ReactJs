import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";

import {
  HomePage,
  BagdePage,
  Header,
  Footer,
} from "./Pages/Home/components/components";

// import BadgePage from "./Pages/BagdePage/index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        {/* <Route exact path="/founderbadge" element={<BagdePage />} /> */}
        {/* <Redirect exact to="/" /> */}
      </Routes>
      {/* <HomePage /> */}
      {/* <BagdePage /> */}
      <Footer />
    </>
  );
};

export default App;
