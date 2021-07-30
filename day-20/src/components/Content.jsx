import Card from "./Card";
function Content({ card, setCard }) {
  return (
    <div className="content">
      <h1>Calories Consumption</h1>
      <br />
      <br />
      <div className="container">
        {card.length ? (
          card.map((food, index) => {
            return (
              <Card
                title={food[0]}
                calories={food[1]}
                setCard={setCard}
                id={index}
                card={card}
              />
            );
          })
        ) : (
          <h1>Empty</h1>
        )}
      </div>
    </div>
  );
}

export default Content;
