import './Card.scss'
import { useState } from 'react';

const Card = (props) => {
    let [expanded, setExpanded] = useState(null);

    return(
        <div className="card" onClick={() => props.clickHandler(props.caption)}>
            <div className="showcase">
                <figure>
                    <figcaption>
                        {props.children}
                    </figcaption>
                </figure>
            </div>
            <div className="description" onClick={() => setExpanded(1)}>
                <p className="created">
                    {props.author}
                </p>
                <p className="dimensions">
                    {props.caption}
                </p>
            </div>
            {expanded === 1 && <h1>it works</h1>}
        </div>
    );
};

export default Card;