import React, {useContext} from 'react';
import useLogic from '../useLogic';
import {Context} from "../Context"
import {Link, Outlet, useParams} from "react-router-dom"

const Img = (props) => {
    const query = useParams()

    const {img} = props
    const {height, width, urls, price, likes, id, isFavorite, user} = img

    const {favorite, addToCart, cart, removeFromCart,} = useContext(Context)

    const ratio =  height/width

    const {hovered, hoverRef} = useLogic()
    
    const inCart = cart.some(photo => photo.id === img.id)

    const orientation = () => {
        if(ratio < .8) {
            return "landscape"
        }else if(ratio < 1.2) {
            return "squarish"
        }else {
            return "portrait"
        }
    }

    const heartIcon = !isFavorite? <i className="ri-heart-line heart icon" onClick={() => favorite(id)}></i> :  <i className="ri-heart-fill heart icon" onClick={() => favorite(id)}></i>

    const photographer = <small className="photographer"><img src={user.profile_image.small} alt={`${user.first_name}'s profile photo`} className="profile-photo"/> {user.first_name} {user.last_name}</small>

    const cartIcon = inCart?<i className="ri-shopping-cart-fill add icon" onClick={() => removeFromCart(id)}></i>  : hovered && <i className="ri-add-circle-line add icon" onClick={() => addToCart(id)}></i> 

    const imgLikes = <span className="likes">{likes}</span>

    const imgPrice =  <span className="price">${price}</span>

    

    return (
        <div className={`img-div ${orientation()}`} ref={hoverRef}>
            {hovered && photographer}
            {hovered && heartIcon}
            {hovered && cartIcon}
            {hovered && imgLikes}
            {hovered && imgPrice}
            <Link to={`/${id}`}><img src={urls.small} alt="" className={`img `} /></Link>
            
        </div>
    )
}

export default Img