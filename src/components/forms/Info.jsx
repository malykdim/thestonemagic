// import React, { useState } from "react";
import Materials from './Materials';

const Info = () => {
    return (
        <> 
            <fieldset className="right">
                <legend>Panneau Name</legend>
                    <label htmlFor="panneauxName"></label>
                    <input 
                        type="text" 
                        id="panneauxName" 
                        name="panneauxName" 
                        placeholder=""
                    />                        
            </fieldset>
            
            <fieldset className="inline">
                <legend>Author</legend>
                                                
                    <input type="radio" id="vladimir" name="author" value="Vladimir" />                        
                    <label htmlFor="vladimir" className="radio">Vladimir</label>
                                                    
                    <input type="radio" id="damyan" name="author" value="Damyan" />
                    <label htmlFor="damyan" className="radio">Damyan</label>
            </fieldset>
            
            <fieldset className="dim">
                <legend>Dimensions</legend>
                <label htmlFor="width">
                    Width
                    <input type="number" name="width" defaultValue="" id="width" placeholder=""/> cm                    
                </label>
                <br/>
                <label htmlFor="height">
                    Height
                    <input type="number" name="height" defaultValue="" id="height" placeholder=""/> cm
                </label>
            </fieldset>
            
            <Materials />
        </>
    )
}

export default Info;
