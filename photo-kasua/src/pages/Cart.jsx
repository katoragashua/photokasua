import React, {useContext} from 'react';
import CartImg from "../components/CartImg";
import {Context} from "../Context";
import {Link} from "react-router-dom";

const Cart = (props) => {
    const {cart} = useContext(Context)
    const cartPhotos = cart.map(img => (<CartImg key={img.id} img={img} />))

    const orderBtn = cart.length > 0? <span className="order-btn">Place Order</span>: <Link to={"/"} className="order-btn"><span >Add items</span>
    </Link>
    return (
        <div className="cart-page container">
            {cartPhotos}
            {orderBtn}
        </div>
    )
}

export default Cart