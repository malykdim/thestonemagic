import React, { Component } from 'react';
import { getMosaics, logout } from '../../services/data.js';
// import GalleryContext from '../../contexts/GalleryContext';

import InputError from '../utilities/errors/InputError';
import Info from '../forms/Info';
import Actions from '../forms/Actions';
import './EditFunctions';
import '../main.scss';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                picture: '',
                caption: '',
                url: '',
                author: '',
                width: '',
                height: '',
                materials: {},
            },
            context: {
                data: '',
                checkBoxHandler: this.checkBoxHandler,
                onSubmitRemoveFormHandler: this.onSubmitRemoveFormHandler
            },
            
            
        }
        
        // this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
        // this.onSubmitAddFormHandler = this.onSubmitAddFormHandler.bind(this);
        this.onSubmitRemoveFormHandler = this.onSubmitRemoveFormHandler.bind(this);
        
        this.onChangeHandler = this.onChangeHandler.bind(this);
        // this.onSelectFileHandler = this.onSelectFileHandler.bind(this);
        // this.fileInput = React.createRef();
        this.onClickLogoutHandler = this.onClickLogoutHandler.bind(this);
    }
    
    
    
    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    };
    
/*     onSelectFileHandler = (e) => {
        e.preventDefault();
        
        let filename = this.fileInput.current.files[0].name;
        
        return filename;
    };
 */    
    checkBoxHandler = (e) => {
        // console.log('event', e);
        this.setState(oldState => ({
            materials: {
                ...oldState.materials,
                [e.target.name]: (e.target.checked ? true : false)
            }
        }));
        setTimeout(() => {
            // console.log(this.state.materials);
            console.log('');
        });
        
        return this.state.materials;
    };
    
/*     onSubmitAddFormHandler(e) {
        e.preventDefault();
        
        const p = this.onSelectFileHandler(e);
        const mosaic = e.target.panneauxName.value;
        const a = e.target.author.value;
        const w = e.target.width.value;
        const h = e.target.height.value;
        const mat = Object.keys(this.checkBoxHandler(e)).join(', ');
        
        if(!p) {
            this.setState(this.errorMessage = 'Липсва снимка.');
        } else {
            this.setState(this.errorMessage = '');
        }
        
        let obj = {
            picture: `/thestonemagic/images/${p}`,
            caption: mosaic,
            author: `${a} Damyanov`,
            url: `${mosaic.toLowerCase()}`,
            width: w,
            height: h,
            materials: mat
        }
        
        console.log(JSON.stringify(obj));
        
        request('/classes/Gallery', 'POST', obj)
                .then(response => {
                    alert('New Panneaux added to the Gallery')
                    console.log(response)
                });
    }
 */    
    onSubmitRemoveFormHandler (e) {
        e.preventDefault();
        
        getMosaics()
            .then(response => {
                console.log(response);
                let result = [];
                result = response;
                console.log(result);
                        
                let mosaic = e.target.panneauxName.value;
                console.log(mosaic);
                // alert(`${mosaic} successfully removed from Gallery!`);
            });
                
        console.log()
    }
    
    /* onSubmitFormHandler(e) {
        e.preventDefault();
        
        if (this.onSubmitAddFormHandler) {
            this.onSubmitAddFormHandler(e);
        } else if (this.onSubmitRemoveFormHandler) {
            this.onSubmitRemoveFormHandler(e);
        }  
    } */
    
    onClickLogoutHandler() {
        // logOut();
        logout()
            .then(response => {
                console.log('You have been successfully logged out')
                console.log(response);
            });
        
        this.props.history.push('/');
    };
        
    render() {

        return (
            <main className="AppMain">
                    <h2>Update Gallery</h2>
                {/* <GalleryContext.Provider value={this.state.context}> */}
                    <form className="FormEdit" onSubmit={this.onSubmitFormHandler}>
                        <fieldset className="left w-1 h-3">                        
                            <legend>Image</legend>
                            <label htmlFor="upload-picture">Choose an image</label>
                            <input ref={this.fileInput} type="file" id="picture" name="upload-picture" />  
                        </fieldset>
                        <div className="info">
                            <Info />
                        </div>
                        <fieldset className="right w-1 h-3 flexColumn">
                            <Actions />
                        </fieldset>
                    </form>
                {/* </GalleryContext.Provider> */}
                <InputError>{this.state.errorMessage}</InputError>
                <button onClick={this.onClickLogoutHandler} className="logout">
                    Logout
                </button>
                
            </main>
        );
    }
}


export default Create;