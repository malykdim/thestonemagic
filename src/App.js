import { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom' ;
import { isLogged } from './services/ajax';

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Panneaux from './components/pages/Panneaux';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Edit from './components/pages/Edit';
import Loader from './components/pages/Loader';
import Error from './components/pages/Error';
import Footer from './components/layouts/Footer';
import  './App.scss';


class App extends Component {
    
    render() {
        return (
            <div className="App">
                <Header title="The Stone Magic"/>
                <Suspense fallback={Loader}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/thestonemagic" component={Home} />
                        <Route path="/gallery" exact component={Gallery}/>
                        <Route path="/gallery/:url" exact component={Panneaux} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/edit" component={Edit} />
                        <Route exact path="/edit" render={() => (isLogged ? (<Redirect to="/edit" component={Edit} />) : (<Home />))} />
                        <Route render={(props) => <Error {...props}/>} /> 
                    </Switch>          
                </Suspense>
                <Footer icon="fas fa-sign-in-alt"/>        
            </div>
        );
    }
}

export default App;
