import React, {useContext} from 'react';
import Img from "../components/Img"
import {Context} from "../Context"
import { Outlet} from 'react-router-dom';

const Photos = (props) => {
    const {images} = useContext(Context);

    const allImages = images.map(img => (<Img key={img.id} img={img} />) );
    
    return (
        <div className="photos-page container">
            {allImages}
            {/* <Outlet /> */}
        </div>
    )
}

export default Photos