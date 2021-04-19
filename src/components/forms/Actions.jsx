// import GalleryContext from '../../contexts/GalleryContext';

const Actions = () => {
    return (
        // <GalleryContext.Consumer>
        //     {({data, onSubmitAddHandler, onSubmitDeleteHandler}) => {
                <> 
                    <legend>Действия</legend>
                    <div className="flexRow">
                        <input type="reset" name="reset" value="Изчистване" className="cta"/>
                        <label htmlFor="reset">
                            {/*  */}
                        </label>
                    </div>
                    <div className="flexRow">
                        <input /* onSubmit={onSubmitAddHandler} */ type="submit" name="add" value="Добавяне" className="cta"/>
                        <label htmlFor="add"></label>
                    </div>
                    
                    <div className="flexRow">
                        <input /* onSubmit={onSubmitDeleteHandler} */ on type="submit" name="delete" value="Изтриване" className="cta"/>
                        <label htmlFor="delete"></label>
                    </div>
                </>                
             // }}
        // </GalleryContext.Consumer>     */}
    );
}

export default Actions;