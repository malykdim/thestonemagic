import { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom' ;

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Panneaux from './components/pages/Panneaux';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Edit from './components/pages/Edit';
import Loader from './components/pages/Loader';
import Error from './components/pages/Error';
import Footer from './components/layouts/Footer';
import  './App.scss';
import isAuth from './hoc/isAuth'


class App extends Component {
    
    render() {
        return (
            <div className="App">
                <Header title="The Stone Magic"/>
                <Suspense fallback={Loader}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/thestonemagic" exact component={Home} />
                        <Route path="/thestonemagic/gallery" exact component={Gallery}/>
                        <Route path="/thestonemagic/gallery/:url"  component={Panneaux} />
                        <Route path="/thestonemagic/contact" exact component={Contact} />
                        <Route path="/thestonemagic/login" exact component={Login} />
                        <Route path="/thestonemagic/edit" exact component={isAuth(Edit)} />
                        <Route render={(props) => <Error {...props}/>} /> 
                    </Switch>          
                </Suspense>
                <Footer icon="fas fa-sign-in-alt"/>        
            </div>
        );
    }
}

export default App;
