// import GalleryContext from '../../contexts/GalleryContext';

const Actions = () => {
    return (
        // <GalleryContext.Consumer>
        //     {({data, onSubmitAddHandler, onSubmitDeleteHandler}) => {
                <> 
                    <legend>Actions</legend>
                    <div className="flexRow">
                        <input type="reset" name="reset" value="Reset" className="cta"/>
                        <label htmlFor="reset">
                            {/* Изчисти формата */}
                        </label>
                    </div>
                    <div className="flexRow">
                        <input /* onSubmit={onSubmitAddHandler} */ type="submit" name="add" value="Add" className="cta"/>
                        <label htmlFor="add">
                            {/* Добави паното в галерията */}
                        </label>
                    </div>
                    
                    <div className="flexRow">
                        <input /* onSubmit={onSubmitDeleteHandler} */ on type="submit" name="delete" value="Delete" className="cta"/>
                        <label htmlFor="delete">
                            {/* Изтрий паното от галерията */}
                        </label>
                    </div>
                </>                
             // }}
        // </GalleryContext.Consumer>     */}
    );
}

export default Actions;