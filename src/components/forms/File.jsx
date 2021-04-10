import React from 'react';
import GalleryContext from '../../contexts/GalleryContext';

const File = ({
    onSubmitFileHandler
}) => {    
    return (

        <>
            <legend>Снимка</legend>
            <label htmlFor="upload-picture">Добави снимка</label>
            <input onChange={onSubmitFileHandler} type="file" id="picture" name="upload-picture" />  
        </>              

    )
}

export default File;