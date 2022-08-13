import React, {useState, useContext, useRef} from "react";
import {Link, useLocation} from "react-router-dom";
import {Context} from "../Context";


const Header = () => {

    const [search, setSearch] = useState(() => false);
    
    const {pathname} = useLocation();

    const queryRef = useRef(null);

    const {cart, updateQuery} = useContext(Context);

    const cartIcon = cart.length > 0 ? <i className="ri-shopping-cart-fill cart icon"></i> : <i className="ri-shopping-cart-line cart icon" ></i>;

    const toggleSearch = () => (setSearch(prev => !prev));

    const searchQuery =
                (!search? 
                <a href="#" onClick={toggleSearch}><i className="ri-search-line icon"></i></a> :
                <div className="search">
                    <input type="search" ref={queryRef}/>
                    <span className="enterBtn" onClick={() => {toggleSearch(); updateQuery(queryRef.current.value)}}>Search</span>
                </div>);


    return (
        <header>
            <div className="header container">
                <Link to={"/"}><h1 onClick={() => updateQuery("")}>Photo-Kasua</h1></Link>
                <nav className="nav">
                    {pathname === "/" && searchQuery}
                    <Link to={"/"}><i className="ri-home-5-fill home icon" onClick={() => updateQuery("")}></i></Link>
                    <Link to={"/cart"}>{cartIcon}</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header