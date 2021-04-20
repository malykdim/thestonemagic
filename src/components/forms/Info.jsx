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
            
            <fieldset className="dim">
                <legend>Размери на паното</legend>
                <label htmlFor="width">
                    Широчина
                    <input type="number" name="width" defaultValue="" id="width" placeholder=""/> cm                    
                </label>
                <br/>
                <label htmlFor="height">
                    Височина
                    <input type="number" name="height" defaultValue="" id="height" placeholder=""/> cm
                </label>
            </fieldset>
            
            <Materials />
        </>
    )
}

export default Info;
