import { Component } from 'react';
// import { Route } from 'react-router-dom';
import  { logOut } from '../../services/auth';
import GalleryContext from '../../contexts/GalleryContext';
import File from '../forms/File';
import Info from '../forms/Info';
import Actions from '../forms/Actions';
import './EditFunctions';
import '../main.scss';
import './Edit.scss';
/* GalleryContext */
class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                url: '',
                caption: '',
                author: '',
                created: '',
                width: '',
                height: '',
                unit: '',
                materials: {},
                picture: ''
            },
            context: {
                data: '',
                checkBoxHandler: this.checkBoxHandler
            }
        }
        
        this.onChangeHandler = this.onChangeHandler.bind(this);
        
        // this.onSubmitAddHandler = this.onSubmitAddHandler.bind(this);
        
        this.onSubmitEditHandler = this.onSubmitEditHandler.bind(this);
        
        // this.onSubmitDeleteHandler = this.onSubmitDeleteHandler.bind(this);
        
        this.onClickLogoutHandler = this.onClickLogoutHandler.bind(this);
    }
    
    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    };
    
    onSubmitFileHandler = (event) => {
        // console.log(event);
        Array.from(event.target.files).forEach(file => {
            console.log(file);
        });
        this.setState(oldState => oldState.data.picture = `/thestonemagic/images/${event.target.files[0].name}`);
    }
    
    onSubmitEditHandler = (e) => {
        e.preventDefault();
        
        const inputPanneauxName = e.target.panneauxName.value;        
        const inputAuthor = e.target.author.value;
        const inputDate = e.target.created.value;
        const inputWidth = e.target.width.value;
        const inputHeight = e.target.height.value;
        const inputUnit = e.target.unit.value;
        
        // send to server
        return JSON.stringify({
            url: `/gallery/${inputPanneauxName.toLowerCase()}`,
            caption: inputPanneauxName,
            author: inputAuthor,
            created: inputDate,
            width: inputWidth,
            height: inputHeight,
            unit: inputUnit,
            materials: this.state.materials.filter(mat => {
                if (mat) {
                    return mat;
                }
                
                // return mat;
            })
        });
    };
    
    onClickLogoutHandler() {
        logOut();
        this.props.history.push('/');
    }
    
    checkBoxHandler = (event) => {
        console.log('event', event);
        this.setState(oldState => ({
            materials: {
                ...oldState.materials,
                [event.target.name]: (event.target.checked ? true : false)
            }
        }));
        setTimeout(() => {
            console.log(this.state.materials);
        });
    }
    
    onSubmitChangeHandler(e) {
        console.log(e.target.value);
        this.setState=({
            panneauxName: e.target.value,
        });
    };
        
    render() {

        return (
            <main className="AppMain">
                <GalleryContext.Provider value={this.state.context}>
                    <form className="FormEdit" onSubmit={this.onSubmitEditHandler}>
                        <fieldset className="left w-1 h-3">                        
                            <File onSubmitFileHandler={this.onSubmitFileHandler} />
                        </fieldset>
                        <div className="info">
                            <Info />
                        </div>
                        <fieldset className="right w-1 h-3 flexColumn">
                            <Actions onChange={this.context.onSubmitFileHandler}/>
                        </fieldset>
                    </form>
                </GalleryContext.Provider>
                <button onClick={this.onClickLogoutHandler} className="logout">
                    Logout
                </button>
                
            </main>
        );
    }
}


export default Edit;