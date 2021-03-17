
import { Component } from 'react';
import galleryService from '../../services/galleryService';
import Card from './Card';
import './Gallery.scss';

class Gallery extends Component {
        constructor(props) {
            super(props)
            
            this.state = { // 1, 5
                cards: []
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
        
        render() { // 2, 6
            
            if (this.state.cards.length === 0) {
                return <span>Loading Gallery...</span>
            }
            
            return ( 
                <main className="App-gallery">
                    
                    <section className="gallery">
                    {this.state.cards.map((card) => 
                        <Card // 7
                            key={card.id} 
                            caption={card.caption} 
                            author={card.author} 
                            clickHandler={() => this.cardClicked(card.caption)}
                        />
                    )}
                    </section>
                    
                    <p>
                        In Development Stage...
                    </p>
                    
                </main>                
            )
        }            
}

export default Gallery;