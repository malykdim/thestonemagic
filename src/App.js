import { Component } from 'react';
import { Route, Switch } from 'react-router-dom' ;

// import * as galleryService from './services/galleryService';
import  './App.scss';

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Footer from './components/layouts/Footer';

class App extends Component {
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //         mosaics: [],
    //         selectedMosaic: null
    //     }
        
    //     this.onMenuItemClick = this.onMenuItemClick.bind(this);
    // }
    
    // componentDidMount() {
    //     galleryService.getAll()
    //         .then(mosaics => {
    //             this.setState({mosaics}); // 4
    //         });
    // }
    
    // onMenuItemClick(id) {
    //     this.setState({selectedMosaic: id});
    // }
    
    // getMosaic() {
    //     if(!this.state.selectedMosaic) {
    //         return this.state.mosaics;
    //     } else {
    //         return [this.state.mosaics.find(m => m.id === this.state.selectedMosaic)];
    //     }
    // }
    
    render() {
        return (
            <div className="App">
                <Header title="The Stone Magic"/>
                <Switch>
                    <Route path="/" exact component={Home}>
                        {/* <Home pictures={this.getMosaic()}/> */}
                    </Route> 
                    <Route path="/thestonemagic" component={Home} />
                    <Route path="/gallery" component={Gallery}>
                        {/* {Gallery /* gallery={this.state.gallery} */} 
                    </Route> 
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                    
                </Switch>                
                <Footer icon="fas fa-sign-in-alt"/>        
            </div>
        );
    }
    
}

export default App;
