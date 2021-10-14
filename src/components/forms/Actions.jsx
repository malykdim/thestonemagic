// import GalleryContext from '../../contexts/GalleryContext';

const Actions = () => {
    return (
        // <GalleryContext.Consumer>
        ({/* data, onSubmitAddHandler, onSubmitRemoveFormHandler */}) => {
                <> 
                    <legend>Actions</legend>
                    <div className="flexRow">
                        <input type="reset" name="reset" value="Reset" className="cta"/>
                        <label htmlFor="reset">
                            {/*  */}
                        </label>
                    </div>
                    <div className="flexRow">
                        <input type="submit" name="add" value="Add" className="cta"/>
                        <label htmlFor="add"></label>
                    </div>
                    
                    <div className="flexRow">
                        <input /* onSubmit={this.context.onSubmitRemoveFormHandler}  */type="submit" name="delete" value="Remove" className="cta"/>
                        <label htmlFor="delete"></label>
                    </div>
                </>                
            }
        // </GalleryContext.Consumer>
    );
}

export default Actions;
