import './Title.scss';

function Title(props) {
    return (
        <div className="PanneauxTitleContainer w-1 h-3">
            <h3 className="caption">{props.caption}</h3>
            <span>by</span>
            <h3 className="author">{props.author}</h3>
            <p className="created">{props.created}</p>
        </div>
    )
}

export default Title;