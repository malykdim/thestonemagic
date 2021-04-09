import { Component } from 'react';
import { Route } from 'react-router-dom';
import  { isLogged } from '../../services/ajax';
import GalleryContext from '../../contexts/GalleryContext';
import Gallery from '../pages/Gallery';
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
            data: {}
        }
        
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitEditHandler = this.onSubmitEditHandler.bind(this);
        this.onClickLogoutHandler = this.onClickLogoutHandler.bind(this);
    }
    
    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    };
    
    onSubmitFileHandler(file) {
        // console.log(e.target.value);
        // this.setState=({
        //     picture: e.target.value
        // });
    }
    
    onSubmitEditHandler(e) {
        e.preventDefault();
        
        const inputPanneauxName = e.target.panneauxName.value;
        const inputAuthor = e.target.author.value;
        const inputDate = e.target.created.value;
        const inputWidth = e.target.width.value;
        const inputHeight = e.target.height.value;
        const inputUnit = e.target.unit.value;
        const inputMaterials = '';
        
        const data = {
            url: `/gallery/${inputPanneauxName.toLowerCase()}`,
            caption: inputPanneauxName,
            author: inputAuthor,
            created: inputDate,
            width: inputWidth,
            height: inputHeight,
            unit: inputUnit,
            materials: [...inputMaterials]
        }
        
        const result = JSON.stringify(data);
        
        return result;
        // send to server
        
    };
    
    onClickLogoutHandler() {
        // terminate session
    }
    
    onSubmitChangeHandler(e) {
        console.log(e.target.value);
        this.setState=({
            panneauxName: e.target.value
        });
    };

    logout() {
        // send post request with empty objects for session token and other credentials! 
    }
    
    componentDidMount() {
        if (isLogged()) {
            this.props.history.push('/edit');
        } 
        console.log(`The context is: ${this.context}`);
    }
    
    componentDidUpdate() {
    }    
    
    componentWillUnmount() {
        // onClickLogoutHandler();
    }
        
    render() {
        return (
            <main className="AppMain">
                
                <form className="FormEdit " onSubmit={this.onSubmitEditHandler}>
                    <fieldset className="left w-1 h-3">                        
                        <File onSubmit={this.onSubmitFileHandler}/>
                    </fieldset>
                    <div className="info">
                        <Info />
                    </div>
                    <fieldset className=" right w-1 h-3 flexColumn ">
                        <Actions />
                    </fieldset>
                </form>
                
                <button onClick={this.onClickLogoutHandler} className="logout">
                    Logout
                </button>
                {/* ? clicking anywhere out of Edit Page should perform logout || They might want to rewiew the gallery to deside if they are done ediring. But they also might forget that there is an opened session so the only way to terminate the session should be really navigating out of the Edit page ? */}
                <Route path="/gallery" component={Gallery}/>
                
            </main>
        );
    }
}

Edit.contextType = GalleryContext;

export default Edit;