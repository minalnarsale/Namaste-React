import RestauCards from "./RestauCards";
import restaurants from "../../mockData.json";

const restrauArr = restaurants.cards
  .map((obj) => obj.card)
  .map((obj) => obj.card);

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar-container">
        <input className="search-bar" type="text" />
        <button className="search-button">Search</button>
      </div>
      <div className="restau-cards-container">
        {restrauArr.map((restrau) => (
          <RestauCards
            key={restrau.info.id}
            name={restrau.info.name}
            cuisines={restrau.info.cuisines.join(", ")}
            avgRating={restrau.info.avgRating}
            slaString={restrau.info.sla.slaString}
            costForTwo={restrau.info.costForTwo / 100}
            cloudinaryImageId={restrau.info.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
