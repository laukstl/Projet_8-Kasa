import './Card.scss';

function Card({ obj }) {
    return (
        <button type="button" className='cardContainer'>
            <img src={obj.cover} alt={obj.description}></img>
            <p>{obj.title}</p>
        </button>
    )
}

export default Card
