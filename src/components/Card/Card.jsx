import "./Card.scss";

function Card({img, description, title}) {
  return (
    <div className="cardContainer">
      <img src={img} alt={description}></img>
      <p>{title}</p>
    </div>
  )
}

export default Card
