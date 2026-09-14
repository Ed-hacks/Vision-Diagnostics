import './Cards.css'

function Card(props){

    return(
        <div className="card">
            <p className="num">{props.num}</p>
            <div className="card-text">
                <p className="name">{props.name}</p>
                <p className="description">{props.desc}</p>
            </div>
        </div>
    )
}

export default Card;
