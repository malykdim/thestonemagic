import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;

import { getMosaics, logout} from '../../services/data.js';
// import GalleryContext from '../../contexts/gallery/galleryContext.js';
import InputError from '../utilities/errors/InputError';
import Card from '../parts/Card';

import '../main.scss';
import './Admin.scss';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gallery: []            
        }
        
        this.onClickLogoutHandler = this.onClickLogoutHandler.bind(this);
    }
    
    componentDidMount() { 
        getMosaics()
            .then(response => {
                this.setState({gallery: response.results});
            });
    }
    
    
    onClickLogoutHandler() {
        // logOut();
        logout('/logout', 'POST', {})
            .then(response => {
                console.log('You have been successfully logged out')
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('sessionToken');
                sessionStorage.removeItem('userId');
                console.log(response);
            });
        
        this.props.history.push('/');
    };
        
    render() {

        return (
            <main className="AppMain">
                <section className="AppMain-Gallery-Admin">
                    
                    <h2 className="h2">
                        Welcome AdminName
                    </h2>
                    
                    <fieldset className="fieldset">
                        <legend>&nbsp; Current Gallery State &nbsp;</legend>
                        <div>                                
                            <Link to="/create" >
                                <i id="add" className={this.props.admin}>Create</i>
                            </Link>
                            <section className="AppMain-Gallery"> 
                                {/* <GalleryContext.Consumer value={this.state.gallery}> */}
                                    {this.state.gallery.map((card) => 
                                        <Card 
                                            gallery={this.context}
                                            key={card.objectId}
                                            {...card} 
                                        /> 
                                    )}
                                {/* </GalleryContext.Consumer> */}
                            </section>                                
                        </div>
                        <div>pagination</div>
                    </fieldset>
                    
                    <fieldset className="fieldset">
                        <legend>&nbsp; Statistics &nbsp;</legend>
                        <div>Total Items Count</div>
                        <div>Last Added</div>
                        <div>Filter by author</div>
                    </fieldset>
                    
                    <InputError>{this.state.errorMessage}</InputError>
                    <button onClick={this.onClickLogoutHandler} className="logoutBtn">
                        Logout
                    </button>
                    
                </section>
                
            </main>
        );
    }
}

export default Admin;