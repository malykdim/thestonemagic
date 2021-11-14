import request from '../../services/ajax.js';

import Info from './Info';
import Actions from './Actions';


const EditForm = () => {
    const onSubmitEditHandler= (e) => {
        e.preventDefault();
        
        alert('Form Submitted');
    };
    
    return (
        <form className="FormEdit" onSubmit={onSubmitEditHandler}>
            <fieldset className="left w-1 h-3">                        
                <legend>Image</legend>
                <label htmlFor="upload-picture">Choose an image</label>
                <input ref={this.fileInput} type="file" id="picture" name="upload-picture" />  
            </fieldset>
            <div className="info">
                <Info />
            </div>
            <fieldset className="right w-1 h-3 flexColumn">
                <Actions />
            </fieldset>
        </form>
    );
}

export default EditForm;