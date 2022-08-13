import React, {useContext} from 'react';
import CartImg from "../components/CartImg"
import {Context} from "../Context"


const Cart = (props) => {
    const {cart} = useContext(Context)
    const cartPhotos = cart.map(img => (<CartImg key={img.id} img={img} />))

    const orderBtn = cart.length > 0? <span className="order-btn">Place Order</span>: <span className="order-btn">Add items</span>
    
    return (
        <div className="cart-page container">
            {cartPhotos}
            {orderBtn}
        </div>
    )
}

export default Cart