import React from "react";
// import { Route, Switch, Redirect } from "react-router-dom";

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
      {/* <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/founderbadge" component={BadgePage} />
        <Redirect exact to="/" />
      </Switch> */}
      <HomePage />
      {/* <BagdePage /> */}
      <Footer />
    </>
  );
};

export default App;
