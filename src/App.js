import { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;

import isAuth from './hoc/isAuth';

// pages and components
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Loader from './components/pages/Loader';
import Error from './components/pages/Error';

import Home from './pages/home/Home';
import Gallery from './components/pages/Gallery';
import Panneaux from './components/pages/Panneaux';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Edit from './components/pages/Edit';

// styles
import  './App.scss';

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <Router>
                    <Header title="The Stone Magic"/>
                    <Suspense fallback={Loader}>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/thestonemagic" component={Home} />
                            <Route path="/gallery" exact component={Gallery}/>
                            <Route path="/gallery/:url" exact component={Panneaux} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/login" component={Login} />
                            <Route path="/edit" component={isAuth(Edit)} />
                            <Route render={(props) => <Error {...props}/>} /> 
                        </Switch>          
                    </Suspense>
                    <Footer title="The Stone Magic" loginIcon="fas fa-sign-in-alt"  logoutIcon="fas fa-sign-out-alt"/>
                </Router>        
            </div>
        );
    }
}

export default App;
