import { Component, Suspense } from 'react';
// import { useState } from 'react';
// import * as galleryService from '../../services/galleryService';
import { Link } from 'react-router-dom'; 

import './Card.scss';

const Card = ({
    caption,
    picture,
    author,
    clickHandler,
    url
}) => {
    
    // let [expanded, setExpanded] = useState(null);    
    // let [card, setCard] = useState({});
    
    
    return(
        <div className="Card"> 
                <figure className="Figure"> 
                    <div className="image-container"> 
                        <Suspense fallback={
                            <span className="loading">Loading Panneaux...</span>
                        }>
                            {/* <Panneaux /> */}
                            <Link to={'/gallery/' + url} > 
                                <img src={picture} alt={caption} />
                            </Link>
                        </Suspense>
                    
                        {/* <Link to={'/gallery/' + url} > 
                            <img src={picture} alt={caption} />
                        </Link> */}
                    </div>
                    
                    <figcaption> 
                    "{caption}" by {author}                       
                    </figcaption>
                </figure>
        </div>
    );
};

export default Card;