import React, { createContext, useState} from 'react';

import dslr from '../images/dslr.jpg';
import headphone from '../images/headphone.jpg';
import iphone from '../images/iphone.jpg';
import microphone from '../images/microphone.jpg';
import ring from '../images/ring.jpg';
import shoes from '../images/shoes.jpg';
import watch from '../images/watch.jpg';
import monitor from '../images/monitor.jpg';
import laptop from '../images/laptop.jpg'
import shirt from '../images/shirt.jpg'
import sunGlass from '../images/sun glass.jpg'
import bag from '../images/bag.jpg'
import tShirt from '../images/t-shirt.jpg'
import controler from '../images/game controler.jpg'


export const ProductContextApi = createContext();

const ProductsContext = (props) => {
    const [products] = useState([
        {id: 1, name:'DSLE camera', price: 300, image: dslr, status:'hot'},
        {id: 2, name:'Head phone', price: 30, image: headphone, status:'new'},
        {id: 3, name:'Iphone', price: 400, image: iphone, status:'hot'},
        {id: 4, name:'Micro phone', price: 200, image: microphone, status:'new'},
        {id: 5, name:'Watch', price: 120, image: watch, status:'hot'},
        {id: 6, name:'Monitor', price: 150, image: monitor, status:'new'},
        {id: 7, name:'Ring', price: 100, image: ring, status:'new'},
        {id: 8, name:'Shoes', price: 80, image: shoes, status:'hot'},
        {id: 9, name:'Laptop', price: 385, image: laptop, status:'hot'},
        {id: 10, name:'Shirt', price: 50, image: shirt, status:'hot'},
        {id: 11, name:'Sun glass', price: 24, image: sunGlass, status:'new'},
        {id: 12, name:'Bag', price: 80, image: bag, status:'hot'},
        {id: 13, name:'T-shirt', price: 38, image: tShirt, status:'hot'},
        {id: 14, name:'Game controler', price: 65, image: controler, status:'hot'},
        {id: 15, name:'Shoes', price: 80, image: shoes, status:'hot'},
    ])
    return (
        <>
            <ProductContextApi.Provider value={{products: [...products]}}>
                {props.children}
            </ProductContextApi.Provider>
        </>
    );
};

export default ProductsContext;