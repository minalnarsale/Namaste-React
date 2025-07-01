import { CDN_URL } from "../utils/constants";

const RestauCards = (props) => {
  return (
    <div className="restau-card">
      <img
        className="restau-logo"
        alt="restau-logo"
        src={CDN_URL + props.cloudinaryImageId}
      />
      <h3>{props.name}</h3>
      <h4>{props.cuisines}</h4>
      <h4>{props.avgRating}</h4>
      <h4>Cost for TWO : {props.costForTwo}</h4>
      <h4>{props.slaString}</h4>
    </div>
  );
};

export default RestauCards;
