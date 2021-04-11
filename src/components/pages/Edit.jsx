import { Component } from 'react';
import  { logOut } from '../../services/auth';
import GalleryContext from '../../contexts/GalleryContext';
import File from '../forms/File';
import Info from '../forms/Info';
import Actions from '../forms/Actions';
import './EditFunctions';
import '../main.scss';
import './Edit.scss';
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
                checkBoxHandler: this.checkBoxHandler,
            }
        }
        
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickLogoutHandler = this.onClickLogoutHandler.bind(this);
    }
    
    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    };
    
    
    onSubmitFileHandler = (event) => {
        console.log(event);
        Array.from(event.target.files).forEach(file => {
            console.log(file);
        });
        this.setState(oldState => oldState.data.picture = `/thestonemagic/images/${event.target.files[0].name}`);
    };
    
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
    };
    
    onClickLogoutHandler() {
        logOut();
        this.props.history.push('/');
    };
        
    render() {

        return (
            <main className="AppMain">
                    <h2>Edit Page</h2>
                <GalleryContext.Provider value={this.state.context}>
                    <form className="FormEdit" onSubmit={this.onSubmitEditHandler}>
                        <fieldset className="left w-1 h-3">                        
                            <File onSubmitFileHandler={this.onSubmitFileHandler} />
                        </fieldset>
                        <div className="info">
                            <Info />
                        </div>
                        <fieldset className="right w-1 h-3 flexColumn">
                            <Actions />
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