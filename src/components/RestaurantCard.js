import { RES_CARD_LOGO_BASE_URL } from "../utils/constants";
const styleCard={
    backgroundColor:"#f0f0f0"
}

const RestaurantCard = (props) =>{
    const {resObject}=props;
    const{
        name,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        avgRating,
        sla
    }=resObject?.info;
    
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={RES_CARD_LOGO_BASE_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;


