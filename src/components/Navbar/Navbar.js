import React from 'react';
import './Navbar.css'
import { useContext } from 'react';
import { CartContextApi } from '../../Global/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {qty} = useContext(CartContextApi)
    
    return (
        <nav>
            <div className="row">
                <div className="col-md-6 logo">
                     <span className="left">
                    <Link to="/">BdExpress</Link>
            </span>
                </div>
                <div className="col-md-6 menu">
                     <div className="d-flex flex-row-reverse menu-wrap">
                   
                     <Link to="cart">

                    <span className="shoppingCart">
                         <i className="fas fa-cart-plus"></i>
                    <span className="cartCount">{qty}</span>
                     </span>
                     </Link>
                      <Link to="/login" className="login">Log In</Link>
                     </div>
                </div>
           
           
           </div>
        </nav>
    );
};

export default Navbar;