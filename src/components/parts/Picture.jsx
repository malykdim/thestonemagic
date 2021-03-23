import './Picture.scss';

function Picture(props) {
    return (
        <figure className="ImageWrapper">
            <img src={props.picture} alt="mosaic" className="Mosaic"/>
        </figure>
    )
}

export default Picture;