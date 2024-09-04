import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart-container">
            <h1 className="cart-header">Shopping Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-content">
                            <h2 className="cart-item-title">{item.title}</h2>
                            <p className="cart-item-price">${item.price.toFixed(2)}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="total-cost">Total: ${totalCost.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;
