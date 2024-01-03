import '../styles/Properties.scss';
import DropdownButton from "../components/DropdownButton";
import Carrousel from "../components/Carrousel";
import starIcon from "../assets/svg/star.svg";
import starIconEmpty from "../assets/svg/star-inactive.svg";
// import host from "../assets/svg/host.svg"; // default one

import { useLocation } from 'react-router-dom';

function Properties () {

    const location = useLocation();
    const data = location.state;

  return (
    <div className='pageContainer'>
        <div className='propertiesContainer'>
            {/* <img className='bannerImg' alt={data.obj.title} src ={data.obj.cover} /> */}
            <div className='carrouselContainer'>
                <Carrousel pictures={data.obj.pictures} title={data.obj.title} />
            </div>
            <div className='blockContainer'>
                <div className='leftBlock'>
                    <div className='title'>{data.obj.title}</div>
                    <div className='lieu'>{data.obj.location}</div>
                    <div className='tagsContainer'>
                        {data.obj.tags.map((item)=>
                            <div key={item}>{item}</div>
                        )}
                    </div>
                </div>
                <div className='rightBlock'>
                    <div className='identity'>
                        <div className='hostName'>{data.obj.host.name}</div>
                        <img src={data.obj.host.picture} className='hostPicture' alt="Hôte du bien" />
                    </div>
                    <div className='note'>
                        {Array.from({ length: data.obj.rating }).map((_, index) => (
                            <img key={index} src={starIcon} className='etoilePleine' alt="star" />
                        ))}
                        {Array.from({ length: 5 - data.obj.rating }).map((_, index) => (
                            <img key={index + data.obj.rating} src={starIconEmpty} className='etoileVide' alt="star" />
                        ))}
                    </div>
                </div>
            </div>
            <div className='dropdownContainer'>
                    <DropdownButton buttonText="Description" text={data.obj.description} />
                    <DropdownButton buttonText="Equipements" text={<ul>{data.obj.equipments.map((item) => <li key={item}>{item}</li>)}</ul>} />
            </div>
        </div>
    </div>
  )
}

export default Properties;