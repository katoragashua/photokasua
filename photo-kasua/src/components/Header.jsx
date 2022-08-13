import React, {useState, useContext, useRef} from "react";
import {Link} from "react-router-dom";
import {Context} from "../Context";


const Header = () => {

    const [search, setSearch] = useState(() => false)
    
    const queryRef = useRef(null)
    console.log(queryRef)

    const {cart, updateQuery} = useContext(Context);

    const cartIcon = cart.length > 0 ? <i className="ri-shopping-cart-fill cart icon"></i> : <i className="ri-shopping-cart-line cart icon" ></i>

    const toggleSearch = () => (setSearch(prev => !prev))

    const searchQuery =
                (!search? 
                <a href="#" onClick={toggleSearch}><i className="ri-search-line icon"></i></a> :
                <div className="search">
                    <input type="search" ref={queryRef}/>
                    <span className="enterBtn" onClick={() => {toggleSearch(); updateQuery(queryRef.current.value)}}>Search</span>
                </div>)


    return (
        <header>
            <div className="header container">
                <Link to={"/"}><h1 onClick={() => updateQuery("")}>Photo-Kasua</h1></Link>
                <nav className="nav">
                    {searchQuery}
                    <Link to={"/"}><i className="ri-home-5-fill home icon" onClick={() => updateQuery("")}></i></Link>
                    <Link to={"/cart"}>{cartIcon}</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header