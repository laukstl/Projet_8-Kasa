import bannerPhoto from "../../assets/photos/photo-glacier.jpg";
import Collapse from "../../components/Collapse";


function EnTravaux() {
  return (
    <div className="APropos">
      <img src= {bannerPhoto} className="aproposBannerPhoto" alt="Un glacier fondu dans un paysage montagneux grandiose" />
      <div className="collapseContainer">
        <Collapse /><Collapse /><Collapse /><Collapse />
      </div>
    </div>
  )
}

export default EnTravaux