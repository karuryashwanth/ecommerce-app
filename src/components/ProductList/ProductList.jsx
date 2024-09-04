import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => dispatch({ type: 'SET_PRODUCTS', payload: data }));
    }, [dispatch]);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const handleRedirect = (id) => {
        navigate(`/product/${id}`)
    }

    const handleViewCart = () => {
        navigate('/cart');
    }
    return (
        <div className="product-list-container">
            <div className="product-list">
                {products.map(product => (
                    <div className="product-card" key={product.id} onClick={() => handleRedirect(product.id)}>
                        <img src={product.image} alt={product.title} />
                        <div className="product-card-content">
                            <h2 className="product-card-title">{product.title}</h2>
                            <p className="product-card-price">${product.price.toFixed(2)}</p>
                            <div className="product-card-actions">
                                {/* <Link to={`/product/${product.id}`}>View Details</Link> */}
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
