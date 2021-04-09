import React from 'react';
import GalleryContext from '../../contexts/GalleryContext';

const File = (onSubmitFileHandler) => {
    
    return (
        <>{/* className="left w-1 h-3" */}
            <GalleryContext.Consumer>
                <legend>Снимка</legend>
                <label htmlFor="upload-picture">Добави снимка</label>
                <input onChange={onSubmitFileHandler} type="file" id="picture" name="upload-picture" 
                />
            </GalleryContext.Consumer>
        </>
    )
}

export default File;