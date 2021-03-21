import './Card.scss'
import { useState, useEffect } from 'react';
import * as galleryService from '../../services/galleryService'; 

const Card = ({
    match,
    
    
    clickHandler
}) => {
    let [expanded, setExpanded] = useState(null);
    
    let [card, setCard] = useState({});
    
    useEffect(() => {
        galleryService.getOne(match.params.id)
        .then(res => setCard(res));
    }, [match]);
    
    return(
        <div className="card" onClick={() => clickHandler(card.caption)}>
            <div className="showcase" onClick={() => setExpanded(1)}>
                <figure>
                    <img src={card.picture} alt="mosaic"/>
                    <figcaption>
                    "{card.caption}" by {card.author}                       
                    </figcaption>
                </figure>
            </div>
            <div className="description" >
                <p className="created">
                    {card.created}
                </p>
                <p className="dimensions">
                    {card.dimensions}
                </p>
            </div>
            {expanded === 1 && <h1>it works</h1>}
        </div>
    );
};

export default Card;