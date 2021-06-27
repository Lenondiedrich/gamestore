import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/index";
import HomePage from "./components/HomePage/index";
import CartPage from "./components/CartPage/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
        </Route>
        <Route path="/cart">
          <Header />
          <CartPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
