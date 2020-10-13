import React, { createContext, useReducer } from 'react';
import { CartReducer } from './CartReducer';


export const CartContextApi = createContext();

const CartContext = (props) => {

    const [cart, dispateh] = useReducer(CartReducer, {shoppingCart: [], totalPrice: 0, qty: 0});

    return (
        <>
            <CartContextApi.Provider value={{...cart, dispateh}}>
                {props.children}
            </CartContextApi.Provider>
        </>
    );
};

export default CartContext;