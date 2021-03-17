import { Component } from 'react';
import * as galleryService from '../../services/galleryService';

import './Card.scss'

class Card extends Component {
    constructor(props) {
        super(props)
        
        this.state = { // 1, 5
            panel: [],
            description: []
        }
    }
    
    cardClicked(caption) {
        console.log(`Implement preview for ${caption}!`);
    }
    
    componentDidMount() { // 3
        galleryService.getAll()
        .then(cards => {
            this.setState(() => ({cards})); // 4
        });
    }
    
    render(props) {
        return (
        <div className="card">
            <div className="showcase">
                <figure>
                    <figcaption>
                        {props.children}
                    </figcaption>
                </figure>
            </div>
            <div className="description">
                <p className="created">
                    {props.created}
                </p>
                <p className="dimensions">
                    {props.dimensions}
                </p>
                <p className="materials">
                    {props.materials}
                </p>
            </div>
        </div>
        );
    }
}

export default Card;