import bannerPhoto from "../assets/photos/photo-glacier.jpg";
import DropdownButton from "../components/DropdownButton";
import '../styles/APropos.scss';

function APropos() {
  return (
    <div className="APropos">
      <div className="aproposBannerPhotoContainer">
        <img src= {bannerPhoto} className="aproposBannerPhoto" alt="Un glacier fondu dans un paysage montagneux grandiose" />
      </div>
      <div className="dropdownButtonsContainer">
        <DropdownButton buttonText="Fiabilité"/>
        <DropdownButton buttonText="Respect"/>
        <DropdownButton buttonText="Service"/>
        <DropdownButton buttonText="Sécurité"/>
      </div>
    </div>
  )
}

export default APropos;
