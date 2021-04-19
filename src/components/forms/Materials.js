import GalleryContext from '../../contexts/GalleryContext';

const Materials = () => {
    return(
        <GalleryContext.Consumer>
            {values => 
                <fieldset>
                    <legend>Използвани материали</legend>
                    <input  onChange={values.checkBoxHandler} type="checkbox" id="marbel" name="marbel" value="Marbel" className="material"/>
                    <label htmlFor="marbel">Мрамор</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="mountain crystal" name="mountain crystal" value="MountainCrystal" className="material"/>
                    <label htmlFor="mountain crystal">Планински кристал</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="amethyst" name="amethyst" value="Аmethyst" className="material"/>
                    <label htmlFor="amethyst">Аметист</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="jasper" name="jasper" value="Jasper" className="material"/>
                    <label htmlFor="jasper">Яспис</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="labrador" name="labrador" value="Labrador" className="material"/>
                    <label htmlFor="labrador">Лабрадор</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="pyryt" name="pyryt" value="Pyryt" className="material"/>
                    <label htmlFor="pyryt">Пирит</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="agate" name="agate" value="Аgate" className="material"/>
                    <label htmlFor="agate">Ахат</label>
                    <br/>                            
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="onyx" name="onyx" value="Onyx" className="material"/>
                    <label htmlFor="onyx">Оникс</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="jade" name="jade" value="Jade" className="material"/>
                    <label htmlFor="jade">Нефрит</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="malachite" name="malachite" value="Malachite"className="material"/>
                    <label htmlFor="malachite">Малахит</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="citrine" name="citrine" value="Citrine"className="material"/>
                    <label htmlFor="citrine">Цитрин</label>

                    <input  onClick={values.checkBoxHandler} type="checkbox" id="obsidian" name="obsidian" value="Obsidian"className="material"/>
                    <label htmlFor="obsidian">Обсидиан</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="serpentine" name="serpentine" value="serpentine" className="material"/>
                    <label htmlFor="serpentine">Серпентин</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="quartz" name="quartz" value="quartz" className="material"/>
                    <label htmlFor="quartz">Кварц</label>
                    <br/>            
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="firestone" name="firestone" value="Firestone" className="material"/>
                    <label htmlFor="firestone">Огнен камък</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="tiger's eye" name="tiger's eye" value="Tiger'sEye" className="material"/>
                    <label htmlFor="tiger's eye" >Тигрово око</label>
                    
                    <br/>
                </fieldset>
            }
        </GalleryContext.Consumer>
    );
}

export default Materials;