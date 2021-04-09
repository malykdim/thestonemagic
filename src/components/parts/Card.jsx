// import { useState } from 'react';
// import * as galleryService from '../../services/galleryService';
import { Link } from 'react-router-dom'; 

import './Card.scss';

const Card = ({
    caption,
    picture,
    author,
    url
}) => {
    
    return(
        <div className="Card"> 
                <figure className="Figure"> 
                    <div className="image-container"> 
                            <Link to={'/gallery/' + url} > 
                                <img src={picture} alt={caption} />
                            </Link>
                    </div>
                    <figcaption> 
                    "{caption}" by {author}                       
                    </figcaption>
                </figure>
        </div>
    );
};

export default Card;