import { useEffect, useState } from "react";
import RestauCards from "./RestauCards";
import restaurants from "../../mockData.json";
import ShimmerUI from "./ShimmerUI";

const restrauInitializedArr = restaurants.cards
  .map((obj) => obj.card)
  .map((obj) => obj.card);

const Body = () => {
  //local state variable - super powerful variables
  let [restrauArr, setRestrauArr] = useState([]);
  let [filteredRestrauArr, setFilteredRestrauArr] = useState([]);
  let [searchText, setSearchText] = useState("");

  console.log("searchText : ", searchText);

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
    setFilteredRestrauArr(restaurants);
  };

  //conditional rendering
  if (restrauArr.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="body">
      <div className="search-restraws">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-input"
            value={searchText} //binding input to state variable
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //get search text
              //filter the restaurants as per search text and update the UI
              // console.log("searchText : ", searchText);
              const filteredRestraws = restrauArr.filter((restrwa) => {
                restrwa.info.name.includes(searchText);
              });
              setFilteredRestrauArr(filteredRestraws); //we are updating the restrauArr thus the filter will not work next time because we are updating it with filtered data
            }}
          >
            Search
          </button>
        </div>
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
        <button className="quick-delivery-filter-btn">
          Top Quick delivery
        </button>
      </div>
      <div className="restau-cards-container">
        {filteredRestrauArr.map((restrau) => (
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
