import './App.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Header from "./components/Header/index";
import HomePage from "./components/HomePage/index";
import CartPage from "./components/CartPage/index";


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
          <HomePage />
        </Route>
        <Route path="/cart">
          <Header />
          <CartPage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
