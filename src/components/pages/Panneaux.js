import { Component } from 'react';
import * as galleryService from '../../services/galleryService';

import  './Panneaux.scss';

class Panneaux extends Component {
    constructor(props) {
        super(props)
        
        this.state = { // 1, 5
            mosaic: {}
        }
        
        // props.match.params.mosaicName
    }
    
    componentDidMount() { // 3
        galleryService.getOne()
        .then(res => 
            this.setState({mosaic: res}) 
        );
    }
    
    render() {
        if (this.state.mosaic.length === 0) {
            return <span>Loading Panneaux...</span>
        }
        
        return (
            <main className="AppMain">
                
                <h2>Exquisite Mosaic Panneaux</h2>
                
                <section className="AppMain-Panneaux"> 
                
                <div className="PanneauxDescriptionContainer w-1 h-3">
                        <h3 className="caption">Sun {/* {mosaic.caption} */}</h3>
                        <span>by</span>
                        <h3 className="author">Vladimir Damyanov {/* {mosaic.author} */}</h3>
                        <p className="created">2019 {/* {mosaic.created} */}</p>
                    </div>
                
                    <div className="PanneauxImageContainer w-4 h-3">
                        <div className="imageWrapper">
                            <img src="#"/* {mosaic.picture} */ alt="mosaic"/* {mosaic.caption} */ />
                        </div>
                    </div>
                    
                    <div className="PanneauxDescriptionContainer w-1 h-3">
                        <p className="dimensions">75cm x 75cm {/* {mosaic.dimensions} */}</p>
                        <p className="materials">Materials used {/* {mosaic.materials} */}</p>
                        <span>agate, marbel, malachite, labrador, mountain crystal, citrine</span>
                    </div>
                    
                </section>
                
                <p>
                    In Development Stage...
                </p>
                        
            </main>
        )        
    }
}

export default Panneaux;