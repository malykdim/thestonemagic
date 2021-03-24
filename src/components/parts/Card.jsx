import { useState, useEffect} from 'react';
import * as galleryService from '../../services/galleryService'; 

import './Card.scss';

const Card = ({
    match,
    caption,
    picture,
    author,
    created,
    dimensions,
    clickHandler
}) => {
    let [expanded, setExpanded] = useState(null);
    
    let [card, setCard] = useState({});
    
    // useEffect(() => {
    //     galleryService.getOne(match.params.id)
    //     .then(res => setCard(res));
    // }, [match]);
    
    return(
        <div className="Card" onClick={() => clickHandler(caption)}>
            <div className="Card-Showcase" onClick={() => setExpanded(1)}>
                <figure className="Figure">
                    <img src="/public/art-9-sun.jpg" alt="panneaux"></img>
                    <figcaption>
                    "{caption}" by {author}                       
                    </figcaption>
                </figure>
            </div>
            <div className="Card-Description" >
                <p className="created">
                    {created}
                </p>
                <p className="dimensions">
                    {dimensions}
                </p>
            </div>
            {expanded === 1 && <h1>it works</h1>}
        </div>
    );
};

export default Card;