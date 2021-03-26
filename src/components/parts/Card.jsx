import { useState, useEffect} from 'react';
import * as galleryService from '../../services/galleryService';
import { Link } from 'react-router-dom'; 

import './Card.scss';

const Card = ({
    match,
    caption,
    picture,
    author,
    created,
    dimensions,
    clickHandler,
    url
}) => {
    let [expanded, setExpanded] = useState(null);    
    let [card, setCard] = useState({});
    
    // useEffect(() => {
    //     galleryService.getOne(match.params.id)
    //     .then(res => setCard(res));
    // }, [match]);
    
    return(
        <div className="Card"> {/* gallery-container */}
                <figure className="Figure"> {/* gallery-item */}
                    <div className="image-container"> {/* image */}
                        <Link to={url} > 
                            <img src={picture} alt={caption} />
                        </Link>
                    </div>
                    
                    <figcaption> {/* text */}
                    "{caption}" by {author}                       
                    </figcaption>
                </figure>
            {/* <div className="Card-Description" >
                <p className="created">
                    {created}
                </p>
                <p className="dimensions">
                    {dimensions}
                </p>
            </div>
            {expanded === 1 && <h1>it works</h1>} */}
        </div>
    );
};

export default Card;