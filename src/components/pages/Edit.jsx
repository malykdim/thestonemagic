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

        return (
            <main className="App-main">
                
                <h2>Edit Page</h2>
                
                <form action="#" className="form-edit">
                    <fieldset className="left">
                        <label htmlFor="picture"></label>
                        <input type="file" name="picture" />
                        {/* <input type="submit" value="Submit"> */}
                        <span>Добави снимка</span>
                    </fieldset>
                    <fieldset className="right">
                        <label htmlFor="panneaux-name">Име на Паното:</label>
                        <input type="text" name="panneaux-name" placeholder=""/>
                        
                    </fieldset>
                    <fieldset className="inline">
                        <span>Автор:</span>                                
                        <input type="radio" id="vladimir" name="author" value="Vladimir"/>                        
                        <label for="vladimir">Владимир</label>                                
                        <input type="radio" id="female" name="author" value="Damyan"/>
                        <label for="Damyan">Дамян</label>
                    </fieldset>
                    <fieldset>
                        <span>Създадена:</span>
                        <input type="date" name="created" id="created"/>
                    </fieldset>
                    <fieldset>
                        <legend>Размери на паното:</legend>
                        <label for="marbel">Широчина: </label>
                        <input type="number" name="width"/>
                        <label for="marbel">Височина: </label>
                        <input type="number" name="height" id=""/>
                        
                        <input type="radio" id="cm" name="unit" value="cm"/>
                        <label for="cm">cm</label>
                        
                        <input type="radio" id="inch" name="unit" value="inch"/>
                        <label for="inch">inch</label>
                    </fieldset>
                    <fieldset>
                        <legend>Използвани материали:</legend>
                        <input type="checkbox" id="marbel" name="marbel" value="Marbel"/>
                        <label for="marbel">Мрамор </label>
                        
                        <input type="checkbox" id="amethyst" name="amethyst" value="Аmethyst"/>
                        <label for="amethyst">Аметист</label>
                        
                        <input type="checkbox" id="agate" name="agate" value="Аgate"/>
                        <label for="agate">Ахат</label>
                        
                        <input type="checkbox" id="jasper" name="jasper" value="Jasper"/>
                        <label for="jasper">Яспис</label>
                        
                        <input type="checkbox" id="tiger's eye" name="tiger's eye" value="Tiger's eye"/>
                        <label for="tiger's eye">Тигрово око</label>
                        
                        <input type="checkbox" id="mountain crystal" name="mountain crystal" value="Mountain crystal"/>
                        <label for="mountain crystal">Планински кристал</label><br/>
                        
                        <input type="checkbox" id="labrador" name="labrador" value="Labrador"/>
                        <label for="labrador">Лабрадор</label>
                        
                        <input type="checkbox" id="pyryt" name="pyryt" value="Pyryt"/>
                        <label for="pyryt">Пирит</label>
                        
                        <input type="checkbox" id="firestone" name="firestone" value="Firestone"/>
                        <label for="firestone">Огнен камък</label>
                        
                        <input type="checkbox" id="onyx" name="onyx" value="Onyx"/>
                        <label for="onyx">Оникс</label><br/>
                        
                        <input type="checkbox" id="jade" name="jade" value="Jade"/>
                        <label for="jade">Нефрит</label>
                        
                        <input type="checkbox" id="malachite" name="malachite" value="malachite"/>
                        <label for="malachite">Малахит</label>
                        
                        <input type="checkbox" id="citrine" name="citrine" value="citrine"/>
                        <label for="citrine">Цитрин</label>
                        
                        <input type="checkbox" id="quartz" name="quartz" value="quartz"/>
                        <label for="quartz">Кварц</label>
                        
                        <input type="checkbox" id="obsidian" name="obsidian" value="obsidian"/>
                        <label for="obsidian">Обсидиан</label>
                        
                        <input type="checkbox" id="serpentine" name="serpentine" value="serpentine"/>
                        <label for="serpentine">Серпентин</label>
                        
                        <br/>
                        <br/>
                        <span>Изчисти избраните полета:</span>
                        <input type="reset" value="Изчисти"/>
                    </fieldset>
                    
                </form>
                
                <Route path="/gallery" component={Gallery}/>
                
                <p>
                    In Development Stage...
                </p>
                
            </main>
        );
    }
}

export default Edit;