import bannerPhoto from "../assets/photos/photo-glacier.jpg";
import DropdownButton from "../components/DropdownButton";
import '../styles/about.scss';

const fiability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const service = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

function About() {
    return (
        <div className="pageContainer">
            <div className="about">
                <div className="aboutBannerPhotoContainer">
                    <img src={bannerPhoto} className="aboutBannerPhoto" alt="Un glacier fondu dans un paysage montagneux grandiose" />
                </div>
                <div className="dropdownButtonsContainer">
                    <DropdownButton buttonText="Fiabilité" text={fiability} />
                    <DropdownButton buttonText="Respect" text={respect} />
                    <DropdownButton buttonText="Service" text={service} />
                    <DropdownButton buttonText="Sécurité" text={security} />
                </div>
            </div>
        </div>
    )
}

export default About;
