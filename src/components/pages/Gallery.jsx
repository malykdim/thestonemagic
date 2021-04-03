
import { Component } from 'react';
import request from '../../services/ajax.js';
import Card from '../parts/Card';
import './Gallery.scss';

class Gallery extends Component {
        constructor(props) {
            super(props)
            
            this.state = { // 1, 5
                gallery: []
            }
            
        }
        
        componentDidMount() { // 3
            request('/classes/Gallery', 'GET')
                .then(response => {
                    this.setState({gallery: response.results});
                    console.log('gallery', this.state.gallery);
                });
        }
        
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
                        key={card.objectId}
                        {...card} 
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