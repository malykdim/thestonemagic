import './Picture.scss';

function Picture(props) {
    return (
        <figure className="PanneauxImageContainer w-4 h-3">
            <div className="imageWrapper">
                <img src={props.picture} alt={props.caption} />                
            </div>
        </figure>
    )
}

export default Picture;