import {Component} from 'react';
/* GalleryContext */
class Materials extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            materials: [],
            checked: false
        }
    }
    
    componentDidMount() {
    }
    
    componentDidUpdate() {
        console.log(this.materials);
    }
    
    handleCheck () {
        const index = this.materials.indexOf(this.e.target.name);        
        
        if(index < 0) {
            this.setState({checked: this.state.checked});
            this.materials.push(this.e.target.name);
            console.log(this.materials, this.state.checked);
        } else {
            this.setState({checked: !this.state.checked});
            this.materials.splice(index, 1);
            console.log(this.materials,  this.state.checked);
        }
        
        const str = this.materials.toString();
        return str /* to be taken as : data.materials from onSubmitEditHandler in Edit.jsx */
    }
    
    render() {
        return (
            <fieldset>
                <legend>Използвани материали</legend>
                <input defaultChecked={this.state.checked} onChange={this.isChecked} type="checkbox" id="marbel" name="marbel" value="Marbel" className="material"/>
                <label htmlFor="marbel">Мрамор</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="mountain crystal" name="mountain crystal" value="Mountain crystal" className="material"/>
                <label htmlFor="mountain crystal">Планински кристал</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="amethyst" name="amethyst" value="Аmethyst" className="material"/>
                <label htmlFor="amethyst">Аметист</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="jasper" name="jasper" value="Jasper" className="material"/>
                <label htmlFor="jasper">Яспис</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="labrador" name="labrador" value="Labrador" className="material"/>
                <label htmlFor="labrador">Лабрадор</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="pyryt" name="pyryt" value="Pyryt" className="material"/>
                <label htmlFor="pyryt">Пирит</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="agate" name="agate" value="Аgate" className="material"/>
                <label htmlFor="agate">Ахат</label>
                <br/>                            
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="onyx" name="onyx" value="Onyx" className="material"/>
                <label htmlFor="onyx">Оникс</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="jade" name="jade" value="Jade"className="material"/>
                <label htmlFor="jade">Нефрит</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="malachite" name="malachite" value="malachite"className="material"/>
                <label htmlFor="malachite">Малахит</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="citrine" name="citrine" value="citrine"className="material"/>
                <label htmlFor="citrine">Цитрин</label>

                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="obsidian" name="obsidian" value="obsidian"className="material"/>
                <label htmlFor="obsidian">Обсидиан</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="serpentine" name="serpentine" value="serpentine" className="material"/>
                <label htmlFor="serpentine">Серпентин</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="quartz" name="quartz" value="quartz" className="material"/>
                <label htmlFor="quartz">Кварц</label>
                <br/>            
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="firestone" name="firestone" value="Firestone" className="material"/>
                <label htmlFor="firestone">Огнен камък</label>
                
                <input defaultChecked={this.state.checked} onClick={this.isChecked} type="checkbox" id="tiger's eye" name="tiger's eye" value="Tiger's eye" className="material"/>
                <label htmlFor="tiger's eye" >Тигрово око</label>
                
                <br/>
            </fieldset>
        );        
    }
}

export default Materials;