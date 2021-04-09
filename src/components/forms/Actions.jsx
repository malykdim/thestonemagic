
/* GalleryContext */
const Actions = () => {
    const onSubmitEditHandler = () => {
        
    }
    
    const onSubmitAddHandler = () => {
        
    }
    
    const onSubmitDeleteHandler = () => {
        
    }
    
    return (
        <> {/* className=" right w-1 h-3 flexColumn  */}
            <div className="flexRow">
                <input type="reset" name="reset" value="Изчисти" className="cta"/>
                <label htmlFor="reset">
                    {/* Изчисти формата */}
                </label>
            </div>
            <div className="flexRow">
                <input onSubmit={onSubmitEditHandler()} type="submit" name="edit" value="Редактирай" className="cta"/>
                <label htmlFor="edit">
                    {/* Редактирай данните */}
                </label>
            </div>
            <div className="flexRow">
                <input onSubmit={onSubmitAddHandler()} type="submit" name="add" value="Добави" className="cta"/>
                <label htmlFor="add">
                    {/* Добави паното в галерията */}
                </label>
            </div>
            <div className="flexRow">
                <input onSubmit={onSubmitDeleteHandler()} on type="submit" name="delete" value="Изтрий" className="cta"/>
                <label htmlFor="delete">
                    {/* Изтрий паното от галерията */}
                </label>
            </div>
        </>
    );
}

export default Actions;