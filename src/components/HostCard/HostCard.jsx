import "./HostCard.scss";

function HostCard ({hostName, hostPicture}) {
    return (
        <div className="hostCard">
            <div className='hostName'>{hostName}</div>
            <img src={hostPicture} className='hostPicture' alt="Hôte du bien" />
        </div>
    )
}

export default HostCard;
