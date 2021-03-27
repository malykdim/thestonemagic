import { Component } from 'react' ;
import { Route } from 'react-router-dom' ;
import Gallery from './Gallery' ;

import '../main.scss';
import './Edit.scss';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const onSubmitEditHandler = (e) => {
            e.preventDefault();
            
            const inputPanneauxName = e.target.panneauxName.value;
            const inputAuthor = e.target.author.value;
            const inputDate = e.target.created.value;
            const inputWidth = e.target.width.value;
            const inputHeight = e.target.height.value;
            const inputUnit = e.target.unit.value;
            const inputMaterials = [];
        }
        
        const logout = (e) => {
            console.log('Logout');
        }
        
        return (
            <main className="AppMain">
                
                <h2>Edit Page</h2>
                
                <form onSubmit={onSubmitEditHandler} className="FormEdit form">
                    
                    
                    <fieldset className="left w-1 h-3">
                        {/* <span>Добави снимка:</span> */}
                        <label htmlFor="picture">Добави снимка</label>
                        <input type="file" id="picture" name="picture" />
                        {/* <input type="submit" value="Submit"> */}
                    </fieldset>
                    
                    <div className="middle">
                        <fieldset className="right">
                        <label htmlFor="panneauxName">Име на Паното</label>
                        <input type="text" id="panneauxName" name="panneauxName" placeholder="text"/>
                        
                    </fieldset>
                    <fieldset className="inline">
                        <span>Автор</span>                                
                        <input type="radio" id="vladimir" name="author" value="Vladimir"/>                        
                        <label htmlFor="vladimir">Владимир</label>                                
                        <input type="radio" id="damyan" name="author" value="Damyan"/>
                        <label htmlFor="damyan">Дамян</label>
                        <input type="radio" id="konstantin" name="author" value="Konstantin"/>
                        <label htmlFor="konstantin">Константин</label>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="created">Създадена</label>
                        <input type="date" name="created" id="created"/>
                    </fieldset>
                    <fieldset>
                        <legend>Размери на паното</legend>
                        <label htmlFor="width">Широчина</label>
                        <input type="number" name="width" id="width" placeholder="number"/>
                        <label htmlFor="height">Височина</label>
                        <input type="number" name="height" id="height" placeholder="number"/>
                        
                        <input type="radio" id="cm" name="unit" value="cm"/>
                        <label htmlFor="cm">cm</label>
                        
                        <input type="radio" id="inch" name="unit" value="inch"/>
                        <label htmlFor="inch">inch</label>
                    </fieldset>
                    
                    
                        <fieldset>
                            <legend>Използвани материали:</legend>
                            <input type="checkbox" id="marbel" name="marbel" value="Marbel"/>
                            <label htmlFor="marbel">Мрамор </label>
                            
                            <input type="checkbox" id="mountain crystal" name="mountain crystal" value="Mountain crystal"/>
                            <label htmlFor="mountain crystal">Планински кристал</label>
                            
                            <input type="checkbox" id="amethyst" name="amethyst" value="Аmethyst"/>
                            <label htmlFor="amethyst">Аметист</label>
                            
                            <input type="checkbox" id="jasper" name="jasper" value="Jasper"/>
                            <label htmlFor="jasper">Яспис</label>
                            
                            <input type="checkbox" id="labrador" name="labrador" value="Labrador"/>
                            <label htmlFor="labrador">Лабрадор</label>
                            
                            <input type="checkbox" id="pyryt" name="pyryt" value="Pyryt"/>
                            <label htmlFor="pyryt">Пирит</label>
                            
                            <input type="checkbox" id="tiger's eye" name="tiger's eye" value="Tiger's eye"/>
                            <label htmlFor="tiger's eye">Тигрово око</label>
                            
                            <input type="checkbox" id="firestone" name="firestone" value="Firestone"/>
                            <label htmlFor="firestone">Огнен камък</label>
                            
                            <input type="checkbox" id="onyx" name="onyx" value="Onyx"/>
                            <label htmlFor="onyx">Оникс</label>
                            
                            <input type="checkbox" id="jade" name="jade" value="Jade"/>
                            <label htmlFor="jade">Нефрит</label>
                            
                            <input type="checkbox" id="malachite" name="malachite" value="malachite"/>
                            <label htmlFor="malachite">Малахит</label>
                            
                            <input type="checkbox" id="citrine" name="citrine" value="citrine"/>
                            <label htmlFor="citrine">Цитрин</label>

                            <input type="checkbox" id="obsidian" name="obsidian" value="obsidian"/>
                            <label htmlFor="obsidian">Обсидиан</label>
                            
                            <input type="checkbox" id="serpentine" name="serpentine" value="serpentine"/>
                            <label htmlFor="serpentine">Серпентин</label>
                            
                            <input type="checkbox" id="quartz" name="quartz" value="quartz"/>
                            <label htmlFor="quartz">Кварц</label>
                            
                            <input type="checkbox" id="agate" name="agate" value="Аgate"/>
                            <label htmlFor="agate">Ахат</label>
                            <br/>
                            
                        </fieldset>
                    </div>
                    
                    <fieldset class=" right w-1 h-3 flexColumn ">
                        <div className="flexRow">
                            <input type="reset" name="reset" value="Изчисти"/>
                            <label htmlFor="reset">
                                Изчисти формата
                            </label>
                        </div>
                        <div className="flexRow">
                            <input type="reset" name="edit" value="Редактирай"/>
                            <label htmlFor="edit">
                                Редактирай данните
                            </label>
                        </div>
                        <div className="flexRow">
                            <input type="reset" name="add" value="Добави"/>
                            <label htmlFor="add">
                                Добави паното в галерията
                            </label>
                        </div>
                        <div className="flexRow">
                            <input type="reset" name="delete" value="Изтрий"/>
                            <label htmlFor="delete">
                                Изтрий паното от галерията
                            </label>
                        </div>
                    </fieldset>
                    
                </form>
                
                <button onClick={logout} className="logout">
                    Logout
                </button>
                
                <Route path="/gallery" component={Gallery}/>
                
                <p>
                    In Development Stage...
                </p>
                
            </main>
        );
    }
}

export default Edit;