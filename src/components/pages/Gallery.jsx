import React, { Component } from 'react';
import request from '../../services/ajax.js';
import Card from '../parts/Card';
import './Gallery.scss';

class Gallery extends Component {
        constructor(props) {
            super(props)
            
            this.state = { 
                gallery: []
            }
            
        }
        
        componentDidMount() { 
            request('/classes/Gallery', 'GET')
                .then(response => {
                    this.setState({gallery: response.results});
                });
        }
        
        render() { 
            // const contextValue = {
            //     mosaics: this.state.gallery                
            // }
            
            return ( 
                <main className="AppMain">
                    <section className="AppMain-Gallery"> 
                        {/* <GalleryContext.Provider value={contextValue}> */}
                            {this.state.gallery.map((card) => 
                                <Card 
                                    gallery={this.context}
                                    key={card.objectId}
                                    {...card} 
                                /> 
                            )}
                        {/* </GalleryContext.Provider> */}
                    </section>                    
                </main>                
            );
        }            
}

export default Gallery;