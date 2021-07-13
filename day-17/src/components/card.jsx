
const Card = (props)=>{
    return(
        <div className="containor">
                <div className="card">
                    <h1>{props.h1|| "title"}</h1>
                    <p>{props.p || "info"}</p>
                </div>
        </div>
    );
};

export default Card;