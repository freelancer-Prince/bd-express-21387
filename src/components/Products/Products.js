import React, { useContext }  from 'react';
import './Products.css'
import { ProductContextApi } from '../../Global/ProductsContext';
import { CartContextApi } from '../../Global/CartContext';
import { Card, Button } from 'react-bootstrap';

const Products = () => {
    const {products} = useContext(ProductContextApi); 
    const {dispateh} = useContext(CartContextApi);
    
    return (
        <>
       
    
                <div className="products d-flex justify-content-center">
            {products.map((product) =>(
                <div className="row">
                    <div  className="col-md-3 pt-2">    
                    <Card id="card">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title className="product-name"> {product.name}</Card.Title>
                            <Card.Text className="product-price">
                            ${product.price}.00
                            </Card.Text>
                            <Button className="add-to-cart" variant="primary"  onClick={() => dispateh({type:'ADD_TO_CART', id: product.id, product})}>Add to cart</Button>
                        
                        </Card.Body>
                        
                             {product.status === 'hot' ? <div className="hot">Hot</div>: ''}
                            {product.status === 'new' ? <div className="new">Now</div>: ''}
                        
                           
                        </Card>
                        
                </div>
                </div>
            ))}

            
        </div>
        
        
        </>
    );
};

export default Products;