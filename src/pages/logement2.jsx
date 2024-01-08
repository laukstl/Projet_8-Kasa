import '../styles/logement.scss';
import DropdownButton from "../components/DropdownButton";
import Carrousel from "../components/Carrousel";
import starIcon from "../assets/svg/star.svg";
import starIconEmpty from "../assets/svg/star-inactive.svg";
import { useParams } from 'react-router-dom';
import dataFile from "../assets/logements.json";
import Error from '../components/Error';

function Logement () {

    const { id } = useParams();

    const data = dataFile.find((item) => item.id === id.toString());

    if (!data) {
        return <Error />;
    }

    return (
        <div className='pageContainer'>
            <div className='propertiesContainer'>
                <div className='carrouselContainer'>
                    <Carrousel pictures={data.pictures} title={data.title} />
                </div>
                <div className='blockContainer'>
                    <div className='leftBlock'>
                        <div className='title'>{data.title}</div>
                        <div className='lieu'>{data.location}</div>
                        <div className='tagsContainer'>
                            {data.tags.map((item)=>
                                <div key={item}>{item}</div>
                            )}
                        </div>
                    </div>
                    <div className='rightBlock'>
                        <div className='identity'>
                            <div className='hostName'>{data.host.name}</div>
                            <img src={data.host.picture} className='hostPicture' alt="Hôte du bien" />
                        </div>
                        <div className='note'>
                            {Array.from({ length: data.rating }).map((_, index) => (
                                <img key={index} src={starIcon} className='etoilePleine' alt="star" />
                            ))}
                            {Array.from({ length: 5 - data.rating }).map((_, index) => (
                                <img key={index + data.rating} src={starIconEmpty} className='etoileVide' alt="star" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='dropdownContainer'>
                    <DropdownButton buttonText="Description" text={data.description} />
                    <DropdownButton buttonText="Equipements" text={<ul>{data.equipments.map((item) => <li key={item}>{item}</li>)}</ul>} />
                </div>
            </div>
        </div>
    )
}

export default Logement;
