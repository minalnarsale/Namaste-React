import RestauCards from "./RestauCards";
import restaurants from "../../mockData.json";
import { useState } from "react";

const restrauInitializedArr = restaurants.cards
  .map((obj) => obj.card)
  .map((obj) => obj.card);

const Body = () => {
  let [restrauArr, setRestrauArr] = useState(restrauInitializedArr); //local state variable

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          console.log("button clicked");
          restrauArr = restrauArr.filter((res) => {
            return res.info.avgRating >= 4;
          });
          setRestrauArr(restrauArr);
          console.log("restrauArr : ", restrauArr);
        }}
      >
        Top Rated Restaurants
      </button>
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
