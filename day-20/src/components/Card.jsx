function Card({ title, calories, setCard, id, card }) {
  const handleTodoDelete = () => {
    var list = card.filter((food, index) => {
      return index !== id;
    });
    setCard(list);
    console.log(list);
  };
  return (
    <div className="card">
      <h2>
        {title || "Title"}
        <button onClick={handleTodoDelete}>Delete</button>
      </h2>

      <p>
        you have consumed <span className="cal">{calories || "56"}</span> cals
        today
      </p>
    </div>
  );
}
export default Card;
