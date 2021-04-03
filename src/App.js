import { Component } from 'react';
import { Route, Switch } from 'react-router-dom' ;

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Edit from './components/pages/Edit';
import Panneaux from './components/pages/Panneaux';
import Footer from './components/layouts/Footer';
import  './App.scss';

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <Header title="The Stone Magic"/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/thestonemagic" component={Home} />
                    <Route path="/gallery" exact component={Gallery}/>
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                    <Route path="/edit" component={Edit} />
                    <Route path="/gallery/:url" exact component={Panneaux} />
                </Switch>                
                <Footer icon="fas fa-sign-in-alt"/>        
            </div>
        );
    }
}

export default App;
