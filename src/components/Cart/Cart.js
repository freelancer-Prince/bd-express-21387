import React from 'react';
import './Cart.css'
import { useContext } from 'react';
import { CartContextApi } from '../../Global/CartContext';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const Cart = () => {

    const history = useHistory()
    const handelProceedCheckout = () =>{
        history.push('/shipment')
    }

    const {shoppingCart, totalPrice, qty, dispateh} = useContext(CartContextApi)
    console.log(shoppingCart)
    return (
        <div className="row">
            .col
            <div className="cart-container">
                <div className="cart-details">
                    {shoppingCart.length > 0 ?
                        shoppingCart.map(cart =>(
                            <div className="cart" key={cart.id}>
                                <span className="cart-image">
                                    <img src={cart.image} alt=""/>
                                </span>    
                                <span className="cart-product-name">
                                    {cart.name}
                                </span>
                                <span className="cart-product-price">
                                    {cart.price}
                                </span>
                                <span className="inc" onClick={() => dispateh({type:'INC', id:cart.id, cart})}>
                                    <i className="fas fa-plus"></i>
                                </span>
                                <span className="product-quantity">
                                    {cart.qty}
                                </span>
                                <span className="dec" onClick={() => dispateh({type:'DEC', id:cart.id, cart})}>
                                    <i className="fas fa-minus"></i>
                                </span>
                                <span className="product-total-price">
                                    {cart.price * cart.qty}.00
                                </span>
                                <span className="delete-product" onClick={() => dispateh({type:'DELETE', id:cart.id, cart})}>
                                    <i className="fas fa-trash-alt"></i>
                                </span>
                            </div>
                        ))
                     : 'Sorry your cart is currently empty'}
                </div>
                {shoppingCart.length > 0 ? <div className="cart-summary">
                    <div className="summary">
                            <h3>Cart Summary</h3>
                            <div className="total-items">
                                <div className="items">Total Items</div>
                                <div className="items-count">{qty}</div>
                            </div>
                            <div className="total-price-section">
                                <div className="just-title">Total Price</div>
                                <div className="items-price">${totalPrice}. 00</div>
                            </div>
                            <div className="stripe-section">
                                <Button onClick={handelProceedCheckout}>Proceed Checkout</Button>
                            </div>
                    </div>
                </div>  : "" }
            </div>
        </div>
    );
};

export default Cart;