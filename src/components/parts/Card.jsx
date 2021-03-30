import { useState, useEffect} from 'react';
import * as galleryService from '../../services/galleryService';
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
    let [expanded, setExpanded] = useState(null);    
    let [card, setCard] = useState({});
    
    // useEffect(() => {
    //     galleryService.getOne(match.params.id)
    //     .then(res => setCard(res));
    // }, [match]);
    const mosaicPreview = url.split('/gallery/');
    console.log(mosaicPreview);
    
    return(
        <div className={gridClass}> 
                <figure className="Figure"> 
                    <div className="image-container"> 
                        <Link to={url} > 
                            <img src={picture} alt={caption} />
                        </Link>
                    </div>
                    
                    <figcaption> 
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