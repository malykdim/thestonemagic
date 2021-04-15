import React, { useState } from "react";
import Materials from './Materials';

const Info = () => {
    const centimetersToInches = (integer) => {
        let cm = Number(integer);
        let inch = cm / 2.54;
        console.log(inch.toFixed(2));
    }
    
    const inchesToCentimeters = (integer) => {
        let inch = Number(integer);
        let cm = inch * 2.54;
        console.log(cm.toFixed(2));
    }
    
    const options = {
        toInches: centimetersToInches,
        toCentimeters: inchesToCentimeters
    }
    
    const [unit, setValue] = useState(options.toInches);
    
    return (
        <> 
            <fieldset className="right">
                <legend>Panneaux Name</legend>
                    <label htmlFor="panneauxName">Name</label>
                    <input 
                        type="text" 
                        id="panneauxName" 
                        name="panneauxName" 
                        placeholder="New Panneaux"
                    />                        
            </fieldset>
            
            <fieldset className="inline">
                <legend>Author</legend>
                                                
                    <input type="radio" id="vladimir" name="author" value="Vladimir" />                        
                    <label htmlFor="vladimir" className="radio">Vladimir</label>
                                                    
                    <input type="radio" id="damyan" name="author" value="Damyan" />
                    <label htmlFor="damyan" className="radio">Damyan</label>
            </fieldset>
            
            <fieldset>
                <legend>Panneaux Dimensions</legend>
                <label htmlFor="width" className="dim">Width</label>
                <input type="number" name="width" defaultValue="75" id="width" placeholder="number"/>
                
                <label htmlFor="height" className="dim">Height</label>
                <input type="number" name="height" defaultValue="75" id="height" placeholder="number"/>
                
                <input 
                    type="radio" 
                    name="unit" 
                    value="cm" 
                    checked={unit === centimetersToInches}
                    defaultChecked
                    id="cm" 
                />
                <label htmlFor="cm" className="radio" >cm</label>
                                
                <input 
                    type="radio" 
                    name="unit" 
                    value={centimetersToInches}
                    checked={unit === centimetersToInches}
                    onChange={e => setValue(e.target.value)}
                    id="inch" 
                />
                <label htmlFor="inch" className="radio">inch</label>
            </fieldset>
            
            <Materials />
        </>
    )
}

export default Info;
