import './Picture.scss';

function Picture(props) {
    return (
        <figure className="img-wrapper">
            <img src={props.picture} alt="mosaic" className="mosaic"/>
        </figure>
    )
}

export default Picture;