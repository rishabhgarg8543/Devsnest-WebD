import img from './img/prd.jpeg'
const Card = (props) => {
    return (
        <div className="card">
            <img src={img}></img>
            <div>
            <h1 className="title">{props.tittle}</h1>
            <p className="calorie">Price :- ₹{props.calorie} only</p>
            </div>
        </div>
        
    );
};

export default Card;