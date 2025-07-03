import RestauCards from "./RestauCards";
import restaurants from "../../mockData.json";
import { useEffect, useState } from "react";

const restrauInitializedArr = restaurants.cards
  .map((obj) => obj.card)
  .map((obj) => obj.card);

const Body = () => {
  let [restrauArr, setRestrauArr] = useState([]); //local state variable

  useEffect(() => {
    console.log("useEffect called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9782718&lng=77.6404362&str=burger&trackingId=undefined&submitAction=ENTER&queryUniqueId=465ab669-d24b-1573-3140-6b52ba48360e&selectedPLTab=RESTAURANT"
    ); //fetch is provided by browser
    const jsonData = await data.json();
    //optional chaining : must need
    const restaurants =
      jsonData.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
        .map((obj) => obj.card)
        .map((obj) => obj.card);
    console.log("restaurants : ", restaurants);
    setRestrauArr(restaurants);
  };

  if (restrauArr.length === 0) {
    return <h1>Loading.....</h1>;
  }

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
