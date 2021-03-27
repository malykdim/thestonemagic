import { Component } from 'react';
import { Route, Switch } from 'react-router-dom' ;

// import * as galleryService from './services/galleryService';
import  './App.scss';

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Panneaux from './components/pages/Panneaux';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Edit from './components/pages/Edit';
import Footer from './components/layouts/Footer';

class App extends Component {
    
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
    
    render() {
        return (
            <div className="App">
                <Header title="The Stone Magic"/>
                <Switch>
                    <Route path="/" exact component={Home}>
                        {/* <Home pictures={this.getMosaic()}/> */}
                    </Route> 
                    <Route path="/thestonemagic" component={Home} />
                    <Route path="/gallery" exact component={Gallery}/>
                    <Route path="/gallery/:url" exact component={Panneaux}/>
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />                    
                    <Route path="/edit" component={Edit} />                    
                </Switch>                
                <Footer icon="fas fa-sign-in-alt"/>        
            </div>
        );
    }
    
}

export default App;
