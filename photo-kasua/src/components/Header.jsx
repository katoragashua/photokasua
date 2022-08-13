import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../Context";


const Header = () => {
    const {cart} = useContext(Context);
    const cartIcon = cart.length > 0 ? <i className="ri-shopping-cart-fill cart icon"></i> : <i className="ri-shopping-cart-line cart icon" ></i>
    return (
        <header>
            <div className="header container">
                <Link to={"/"}><h1>Photo-Kasua</h1></Link>
                <nav className="nav">
                    <a href=""><i className="ri-search-line search icon"></i></a>
                    <Link to={"/"}><i className="ri-home-5-fill home icon"></i></Link>
                    <Link to={"/cart"}>{cartIcon}</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header