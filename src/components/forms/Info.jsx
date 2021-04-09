import Materials from './Materials';

const Info = () => {
    
    return (
        <> {/* className="info" */}
            <fieldset className="right">
                <legend>Име на Паното</legend>
                    <label htmlFor="panneauxName">Име</label>
                    <input 
                        type="text" 
                        id="panneauxName" 
                        name="panneauxName" 
                        placeholder="New Panneaux"
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
                <label htmlFor="created">Създадена</label>
                <input type="date" name="created" id="created"/>
            </fieldset>
            
            <fieldset>
                <legend>Размери на паното</legend>
                <label htmlFor="width" className="dim">Широчина</label>
                <input type="number" name="width" defaultValue="75" id="width" placeholder="number"/>
                
                <label htmlFor="height" className="dim">Височина</label>
                <input type="number" name="height" defaultValue="75" id="height" placeholder="number"/>
                
                <input type="radio" id="cm" name="unit" value="cm"/>
                <label htmlFor="cm" className="radio">cm</label>                
                <input type="radio" id="inch" name="unit" value="inch"/>
                <label htmlFor="inch" className="radio">inch</label>
            </fieldset>
            
            <Materials />
        </>
    )
}

export default Info;
