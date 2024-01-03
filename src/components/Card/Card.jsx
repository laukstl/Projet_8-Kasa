import "./Card.scss";
import { useNavigate } from 'react-router-dom';


function Card({obj, img, description, title}) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/Properties', { state : { obj: obj } });
  };

  return (
    <button type="button" className="cardContainer" onClick={handleClick}>
      <img src={img} alt={description}></img>
      <p>{title}</p>
    </button>
  )
}

export default Card
