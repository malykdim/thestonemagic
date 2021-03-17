
import { Component } from 'react';
import * as galleryService from '../../services/galleryService';
import Card from './Card';
import './Gallery.scss';

class Gallery extends Component {
        constructor(props) {
            super(props)
            
            this.state = { // 1, 5
                gallery: []
            }
        }
        
        cardClicked(caption) {
            console.log(`Implement preview for ${caption}!`);
        }
        
        componentDidMount() { // 3
            galleryService.getAll()
            .then(gallery => {
                this.setState(() => ({gallery})); // 4
            });
        }
        
        render() { // 2, 6
            
            if (this.state.gallery.length === 0) {
                return <span>Loading Gallery...</span>
            }
            
            return ( 
                <main className="App-gallery">
                    <h2>Gallery</h2>
                    <section className="gallery">
                    {this.state.gallery.map((card) => 
                        <Card 
                            key={card.id} 
                            caption={card.caption} 
                            author={card.author} 
                            clickHandler={() => this.cardClicked(card.caption)}
                        /> // 7
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