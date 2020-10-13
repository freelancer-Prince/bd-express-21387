import React, { createContext, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import ProductsContext from './Global/ProductsContext';
import NotFound from './components/NotFound/NotFound';
import CartContext from './Global/CartContext';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <>
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <ProductsContext>
      <CartContext>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/shipment">
          <Shipment />
        </PrivateRoute>
        <Route exact path="/*">
          <NotFound />
        </Route>
      </Switch>
      </Router>
      </CartContext>
      </ProductsContext >
    </UserContext.Provider>
    </>
  );
}

export default App;
