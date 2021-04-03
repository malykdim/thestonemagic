// import { useState } from 'react';
// import * as galleryService from '../../services/galleryService';
import { Link } from 'react-router-dom'; 

import './Card.scss';

const Card = ({
    match,
    caption,
    picture,
    gridClass,
    author,
    created,
    dimensions,
    clickHandler,
    url
}) => {
    // let [expanded, setExpanded] = useState(null);    
    // let [card, setCard] = useState({});
    
    
    return(
        <div className={gridClass}> 
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