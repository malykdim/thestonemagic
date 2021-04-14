import Materials from './Materials';

const Info = () => {
    
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
                
                <input type="radio" id="cm" name="unit" value="cm" defaultChecked/>
                <label htmlFor="cm" className="radio" >cm</label>                
                <input type="radio" id="inch" name="unit" value="inch"/>
                <label htmlFor="inch" className="radio">inch</label>
            </fieldset>
            
            <Materials />
        </>
    )
}

export default Info;
