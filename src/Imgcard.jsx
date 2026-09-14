

function Imgcard(props){

    return(
        <div className="imgcard">
            <img className='img' src={props.img} alt={props.alt} />
            <p>{props.desc}</p>
        </div>
    )
}

export default Imgcard
