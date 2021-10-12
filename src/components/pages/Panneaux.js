import { Component } from 'react';
import request from '../../services/ajax';
import  './Panneaux.scss';

class Panneaux extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            mosaic: {}
        }
        
    }
    
    componentDidMount() { 
        request('/classes/Gallery', 'GET', `?where=${JSON.stringify({"url": this.props.match.params.url})}`)
            .then(res => {
                this.setState({mosaic: res.results[0]});
            });
    }
    
    render() {
        if (!this.state.mosaic.author) {
            return <span>Loading Panneaux...</span>
        }
        
        return (
            <main className="AppMain">
                
                <section className="AppMain-Panneaux"> 
                
                    <div className="PanneauxImageContainer w-4 h-4">
                        <div className="imageWrapper">
                            <img src={this.state.mosaic.picture}  alt={this.state.mosaic.caption} />
                        </div>
                    </div>
                    
                    <div className="PanneauxDescriptionContainer w-1 h-4 positionBottom">
                        <h3 className="caption">{this.state.mosaic.caption}</h3>
                        <span>|</span>
                        <h3 className="author">{this.state.mosaic.author}</h3>
                        <p className="dimensions">{this.state.mosaic.width} x {this.state.mosaic.height}</p>
                        <p className="materials">{this.state.mosaic.materials}</p>
                    </div>
                    
                </section>
                        
            </main>
        )        
    }
}

export default Panneaux;
