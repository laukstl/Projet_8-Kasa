import '../styles/Properties.scss';
import bannerImg from "../assets/photos/photo-glacier.jpg";
import DropdownButton from "../components/DropdownButton";
import starIcon from "../assets/svg/star.svg";
import starIconEmpty from "../assets/svg/star-inactive.svg";
import host from "../assets/svg/host.svg";

function Properties () {
  return (
    <div className='pageContainer'>
        <div className='propertiesContainer'>
            <img className='bannerImg' alt='cozy loft' src ={bannerImg} />
            <div className='blockContainer'>
                <div className='leftBlock'>
                    <div className='title'>Coze loft on the Canal Saint-Martin</div>
                    <div className='lieu'>Paris, Ile-de-France</div>
                    <div className='tagsContainer'>
                        <div>Cozy</div>
                        <div>Canal</div>
                        <div>Paris 10</div>
                    </div>
                </div>
                <div className='rightBlock'>
                    <div className='identity'>
                        <div className='hostName'>Alexande Dumas</div>
                        <img src={host} className='hostPhoto' alt="Hôte du bien" />
                    </div>
                    <div className='note'>
                        <img src={starIcon} className='etoilePleine' alt="star" />
                        <img src={starIcon} className='etoilePleine' alt="star" />
                        <img src={starIcon} className='etoilePleine' alt="star" />
                        <img src={starIconEmpty} className='etoileVide' alt="star" />
                        <img src={starIconEmpty} className='etoileVide' alt="star" />
                    </div>
                </div>
            </div>
            <div className='dropdownContainer'>
                    <DropdownButton buttonText="Description" text="Description du bien" />
                    <DropdownButton buttonText="Equipements" text="Equipements du bien" />
            </div>
        </div>
    </div>
  )
}

export default Properties;