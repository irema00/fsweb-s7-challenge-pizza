import React from "react";
import PizzaForm from "./components/Pages/orderPage/PizzaForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import SuccessPage from "./components/Pages/SuccessPage";
import NotFoundPage from "./components/Pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/pizza-success">
            <SuccessPage id="success-page" />
          </Route>
          <Route exact path="/" component={HomePage} />
          <Route path="/pizza">
            <PizzaForm id="pizza-form" />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
