import GalleryContext from '../../context/GalleryContext';

const Materials = () => {
    return(
        <GalleryContext.Consumer>
            {values => 
                <fieldset>
                    <legend>Materials used</legend>
                    <input  onChange={values.checkBoxHandler} type="checkbox" id="marbel" name="marbel" value="Marbel" className="material"/>
                    <label htmlFor="marbel">Marbel</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="mountain crystal" name="mountain crystal" value="MountainCrystal" className="material"/>
                    <label htmlFor="mountain crystal">Mountain Crystal</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="amethyst" name="amethyst" value="Аmethyst" className="material"/>
                    <label htmlFor="amethyst">Amethyst</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="jasper" name="jasper" value="Jasper" className="material"/>
                    <label htmlFor="jasper">Jasper</label>
                    <br/>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="labrador" name="labrador" value="Labrador" className="material"/>
                    <label htmlFor="labrador">Labrador</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="pyryt" name="pyryt" value="Pyryt" className="material"/>
                    <label htmlFor="pyrite">Pyrite</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="agate" name="agate" value="Аgate" className="material"/>
                    <label htmlFor="agate">Agate</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="onyx" name="onyx" value="Onyx" className="material"/>
                    <label htmlFor="onyx">Onyx</label>
                    <br/>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="jade" name="jade" value="Jade" className="material"/>
                    <label htmlFor="jade">Jade</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="malachite" name="malachite" value="Malachite"className="material"/>
                    <label htmlFor="malachite">Malachite</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="citrine" name="citrine" value="Citrine"className="material"/>
                    <label htmlFor="citrine">Citrine</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="obsidian" name="obsidian" value="Obsidian"className="material"/>
                    <label htmlFor="obsidian">Obsidian</label>
                    <br/>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="serpentine" name="serpentine" value="serpentine" className="material"/>
                    <label htmlFor="serpentine">Serpentine</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="quartz" name="quartz" value="quartz" className="material"/>
                    <label htmlFor="quartz">Quartz</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="firestone" name="firestone" value="Firestone" className="material"/>
                    <label htmlFor="firestone">Firestone</label>
                    
                    <input  onClick={values.checkBoxHandler} type="checkbox" id="tiger's eye" name="tiger's eye" value="Tiger'sEye" className="material"/>
                    <label htmlFor="tiger's eye" >Tiger's eye</label>
                    
                    
                </fieldset>
            }
        </GalleryContext.Consumer>
    );
}

export default Materials;