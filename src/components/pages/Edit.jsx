import { Component } from 'react' ;
import { Route } from 'react-router-dom' ;
import Gallery from './Gallery' ;
import  { isLogged } from '../../services/ajax';
import './EditFunctions';
import '../main.scss';
import './Edit.scss';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            panneauxName: 'New Panneaux',
        }
        
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    
    componentDidMount() {
        if (isLogged()) {
            this.props.history.push('/edit');
        } 
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
        
        const result = data.JSON.stringify;
        return result;
    };
    
    onSubmitChangeHandler(e) {
        console.log(e.target.value);
        this.setState=({
            panneauxName: e.target.value
        });
    };
    
    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    };
    

    
        
    render() {
        return (
            <main className="AppMain">
                
                <form className="FormEdit " onSubmit={this.onSubmitEditHandler}>
                    
                    <fieldset className="left w-1 h-3">
                        <label htmlFor="uploadPicture">{/* Добави снимка */}</label>
                        <input type="file" id="picture" name="uploadPicture" /* onChange={this.onSubmitChangeHandler} */ />
                        {/* <input type="submit" value="Submit"> */}
                    </fieldset>
                    
                    <div className="middle">
                        <fieldset className="right">
                        <legend htmlFor="panneauxName">Име на Паното</legend>
                        <input 
                            type="text" 
                            id="panneauxName" 
                            name="panneauxName" 
                            value={this.state.panneauxName} 
                            onChange={this.onChangeHandler} 
                            placeholder="New Panneaux"
                        />
                        
                        </fieldset>
                        <fieldset className="inline">
                            <legend>Автор</legend>                                
                            <input type="radio" id="vladimir" name="author" value="Vladimir" />                        
                            <label htmlFor="vladimir" className="radio">Владимир</label>                                
                            <input type="radio" id="damyan" name="author" value="Damyan" />
                            <label htmlFor="damyan" className="radio">Дамян</label>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="created">Създадена</label>
                            <input type="date" name="created" id="created"/>
                        </fieldset>
                        <fieldset>
                            <legend>Размери на паното</legend>
                            <label htmlFor="width" className="dim">Широчина</label>
                            <input type="number" name="width" defaultValue="75" id="width" placeholder="number"/>
                            <label htmlFor="height" className="dim">Височина</label>
                            <input type="number" name="height" defaultValue="75" id="height" placeholder="number"/>
                            
                            <input type="radio" id="cm" name="unit" value="cm"/>
                            <label htmlFor="cm" className="radio">cm</label>
                            
                            <input type="radio" id="inch" name="unit" value="inch"/>
                            <label htmlFor="inch" className="radio">inch</label>
                        </fieldset>
                        <fieldset>
                            <legend>Използвани материали</legend>
                            <input type="checkbox" id="marbel" name="marbel" value="Marbel" className="material"/>
                            <label htmlFor="marbel">Мрамор </label>
                            
                            <input type="checkbox" id="mountain crystal" name="mountain crystal" value="Mountain crystal" className="material"/>
                            <label htmlFor="mountain crystal">Планински кристал</label>
                            
                            <input type="checkbox" id="amethyst" name="amethyst" value="Аmethyst" className="material"/>
                            <label htmlFor="amethyst">Аметист</label>
                            
                            <input type="checkbox" id="jasper" name="jasper" value="Jasper" className="material"/>
                            <label htmlFor="jasper">Яспис</label>
                            
                            <input type="checkbox" id="labrador" name="labrador" value="Labrador" className="material"/>
                            <label htmlFor="labrador">Лабрадор</label>
                            
                            <input type="checkbox" id="pyryt" name="pyryt" value="Pyryt" className="material"/>
                            <label htmlFor="pyryt">Пирит</label>
                            
                            <input type="checkbox" id="agate" name="agate" value="Аgate" className="material"/>
                            <label htmlFor="agate">Ахат</label>
                            <br/>                            
                            
                            <input type="checkbox" id="onyx" name="onyx" value="Onyx" className="material"/>
                            <label htmlFor="onyx">Оникс</label>
                            
                            <input type="checkbox" id="jade" name="jade" value="Jade"className="material"/>
                            <label htmlFor="jade">Нефрит</label>
                            
                            <input type="checkbox" id="malachite" name="malachite" value="malachite"className="material"/>
                            <label htmlFor="malachite">Малахит</label>
                            
                            <input type="checkbox" id="citrine" name="citrine" value="citrine"className="material"/>
                            <label htmlFor="citrine">Цитрин</label>

                            <input type="checkbox" id="obsidian" name="obsidian" value="obsidian"className="material"/>
                            <label htmlFor="obsidian">Обсидиан</label>
                            
                            <input type="checkbox" id="serpentine" name="serpentine" value="serpentine" className="material"/>
                            <label htmlFor="serpentine">Серпентин</label>
                            
                            <input type="checkbox" id="quartz" name="quartz" value="quartz" className="material"/>
                            <label htmlFor="quartz">Кварц</label>
                            <br/>
                            
                            
                            <input type="checkbox" id="firestone" name="firestone" value="Firestone" className="material"/>
                            <label htmlFor="firestone">Огнен камък</label>
                            
                            <input type="checkbox" id="tiger's eye" name="tiger's eye" value="Tiger's eye" className="material"/>
                            <label htmlFor="tiger's eye" >Тигрово око</label>
                            
                            <br/>
                        </fieldset>
                    </div>
                    
                    <fieldset className=" right w-1 h-3 flexColumn ">
                        <div className="flexRow">
                            <input type="reset" name="reset" value="Изчисти" className="cta"/>
                            <label htmlFor="reset">
                                {/* Изчисти формата */}
                            </label>
                        </div>
                        <div className="flexRow">
                            <input type="reset" name="edit" value="Редактирай" className="cta"/>
                            <label htmlFor="edit">
                                {/* Редактирай данните */}
                            </label>
                        </div>
                        <div className="flexRow">
                            <input type="reset" name="add" value="Добави" className="cta"/>
                            <label htmlFor="add">
                                {/* Добави паното в галерията */}
                            </label>
                        </div>
                        <div className="flexRow">
                            <input type="reset" name="delete" value="Изтрий" className="cta"/>
                            <label htmlFor="delete">
                                {/* Изтрий паното от галерията */}
                            </label>
                        </div>
                    </fieldset>
                    
                </form>
                
                <button onClick={this.logout} className="logout">
                    Logout
                </button>
                
                <Route path="/gallery" component={Gallery}/>
                
            </main>
        );
    }
}

export default Edit;