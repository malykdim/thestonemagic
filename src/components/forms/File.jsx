import React from 'react';

const File = ({
    onSubmitFileHandler
}) => {    
    return (

        <>
            <legend>Picture</legend>
            <label htmlFor="upload-picture">Add an Image</label>
            <input onChange={onSubmitFileHandler} type="file" id="picture" name="upload-picture" />  
        </>              

    )
}

export default File;