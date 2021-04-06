import { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom' ;

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Edit from './components/pages/Edit';
import Panneaux from './components/pages/Panneaux';
import Error from './components/pages/Error';
import Footer from './components/layouts/Footer';
import  './App.scss';
import { isLogged } from './services/ajax';

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <Header title="The Stone Magic"/>
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/thestonemagic" component={Home} />
                        <Route path="/gallery" exact component={Gallery}/>
                        <Route path="/contact" component={Contact} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route exact path="/edit" render={() => (isLogged ? (<Redirect to="/edit" component={Edit}/>) : (<Home />))} />
                        <Route path="/gallery/:url" exact component={Panneaux} />
                        <Route render={(props) => <Error {...props}/>} /> 
                        {/* <Route render={(match, location, history) => <h1>Error</h1>} />  */}
                    </Switch>          
                </Suspense>
                <Footer icon="fas fa-sign-in-alt"/>        
            </div>
        );
    }
}

export default App;
