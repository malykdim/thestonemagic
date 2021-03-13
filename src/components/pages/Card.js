import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="showcase">
                <figure>
                    <figcaption>
                        {props.children}
                    </figcaption>
                </figure>
            </div>
            <div className="description">
                
            </div>
        </div>
    )
}

export default Card;