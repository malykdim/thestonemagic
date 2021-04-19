// import React, { useState } from "react";
import Materials from './Materials';

const Info = () => {
    return (
        <> 
            <fieldset className="right">
                <legend>Име на паното</legend>
                    <label htmlFor="panneauxName"></label>
                    <input 
                        type="text" 
                        id="panneauxName" 
                        name="panneauxName" 
                        placeholder=""
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
                <legend>Размери на паното</legend>
                <label htmlFor="width" className="dim">Широчина</label>
                <input type="number" name="width" defaultValue="75" id="width" placeholder="number"/> cm
                
                <label htmlFor="height" className="dim">Височина</label>
                <input type="number" name="height" defaultValue="75" id="height" placeholder="number"/> cm
                
            </fieldset>
            
            <Materials />
        </>
    )
}

export default Info;
