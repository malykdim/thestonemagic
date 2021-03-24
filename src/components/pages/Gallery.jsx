
import { Component } from 'react';
import * as galleryService from '../../services/galleryService';
import Card from '../parts/Card';
import './Gallery.scss';

class Gallery extends Component {
        constructor(props) {
            super(props)
            
            this.state = { // 1, 5
                gallery: []
            }
        }
        
        cardClicked(id) {
            console.log(`Implement overlay for each ${id}!`);
        }
        
        componentDidMount() { // 3
            galleryService.getAll()
            .then(res => 
                this.setState({gallery: res}) 
            );
        }
        
        /* componentDidUpdate() {
            galleryService.getAll()
            .then(res => 
                this.setState({gallery: res}) 
            );
        } */
        
        render() { // 2, 6
            
            if (this.state.gallery.length === 0) {
                return <span>Loading Gallery...</span>
            }
            
            return ( 
                <main className="AppMain">
                    <h2>Gallery</h2>
                    <section className="AppMain-Gallery">
                    {this.state.gallery.map((card) => 
                        <Card 
                            key={card.id}
                            {...card} 
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