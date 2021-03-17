import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom' ;

// import galleryService from '../../services/galleryService';

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Footer from './components/layouts/Footer';
import  './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mosaics: {},
            selectedMosaic: null
        }
        
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
    }
    
    componentDidMount() {
        // galleryService.getAll()
        //     .then(cards => {
        //         this.setState(() => ({cards})); // 4
        //     });
    }
    
    onMenuItemClick(id) {
        this.setState({selectedMosaic: id});
    }
    
    getMosaic() {
        if(!this.state.selectedMosaic) {
            return this.state.mosaics;
        } else {
            return [this.state.mosaics.find(m => m.id === this.state.selectedMosaic)];
        }
    }
    
    render() {
        return (
            <div className="App">
                <Header />
                <Switch >
                    
                    <Route path="/contact" component={Contact}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Home}>
                        <Home pictures={this.getMosaic()}/>
                    </Route>
                </Switch>                
                <Footer/>        
            </div>
        );
    }
    
    
}

export default App;
