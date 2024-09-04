import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './ProductDetails.css'; // Import the CSS file

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div className="product-details-container">
            <h1 className="product-details-header">{product.title}</h1>
            <img className="product-details-image" src={product.image} alt={product.title} />
            <div className="product-details-content">
                <p className="product-details-description">{product.description}</p>
                <p className="product-details-price">${product.price}</p>
                <button className="product-details-button" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
