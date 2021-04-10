import GalleryContext from '../../contexts/GalleryContext';

const Actions = () => {
    return (
        <GalleryContext.Consumer>
            {({data, onSubmitFileHandler}) => {
                <> {/* className="right w-1 h-3 flexColumn */}
                    <div className="flexRow">
                        <input type="reset" name="reset" value="Изчисти" className="cta"/>
                        <label htmlFor="reset">
                            {/* Изчисти формата */}
                        </label>
                    </div>
                    <div className="flexRow">
                        <input onSubmit={onSubmitFileHandler} type="submit" name="edit" value="Редактирай" className="cta"/>
                        <label htmlFor="edit">
                            {/* Редактирай данните */}
                        </label>
                    </div>
                    <div className="flexRow">
                        <input onSubmit={onSubmitFileHandler} type="submit" name="add" value="Добави" className="cta"/>
                        <label htmlFor="add">
                            {/* Добави паното в галерията */}
                        </label>
                    </div>
                    <div className="flexRow">
                        <input onSubmit={onSubmitFileHandler} on type="submit" name="delete" value="Изтрий" className="cta"/>
                        <label htmlFor="delete">
                            {/* Изтрий паното от галерията */}
                        </label>
                    </div>
                </>                
            }}
        </GalleryContext.Consumer>    
    );
}

export default Actions;