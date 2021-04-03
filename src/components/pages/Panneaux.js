import { Component } from 'react';

import  './Panneaux.scss';
import request from '../../services/ajax';

class Panneaux extends Component {
    constructor(props) {
        super(props)
        
        this.state = { // 1, 5
            mosaic: {}
        }
        
    }
    
    componentDidMount() { // 3
        // this.props.match.params.mosaicName
        // let mosaicName = this.props.match.params.mosaicName;
        // let url = mosaicName;
        let url = this.props.history.location.pathname.split('/');
        let mosaicName = url[url.length - 1];
        request('/classes/Gallery', 'GET', `?where=${JSON.stringify({"url": mosaicName})}`)
            .then(res => {
                this.setState({mosaic: res.results[0]});
            });
    }
    
    render() {
        if (this.state.mosaic.length === 0) {
            return <span>Loading Panneaux...</span>
        }
        
        return (
            <main className="AppMain">
                
                {/* <h2>Exquisite Mosaic Panneaux</h2> */}
                
                <section className="AppMain-Panneaux"> 
                
                <div className="PanneauxDescriptionContainer w-1 h-3">
                        <h3 className="caption">{this.state.mosaic.caption}</h3>
                        <span>by</span>
                        <h3 className="author">{this.state.mosaic.author}</h3>
                        <p className="created">{this.state.mosaic.created}</p>
                    </div>
                
                    <div className="PanneauxImageContainer w-4 h-3">
                        <div className="imageWrapper">
                            <img src={this.state.mosaic.picture}  alt={this.state.mosaic.caption} />
                        </div>
                    </div>
                    
                    <div className="PanneauxDescriptionContainer w-1 h-3">
                        <p className="dimensions">{this.state.mosaic.width} x {this.state.mosaic.height}</p>
                        <p className="materials">{this.state.mosaic.materials}</p>
                    </div>
                    
                </section>
                        
            </main>
        )        
    }
}

export default Panneaux;