import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2rn_FyXKvp_W8IfgwjeJiaCqyLo1cg0XFGSm00b-SzUhcnWz7U6NPE0&s" 
                /> 
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestauCards = (props) => {
    console.log('props : ', props);
    return (
        <div className="restau-card">
            <img 
                className="restau-logo"
                alt="restau-logo" 
                src={props.imageLogo}
            />
            <h3>{props.RestauName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>Cost for TWO : {props.costForTwo}</h4>
             <h4>{props.deliveryIn}</h4>
        </div>    
    )
}

const restrauObject =  {
  "cards": [
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "397214",
            "name": "Basco And Fry",
            "city": "1",
            "slugs": {
              "restaurant": "basco-and-fry-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "citgpwjjpxkvzos2a1je",
            "address": "Unit Of Playbook Hospitality Llp, No. 516, Krishvi Aspire, First Floor, Binnamangala Extension, Cmh Road, Indiranagar 1st Stage - Bangalore, India",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "80000",
            "costForTwoMessage": "₹800 FOR TWO",
            "cuisines": [
              "Burgers",
              "Mexican",
              "Barbecue",
              "American"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "7.1K+",
            "promoted": true,
            "adTrackingId": "cid=30497604~p=0~adgrpid=30497604#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=397214~plpr=SEARCH#RESTAURANT~st=burgers~eid=8fa61f23-19cc-4aca-a914-0815152b6f37~srvts=1751281039844",
            "sla": {
              "deliveryTime": 33,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 0.2,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "0.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "139"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            },
            "campaignId": "30497604"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\",\"adTrackingId\":\"cid=30497604~p=0~adgrpid=30497604#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=397214~plpr=SEARCH#RESTAURANT~st=burgers~eid=8fa61f23-19cc-4aca-a914-0815152b6f37~srvts=1751281039844\"}",
            "objectValue": "397214",
            "impressionObjectName": "impression-restaurant-ad",
            "clickObjectName": "click-restaurant-ad"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "397214",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "5937",
            "name": "Burger King",
            "city": "1",
            "slugs": {
              "restaurant": "burger-king-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c7ff6ae1-b2f8-4e4f-889a-d57829d26296_5937.jpg",
            "address": "Salarpuria Plaza, No. 543, CMH Road, Nr Indira Nagar Metro station  Bangalore 560 038",
            "locality": "CMH Road",
            "areaName": "Indiranagar",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "79K+",
            "sla": {
              "deliveryTime": 22,
              "minDeliveryTime": 20,
              "maxDeliveryTime": 25,
              "lastMileTravel": 0.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "20-25 MINS",
              "lastMileTravelString": "0.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹110",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "5937",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "5937"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "32603",
            "name": "Leon's - Burgers & Wings (Leon Grill)",
            "city": "1",
            "slugs": {
              "restaurant": "leon-grill-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33b44a22-bc15-4c40-9c2c-ddc68d92a48b_32603.jpg",
            "address": "No 839/1,Binnamangala,First  Stage,Bangalore, K R Puram, B.B.M.P East, Karnataka-560038",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "59K+",
            "promoted": true,
            "adTrackingId": "cid=30497608~p=1~adgrpid=30497608#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=32603~plpr=SEARCH#RESTAURANT~st=burgers~eid=927de120-4459-439f-98d7-b4ecc415738c~srvts=1751281039844",
            "sla": {
              "deliveryTime": 24,
              "minDeliveryTime": 20,
              "maxDeliveryTime": 25,
              "lastMileTravel": 0.2,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "20-25 MINS",
              "lastMileTravelString": "0.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹69",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "4.5K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            },
            "campaignId": "30497608"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\",\"adTrackingId\":\"cid=30497608~p=1~adgrpid=30497608#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=32603~plpr=SEARCH#RESTAURANT~st=burgers~eid=927de120-4459-439f-98d7-b4ecc415738c~srvts=1751281039844\"}",
            "objectValue": "32603",
            "impressionObjectName": "impression-restaurant-ad",
            "clickObjectName": "click-restaurant-ad"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "32603",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "23681",
            "name": "McDonald's",
            "city": "1",
            "slugs": {
              "restaurant": "mc-donaldsd-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/ff52011a-d49c-4809-9b81-01c7eff0a83b_23681.jpg",
            "address": "Door No 539, Ashwini Complex,Indiranagar, CMH Road,Bengaluru- 38",
            "locality": "Cmh Road",
            "areaName": "Indiranagar",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "48K+",
            "sla": {
              "deliveryTime": 21,
              "minDeliveryTime": 20,
              "maxDeliveryTime": 25,
              "lastMileTravel": 0.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "20-25 MINS",
              "lastMileTravelString": "0.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                  "description": "Delivery!"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "FREE ITEM",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "23681",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "23681"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "768475",
            "name": "Wendy's Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "wendys-burgers-below-indirangar-metro-station-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/8bf307ef-a11c-4b70-a98c-4078c8066777_768475.JPG",
            "address": "1st floor, above bhavani shri Andhra restaurant, Below Indirangar metro station, Next to bata Showroom Chinmaya Mission Hospital Rd, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
            "locality": "Below Indirangar metro station",
            "areaName": "Indiranagar",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Snacks"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "2.7K+",
            "promoted": true,
            "adTrackingId": "cid=30538523~p=2~adgrpid=30538523#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=768475~plpr=SEARCH#RESTAURANT~st=burgers~eid=daaab7bf-cf9a-4571-95cd-6ceb0f7f8f30~srvts=1751281039844",
            "sla": {
              "deliveryTime": 27,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 30,
              "lastMileTravel": 0.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "25-30 MINS",
              "lastMileTravelString": "0.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹449",
              "discountTag": "FLAT DEAL"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            },
            "campaignId": "30538523"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\",\"adTrackingId\":\"cid=30538523~p=2~adgrpid=30538523#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=768475~plpr=SEARCH#RESTAURANT~st=burgers~eid=daaab7bf-cf9a-4571-95cd-6ceb0f7f8f30~srvts=1751281039844\"}",
            "objectValue": "768475",
            "impressionObjectName": "impression-restaurant-ad",
            "clickObjectName": "click-restaurant-ad"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "768475",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "941182",
            "name": "Good Flippin' Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "good-flippin-burgers-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/28/218420c4-59ae-48e4-9995-783b5a19b373_941182.JPG",
            "address": "Shop No : NA , Floor : 1st , Bengaluru, Sarvagna Nagar, B.B.M.P East , ",
            "locality": "Sarvagna Nagar",
            "areaName": "Indiranagar",
            "costForTwo": "60000",
            "costForTwoMessage": "₹600 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "1.0K+",
            "sla": {
              "deliveryTime": 28,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 30,
              "lastMileTravel": 0.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "25-30 MINS",
              "lastMileTravelString": "0.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "941182",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "941182",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "861909",
            "name": "Popeyes",
            "city": "1",
            "slugs": {
              "restaurant": "popeyes-100ft-main-road-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/11/8921e99a-092f-4e2a-b327-7e376e588860_861909.jpg",
            "address": "Ground floor, site No.308, 100ft Main Road Indiranagar 1st stage (PID 82-1-308) Bangalore, Shanthinagara, B.B.M.P East, Karnataka-560038",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "50000",
            "costForTwoMessage": "₹500 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
            ],
            "avgRating": 4.2,
            "feeDetails": {},
            "avgRatingString": "4.2",
            "totalRatingsString": "1.8K+",
            "promoted": true,
            "adTrackingId": "cid=30537048~p=3~adgrpid=30537048#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=861909~plpr=SEARCH#RESTAURANT~st=burgers~eid=d388562c-4365-4468-9cae-91d692906b56~srvts=1751281039844",
            "sla": {
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 30,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "25-30 MINS",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹59"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "3.9",
                "ratingCount": "155"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            },
            "campaignId": "30537048"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\",\"adTrackingId\":\"cid=30537048~p=3~adgrpid=30537048#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=861909~plpr=SEARCH#RESTAURANT~st=burgers~eid=d388562c-4365-4468-9cae-91d692906b56~srvts=1751281039844\"}",
            "objectValue": "861909",
            "impressionObjectName": "impression-restaurant-ad",
            "clickObjectName": "click-restaurant-ad"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "861909",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "49189",
            "name": "Truffles",
            "city": "1",
            "slugs": {
              "restaurant": "truffles-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
            "address": "307, K. P Square , Ground Floor, 100 Feet Rd, Binnamangala, Stage 1, Indiranagar, Bengaluru, Karnataka 560008",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "45000",
            "costForTwoMessage": "₹450 FOR TWO",
            "cuisines": [
              "American",
              "Desserts",
              "Italian",
              "Continental"
            ],
            "avgRating": 4.6,
            "feeDetails": {},
            "avgRatingString": "4.6",
            "totalRatingsString": "153K+",
            "sla": {
              "deliveryTime": 37,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "19K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "49189",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "49189",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "568703",
            "name": "Baking Bad - Pizza Delivery",
            "city": "1",
            "slugs": {
              "restaurant": "baking-bad-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/21/1d94f6e0-61e6-4c7c-a374-ec7fd7cb4153_568703.jpg",
            "address": "No 21, 1st Floor , Cmh Road Hoysala Nagar Indiranagar Bengaluru , Karnataka - 560038",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "65000",
            "costForTwoMessage": "₹650 FOR TWO",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Fast Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "4.0K+",
            "promoted": true,
            "adTrackingId": "cid=30569375~p=4~adgrpid=30569375#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=568703~plpr=SEARCH#RESTAURANT~st=burgers~eid=1f1a93de-d96c-4443-a981-24e1d6807351~srvts=1751281039844",
            "sla": {
              "deliveryTime": 31,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.3",
                "ratingCount": "5.9K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            },
            "campaignId": "30569375"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\",\"adTrackingId\":\"cid=30569375~p=4~adgrpid=30569375#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=568703~plpr=SEARCH#RESTAURANT~st=burgers~eid=1f1a93de-d96c-4443-a981-24e1d6807351~srvts=1751281039844\"}",
            "objectValue": "568703",
            "impressionObjectName": "impression-restaurant-ad",
            "clickObjectName": "click-restaurant-ad"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "568703",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "880097",
            "name": "Easybites By Empire",
            "city": "1",
            "slugs": {
              "restaurant": "easy-bites-by-empire-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/3808db83-602a-4af5-915f-64a8d7b70b33_880097.jpg",
            "address": "Shop No : No. 212/A , Floor : G Floor , Situated At Domlur Layout, 2nd Stage, 60 Feet , ",
            "locality": "Domlur",
            "areaName": "Indiranagar",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Burgers",
              "Biryani"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "1.2K+",
            "sla": {
              "deliveryTime": 37,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹199",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "880097",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "880097",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "992952",
            "name": "The Burger Bahn",
            "city": "1",
            "slugs": {
              "restaurant": "the-burger-bahn-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/e8c650e1-e1a5-4384-992d-d87f54e90e89_992952 (1).jpg",
            "address": "Shop No : No 545/36/1 , Floor :  , No 1 Hennur Village Kasaba Hobli Kalyan Nagar , ",
            "locality": "Hennur",
            "areaName": "Hennur",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Burgers",
              "Salads",
              "Fast Food"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "180",
            "promoted": true,
            "adTrackingId": "cid=30569363~p=7~adgrpid=30569363#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=992952~plpr=SEARCH#RESTAURANT~st=burgers~eid=83fa2da4-64f7-4616-b3ea-c26009c38749~srvts=1751281039844",
            "sla": {
              "deliveryTime": 55,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 8.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "8.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            },
            "campaignId": "30569363"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\",\"adTrackingId\":\"cid=30569363~p=7~adgrpid=30569363#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=992952~plpr=SEARCH#RESTAURANT~st=burgers~eid=83fa2da4-64f7-4616-b3ea-c26009c38749~srvts=1751281039844\"}",
            "objectValue": "992952",
            "impressionObjectName": "impression-restaurant-ad",
            "clickObjectName": "click-restaurant-ad"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "992952",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "25618",
            "name": "KFC",
            "city": "1",
            "slugs": {
              "restaurant": "kfc-100-ft-road-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d5316a73-2c7e-4057-aad4-d026a3f72fe8_25618.JPG",
            "address": "# 1/1A, 100 ft Road, Indiranagar, Bangalore 560038",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
            ],
            "avgRating": 4.2,
            "feeDetails": {},
            "avgRatingString": "4.2",
            "totalRatingsString": "28K+",
            "sla": {
              "deliveryTime": 20,
              "minDeliveryTime": 20,
              "maxDeliveryTime": 25,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "20-25 MINS",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹59",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "11K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "25618",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "25618",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "270831",
            "name": "Buffalo Wild Wings",
            "city": "1",
            "slugs": {
              "restaurant": "buffalo-wild-wings-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "tk3hnskpre0qgmx0vqmw",
            "address": "Buffalo Wild Wings, 100 Feet Road, First Stage, H Colony, Indiranagar, Bengaluru, Karnataka, India",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "120000",
            "costForTwoMessage": "₹1200 FOR TWO",
            "cuisines": [
              "American",
              "Continental",
              "Fast Food",
              "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {},
            "avgRatingString": "4.0",
            "totalRatingsString": "1.2K+",
            "sla": {
              "deliveryTime": 38,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 0.2,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "0.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.3",
                "ratingCount": "3.6K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "270831",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "270831",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "3013",
            "name": "Backyard Burgers and Grill",
            "city": "1",
            "slugs": {
              "restaurant": "the-little-donkey-elgin-sarat-bose-road-area",
              "city": "bangalore"
            },
            "cloudinaryImageId": "b7981938da54c37af3ef4a6e25aeb5c8",
            "address": "No.57, Groundfloor , 100 Ft Road ,Indiranagar, Bangalor-560038., Bangalore East, Bangalore Urban, Karnataka-560075",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers",
              "Snacks",
              "American",
              "Beverages",
              "Desserts",
              "Fast Food",
              "Arabian",
              "Indian",
              "Salads",
              "Korean"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "2.0K+",
            "sla": {
              "deliveryTime": 27,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 30,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "25-30 MINS",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹189",
              "logoCtx": {
                "text": "BENEFITS"
              },
              "footerText": "5 DEALS LEFT",
              "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "237"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "3013",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "3013",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "506322",
            "name": "Louis Burger",
            "city": "1",
            "slugs": {
              "restaurant": "louis-burger-2nd-stage-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/20/596fbb5e-edcb-47b3-a6f5-660a40b7aece_506322.JPG",
            "address": "Kitchen no 2 212 A 1st floor 1st main road 2nd stage domlur Sherlock pub building",
            "locality": "2nd stage domlur",
            "areaName": "Indiranagar",
            "costForTwo": "60000",
            "costForTwoMessage": "₹600 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food"
            ],
            "avgRating": 4,
            "feeDetails": {},
            "avgRatingString": "4.0",
            "totalRatingsString": "4.7K+",
            "sla": {
              "deliveryTime": 39,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹89",
              "footerText": "3 DEALS LEFT",
              "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "506322",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "506322",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1037841",
            "name": "Mr Phillys American Cheeseburgers",
            "city": "1",
            "slugs": {
              "restaurant": "mr-phillys-american-cheeseburgers-central-bangalore-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/22/5ccdabd4-2357-4ebd-823a-6092e8491166_1037841 (1).jpg",
            "address": "90, Coles Rd, Cleveland Town, Frazer Town, Bengaluru, Karnataka 560005.",
            "locality": "Coles Road",
            "areaName": "Frazer Town",
            "costForTwo": "50000",
            "costForTwoMessage": "₹500 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Biryani",
              "Fast Food"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "838",
            "sla": {
              "deliveryTime": 48,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "1037841",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "1037841",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1110698",
            "name": "Seoul Burgers & Shakes",
            "city": "1",
            "slugs": {
              "restaurant": "seoul-burgers-shakes-12th-main-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/cb9cb0e5-a834-497b-913e-09fcbba3a094_1110698.jpg",
            "address": "1084, 12th Main, Indiranagar, Bengaluru. 560038",
            "locality": "12th Main",
            "areaName": "Indiranagar",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Burger",
              "Bubble Tea",
              "Fast Food",
              "Beverages",
              "Juice and shake"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "8",
            "sla": {
              "deliveryTime": 36,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "1110698",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "1110698",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "234703",
            "name": "BOSS Burger",
            "city": "1",
            "slugs": {
              "restaurant": "boss-burger-krishnarajapura-whitefield",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/161e616e-294d-41d9-9180-fc67fdaf39ec_234703.jpg",
            "address": "37, 80 Feet Rd, Hal, HAL 3rd Stage, Indiranagar, Bengaluru, Karnataka 560075",
            "locality": "3rd Stage",
            "areaName": "Indiranagar",
            "costForTwo": "50000",
            "costForTwoMessage": "₹500 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Snacks"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "3.2K+",
            "sla": {
              "deliveryTime": 38,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "234703",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "234703",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "489988",
            "name": "The Burger Craft",
            "city": "1",
            "slugs": {
              "restaurant": "the-burger-craft-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "urbre4hfbcrmm4x7t1pk",
            "address": "NO.11, SERVICE ROAD, OLD AIRPORT ROAD, DOMLUR, BENGALURU., B.B.M.P East, Karnataka-560071",
            "locality": "DOMLUR",
            "areaName": "DOMLUR",
            "costForTwo": "60000",
            "costForTwoMessage": "₹600 FOR TWO",
            "cuisines": [
              "Continental"
            ],
            "avgRating": 3.9,
            "feeDetails": {},
            "avgRatingString": "3.9",
            "totalRatingsString": "154",
            "sla": {
              "deliveryTime": 38,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "489988",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "489988",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "784307",
            "name": "Nashville Fried Chicken - NFC",
            "city": "1",
            "slugs": {
              "restaurant": "nashville-fried-chicken-nfc-2nd-stage-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "e9b5f0d45e6556a5ed354dabdbd31cfd",
            "address": "212/A, 1ST MAIN ROAD, 2ND STAGE, INDIRANAGAR, BANGALORE, Shanthinagara, B.B.M.P East, Karnataka-560071",
            "locality": "2ND STAGE",
            "areaName": "INDIRANAGAR",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "American",
              "Burgers",
              "Fast Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "1.1K+",
            "sla": {
              "deliveryTime": 40,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹169",
              "footerText": "4 DEALS LEFT",
              "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "784307",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "784307"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "341895",
            "name": "Burger Seigneur",
            "city": "1",
            "slugs": {
              "restaurant": "burger-seigneur-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/2e01532b-e100-46fd-a7f5-8d430dd714b4_341895.jpg",
            "address": "Shop No Gf11 Visible 2023/A,14Thmain Road Hal 2Nd Stage Indiranagar Bangalore-560008",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "130000",
            "costForTwoMessage": "₹1300 FOR TWO",
            "cuisines": [
              "American",
              "Continental",
              "Burgers",
              "Beverages"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "5.3K+",
            "sla": {
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹115"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "3.9K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "341895",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "341895",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "698714",
            "name": "Habanero Burger",
            "city": "1",
            "slugs": {
              "restaurant": "habanero-burger-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "44c868500c2e765208d2be1ba3a32e14",
            "address": "No706, 1A cross, HRBR Layout, Banaswadi Fire Station, Kalyannagar, Bangalore-560043, Shivajinagara, B.B.M.P East, Karnataka - 560043",
            "locality": "HRBR Layout",
            "areaName": "Kalyannagar",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers",
              "Snacks"
            ],
            "avgRating": 4,
            "feeDetails": {},
            "avgRatingString": "4.0",
            "totalRatingsString": "130",
            "sla": {
              "deliveryTime": 59,
              "minDeliveryTime": 55,
              "maxDeliveryTime": 60,
              "lastMileTravel": 5.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "55-60 MINS",
              "lastMileTravelString": "5.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "698714",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "698714",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "264924",
            "name": "Hard Rock Cafe",
            "city": "1",
            "slugs": {
              "restaurant": "hard-rock-cafe-bengaluru-st-marks-rd-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/24/1c15b87a-17c8-4ab4-9628-a3ed12e32773_264924.jpg",
            "address": "40, St Marks Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
            "locality": "St. Marks Road",
            "areaName": "St. Marks Road",
            "costForTwo": "90000",
            "costForTwoMessage": "₹900 FOR TWO",
            "cuisines": [
              "Burger",
              "pizza",
              "American",
              "Italian",
              "Continental",
              "Salads",
              "rolls",
              "dessert"
            ],
            "avgRating": 3.9,
            "feeDetails": {},
            "avgRatingString": "3.9",
            "totalRatingsString": "1.0K+",
            "sla": {
              "deliveryTime": 62,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.4",
                "ratingCount": "16K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "264924",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "264924",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "812202",
            "name": "Beyondburg Inc",
            "city": "1",
            "slugs": {
              "restaurant": "beyondburg-inc-central-bangalore-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "cbf725cf7f6e603aa14893125098466c",
            "address": "House of Lords, 15/16, St Mark's Rd, opposite State Bank of India Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka",
            "locality": "Race Course Road",
            "areaName": "Ashok Nagar",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "American",
              "Beverages"
            ],
            "avgRating": 4.7,
            "feeDetails": {},
            "avgRatingString": "4.7",
            "totalRatingsString": "754",
            "sla": {
              "deliveryTime": 65,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 5.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "5.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                },
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹149"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.9",
                "ratingCount": "3.2K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "812202",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "812202",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "12401",
            "name": "Portland Grill & Cafe",
            "city": "1",
            "slugs": {
              "restaurant": "portland-steak-house-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "tmkacw8u3ou9aypoag6z",
            "address": "No 1, Brunton Road, 1st Cross, Bangalore 560001",
            "locality": "MG Road",
            "areaName": "Central Bangalore",
            "costForTwo": "150000",
            "costForTwoMessage": "₹1500 FOR TWO",
            "cuisines": [
              "American",
              "European"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "5.0K+",
            "sla": {
              "deliveryTime": 56,
              "minDeliveryTime": 55,
              "maxDeliveryTime": 60,
              "lastMileTravel": 3.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "55-60 MINS",
              "lastMileTravelString": "3.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.2",
                "ratingCount": "3.3K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "12401",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "12401"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "273161",
            "name": "Biggies Burger",
            "city": "1",
            "slugs": {
              "restaurant": "biggies-burger-'n'-more-central-bangalore-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/c8ddab21-589f-4d14-833c-1181d4d17d7a_273161.jpg",
            "address": "The Bundle Co., Church Street, Haridevpur, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, India",
            "locality": "Church Street",
            "areaName": "Church Street",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "809",
            "sla": {
              "deliveryTime": 50,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "2.1K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "273161",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "273161",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "380945",
            "name": "Simon Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "simon-burgers-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "2988b7578fad0ac0760fb325ad2d5e91",
            "address": " unit 6, Vivekananda swamy, no 38, near Sri Venkateswara Garments, 3rd Cross, Ramaiah Layout, Kammanahalli, Bengaluru, Karnataka 560084",
            "locality": "Kasavanahalli",
            "areaName": "Kammanahalli",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Burgers",
              "Continental",
              "Snacks"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "1.8K+",
            "sla": {
              "deliveryTime": 51,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 6.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "6.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.7",
                "ratingCount": "433"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "380945",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "380945",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "891559",
            "name": "Evolve Burgers and Bowls",
            "city": "1",
            "slugs": {
              "restaurant": "amaiya-the-bakehouse-jayanagar-jayanagar-2",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/4f168a7b-34fe-4841-8425-bad431bf3f00_891559.jpg",
            "address": "RMZ MILLENIA, Tower C Lobby Land Wing 4th, Murphy Rd, Halasuru, Karnataka 560008",
            "locality": "Ulsoor",
            "areaName": "Central Bangalore",
            "costForTwo": "29900",
            "costForTwoMessage": "₹299 FOR TWO",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Desserts",
              "Ice Cream"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "11",
            "sla": {
              "deliveryTime": 39,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 2.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "2.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "891559",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "891559",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "500351",
            "name": "BurgerMan",
            "city": "1",
            "slugs": {
              "restaurant": "burgerman-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "1356c614fa26b2872db27c8dc231c12b",
            "address": "3282/1,12th Main, 2nd Stage Indiranagar, Bangalore East, Bangalore Urban, Karnataka-560038",
            "locality": "2nd stage",
            "areaName": "Indiranagar",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Burgers",
              "Pizzas",
              "Snacks",
              "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {},
            "avgRatingString": "4.2",
            "totalRatingsString": "1.1K+",
            "sla": {
              "deliveryTime": 28,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 30,
              "lastMileTravel": 1.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "25-30 MINS",
              "lastMileTravelString": "1.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹250",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "500351",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "500351",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "59801",
            "name": "Indiana Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "indiana-burgers-domlur-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "h3g8hqh8txova02g4v5y",
            "address": "No 21, 1st Floor, CMH Road, Indiranagar, 2nd Stage, B.B.M.P East, Karnataka-560037",
            "locality": "2nd stage",
            "areaName": "Indiranagar",
            "costForTwo": "15000",
            "costForTwoMessage": "₹150 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Beverages",
              "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {},
            "avgRatingString": "4.0",
            "totalRatingsString": "5.8K+",
            "sla": {
              "deliveryTime": 35,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                }
              ],
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "59801",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "59801",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "17062",
            "name": "Sanky's Burger House",
            "city": "1",
            "slugs": {
              "restaurant": "sankys-burger-house-hennur-nagavara-hennur",
              "city": "bangalore"
            },
            "cloudinaryImageId": "o7w5iadaztba0epaoqhm",
            "address": "No. 50, Hennur Main Road, Kacharakanahalli,Bangalore  84",
            "locality": "Hennur",
            "areaName": "kalyan nagar",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "American"
            ],
            "avgRating": 4.7,
            "feeDetails": {},
            "avgRatingString": "4.7",
            "totalRatingsString": "14K+",
            "sla": {
              "deliveryTime": 48,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 6.8,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "6.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.4",
                "ratingCount": "3.9K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "17062",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "17062",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "59187",
            "name": "Burger Mill",
            "city": "1",
            "slugs": {
              "restaurant": "the-garage-food-company-sector-7-hsr-layout-hsr",
              "city": "bangalore"
            },
            "cloudinaryImageId": "099ae9eaef74308e5a070287ed2bfdbd",
            "address": "No-260,23rd Cross, 13th Main,Sector-7 HSR Layout,Bangalore, BTM Layout,B.B.M.P South (Karnataka)- 560102",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "25000",
            "costForTwoMessage": "₹250 FOR TWO",
            "cuisines": [
              "Burgers",
              "Pizzas",
              "Beverages",
              "Snacks",
              "Desserts"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "1.7K+",
            "sla": {
              "deliveryTime": 60,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 7.1,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "7.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "59187",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "59187",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "876323",
            "name": "Original Burger Co.",
            "city": "1",
            "slugs": {
              "restaurant": "original-burger-co-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/24/a5f1a890-b75f-41d9-8d1b-382758f7f5c8_876323 SS.jpg",
            "address": "Shop No : No. 2116 , Floor : G Floor , 4th Cross, CMR Road, HRBR Layout 2nd Block, , ",
            "locality": "Kalyan Nagar",
            "areaName": "Kammanahalli/Kalyan Nagar",
            "costForTwo": "70000",
            "costForTwoMessage": "₹700 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "556",
            "sla": {
              "deliveryTime": 48,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 6.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "6.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "876323",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "876323",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "395215",
            "name": "McDonald's Gourmet Burger Collection",
            "city": "1",
            "slugs": {
              "restaurant": "mcdonalds-gourmet-burger-collection-cmh-2-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "cvmfqvur1saikrlmj8ow",
            "address": "Door No 539, Ashwini Complex,Indiranagar, CMH Road,Bengaluru- 38",
            "locality": "CMH Road",
            "areaName": "Indiranagar",
            "costForTwo": "60000",
            "costForTwoMessage": "₹600 FOR TWO",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "414",
            "sla": {
              "deliveryTime": 18,
              "minDeliveryTime": 15,
              "maxDeliveryTime": 20,
              "lastMileTravel": 0.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "15-20 MINS",
              "lastMileTravelString": "0.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "395215",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "395215",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "879832",
            "name": "DNC - Dash and Coop",
            "city": "1",
            "slugs": {
              "restaurant": "dash-and-coop-hsr-hsr",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/16/f240c71e-4028-4f26-a490-3a2b8f3069b8_879832.jpg",
            "address": "DASH AND COOP , NO 74,AGARA(V) BOSAPPA LAYOUT,24TH B MAIN,1ST CROSS,HSR LAYOUT AGARA BANGALORE, Bommanahalli, B.B.M.P South, Karnataka - 560102",
            "locality": " HSR Food Court",
            "areaName": "HSR LAYOUT BANGALORE",
            "costForTwo": "55200",
            "costForTwoMessage": "₹552 FOR TWO",
            "cuisines": [
              "Continental",
              "Fast Food",
              "Burgers",
              "Cafe"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "122",
            "sla": {
              "deliveryTime": 71,
              "minDeliveryTime": 70,
              "maxDeliveryTime": 75,
              "lastMileTravel": 10.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "70-75 MINS",
              "lastMileTravelString": "10.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "25% OFF",
              "subHeader": "UPTO ₹125",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "879832",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "879832",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "792229",
            "name": "Wendy's Flavor Fresh Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "wendys-flavor-fresh-burgers-hoysala-nagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/56d245a3-e28c-463b-afcd-e86662406c6a_792229.jpg",
            "address": "1st floor, above bhavani shri Andhra restaurant, Below Indirangar metro station, Next to bata Showroom Chinmaya Mission Hospital Rd, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
            "locality": "Hoysala Nagar",
            "areaName": "Indiranagar",
            "costForTwo": "50000",
            "costForTwoMessage": "₹500 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Snacks",
              "Beverages"
            ],
            "avgRating": 3.9,
            "feeDetails": {},
            "avgRatingString": "3.9",
            "totalRatingsString": "46",
            "sla": {
              "deliveryTime": 28,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 30,
              "lastMileTravel": 0.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "25-30 MINS",
              "lastMileTravelString": "0.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "792229",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "792229",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "204351",
            "name": "Burger It Up",
            "city": "1",
            "slugs": {
              "restaurant": "burger-it-up-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "uqr0cekln2lmjwkpot2b",
            "address": "No 21, 1st Floor, CMH Road, Indiranagar, 2nd Stage, B.B.M.P East, Karnataka-560037",
            "locality": "2nd stage",
            "areaName": "Indiranagar",
            "costForTwo": "15000",
            "costForTwoMessage": "₹150 FOR TWO",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Desserts",
              "American",
              "Cafe"
            ],
            "avgRating": 4,
            "feeDetails": {},
            "avgRatingString": "4.0",
            "totalRatingsString": "2.5K+",
            "sla": {
              "deliveryTime": 35,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 0.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "0.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "204351",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "204351",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "690684",
            "name": "Burgerama",
            "city": "1",
            "slugs": {
              "restaurant": "burgerama-koramangala-koramangala",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/5/eb46c732-4004-4563-88ed-ace5893adccb_690684.jpg",
            "address": "No.42A/A, (Old No.148/11, Khata No.269), P.I.D  No.68-327-98/1), 1st Floor, Jakkasandra Village,  Sarjapur Main Road, Begur Hobli, Bengaluru,  BTM Layout , B.B.M.P South, Karnataka-560034",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "70000",
            "costForTwoMessage": "₹700 FOR TWO",
            "cuisines": [
              "American"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "2.6K+",
            "sla": {
              "deliveryTime": 54,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 7.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "7.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹110",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.4",
                "ratingCount": "91"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "690684",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "690684",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "908349",
            "name": "Easy Bites",
            "city": "1",
            "slugs": {
              "restaurant": "easy-bites-bellandur-sarjapur-bellandur-sarjapur-2",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/5/802b661c-0e4a-47fd-9076-6350b8a93d21_908349.jpg",
            "address": "Shop No :1202 , 3rd Floor , Sy No. 79/7, Bellandur Grama, Opp Green Glen , ",
            "locality": "Bellandur Grama",
            "areaName": "Bellandur Sarjapur",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Burgers"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "316",
            "sla": {
              "deliveryTime": 70,
              "minDeliveryTime": 70,
              "maxDeliveryTime": 75,
              "lastMileTravel": 11.8,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "70-75 MINS",
              "lastMileTravelString": "11.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "908349",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "908349"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1123114",
            "name": "Burger Derby",
            "city": "1",
            "slugs": {
              "restaurant": "burger-derby-mahadevpura-mahadevpura",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/25/37eda264-c563-4566-a7be-8792e2ccd49c_1123114 (1).jpg",
            "address": "Shop No : #158 , Floor :  , 5TH Cross, 2ND Stage , ",
            "locality": "Mahadevpura",
            "areaName": "Mahadevpura",
            "costForTwo": "39900",
            "costForTwoMessage": "₹399 FOR TWO",
            "cuisines": [
              "Beverages",
              "Snacks",
              "Burgers"
            ],
            "feeDetails": {},
            "avgRatingString": "NEW",
            "sla": {
              "deliveryTime": 60,
              "minDeliveryTime": 55,
              "maxDeliveryTime": 60,
              "lastMileTravel": 9.9,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "55-60 MINS",
              "lastMileTravelString": "9.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "₹80 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "1123114",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "1123114",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1025901",
            "name": "Jumboking Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "jumboking-burgers-cv-raman-nagar-cv-raman-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/13/c58d1a31-ffa8-4168-a3de-34d95027588c_1025901.jpg",
            "address": "SHERWOOD GALLERIA, C/O SHERWOOD RESIDENTAL ASSOCIATION, TATA SHERWOOD ROAD, SURVEY NO 162/4, 164/1, 164/2, BASAVANAGAR MAIN ROAD, BANGALORE ,Bangalore East,Bangalore Urban,Karnataka-560037\t",
            "locality": "CV Raman Nagar",
            "areaName": "CV Raman Nagar",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "American",
              "Mexican",
              "Beverages",
              "Fast Food",
              "Burgers"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "103",
            "sla": {
              "deliveryTime": 39,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 6.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "6.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "1025901",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "1025901"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "523224",
            "name": "O4H - Order For Health",
            "city": "1",
            "slugs": {
              "restaurant": "o4h-–-order-for-health-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/10/8d0c0b59-c2fc-4a48-b239-f77e78751d52_523224.jpg",
            "address": "No 74-59-13, 1st Floor, New Thippasandra Main Road, Next to More Store BEML Road New Thippasandra, R R Nagara , B.B.M.P West, Karnataka-560075",
            "locality": "New Thipasandra",
            "areaName": "Indiranagar",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Healthy Food",
              "Salads",
              "Keto",
              "Mediterranean",
              "Beverages",
              "Desserts",
              "Continental"
            ],
            "avgRating": 4.6,
            "feeDetails": {},
            "avgRatingString": "4.6",
            "totalRatingsString": "4.5K+",
            "sla": {
              "deliveryTime": 31,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
                  "description": "Delivery!"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹139",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "523224",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "523224",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "335220",
            "name": "Gochick Burgers & Wings",
            "city": "1",
            "slugs": {
              "restaurant": "ifc-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/25/487d055d-7011-445c-b49b-12f8f8aa377b_335220.jpg",
            "address": "5th Floor & 2nd Floor, 429, 7th Main Rd, HRBR Layout 1st Block, HRBR Layout 2nd Block, HRBR, Kalyan Nagar, Bengaluru, Karnataka 560043",
            "locality": "Kalyan Nagar",
            "areaName": "Kalyan Nagar",
            "costForTwo": "25000",
            "costForTwoMessage": "₹250 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Healthy Food",
              "Desserts",
              "Rolls & Wraps",
              "Pastas",
              "Shawarma",
              "Salads",
              "Snacks"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "9.8K+",
            "sla": {
              "deliveryTime": 51,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 7.9,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "7.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.6",
                "ratingCount": "95"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "335220",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "335220",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "621462",
            "name": "Nando's",
            "city": "1",
            "slugs": {
              "restaurant": "nandos-brigade-rd-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "3b6787b39dbda785f5a0604a4d7672bc",
            "address": "Nandos Restaurant Shop No. 203, Forum Rex Mall, Brigade Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
            "locality": "Forum Rex Mall",
            "areaName": "Brigade Road",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Portuguese",
              "Burgers",
              "Fast Food"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "1.2K+",
            "sla": {
              "deliveryTime": 67,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 4.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "4.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹149"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "249"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "621462",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "621462",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "407947",
            "name": "Sabari Cafe",
            "city": "1",
            "slugs": {
              "restaurant": "sabari-cafe-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "kapxmngkirjfgwqqnzfi",
            "address": "475, ground floor, 10th main, Jeevan Bima Nagar Main Rd, Hal, HAL 3rd Stage, New Tippasandra, Bengaluru, Karnataka 560075, India",
            "locality": "Jeevan Bhima Nagar",
            "areaName": "Indiranagar",
            "costForTwo": "25000",
            "costForTwoMessage": "₹250 FOR TWO",
            "cuisines": [
              "Fast Food",
              "Chinese",
              "Beverages"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "175",
            "sla": {
              "deliveryTime": 37,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "126"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "407947",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "407947",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "702130",
            "name": "Bombay Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "bombay-burger's-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "e230317f0b669033935ee35ceb4592ef",
            "address": "H.No.208, Ground Floor, 1st Cross, 18th C Main, HAL 2nd Stage, Bangalore ,,Shanthinagara,B.B.M.P East,Karnataka-560008",
            "locality": "Indiranagar",
            "areaName": "Shanthinagara",
            "costForTwo": "80000",
            "costForTwoMessage": "₹800 FOR TWO",
            "cuisines": [
              "Burgers",
              "Snacks",
              "Chinese",
              "Beverages"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "21",
            "sla": {
              "deliveryTime": 37,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 40,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "35-40 MINS",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "702130",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "702130",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "720991",
            "name": "Burger & Sandwich Zone",
            "city": "1",
            "slugs": {
              "restaurant": "abbas-sekh-indiranagar-indiranagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "2a22bbb8d3a959aca696f8060c48fa29",
            "address": "36, 6th Main Rd, New Akash Nagar, Stage 3, Indiranagar, Bengaluru, Karnataka 560038, India",
            "locality": "New Akash Nagar",
            "areaName": "Indiranagar",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Burgers",
              "sandwich",
              "Momos"
            ],
            "avgRating": 3.8,
            "feeDetails": {},
            "avgRatingString": "3.8",
            "totalRatingsString": "96",
            "sla": {
              "deliveryTime": 35,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 0.9,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "0.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                  "description": "bolt!"
                },
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "720991",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "720991",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "782235",
            "name": "Grill Daddy",
            "city": "1",
            "slugs": {
              "restaurant": "grill-daddy-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "23275c46c20caeda6d811fd0b2a4d0df",
            "address": "GROUND FLOOR 1ST AVENUE 5TH MAIN ROAD HRBR LAYOUT 2ND BLOCK KALYAN NAGAR   BENGALURU  INDIA B B M P East Karnataka 560043\t",
            "locality": "HRBR Layout",
            "areaName": "Kammanahalli/Kalyan Nagar",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Continental",
              "American",
              "Pastas",
              "Italian",
              "Steakhouse",
              "Burgers",
              "Salads",
              "Grill",
              "Beverages",
              "Seafood"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "1.6K+",
            "sla": {
              "deliveryTime": 53,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 6.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "6.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "782235",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "782235",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "17753",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "city": "1",
            "slugs": {
              "restaurant": "faasos-marathahalli-2",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/e0477e4d-51f7-4cdd-936b-a7b9651dc6b3_17753.JPG",
            "address": "No s-3,s-4, silver spring layout, OYO Building, 1st Floor munnekolalu, Spice Garden Layout, Lakshminarayana Pura, Marathahalli, Bengaluru, Karnataka 560037",
            "locality": "Lakshminarayana Pura",
            "areaName": "Munnekolal",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Kebabs",
              "Fast Food",
              "Snacks",
              "American",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "17K+",
            "sla": {
              "deliveryTime": 67,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 10.1,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "10.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Rolls.png",
                  "description": "Delivery!"
                }
              ]
            },
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹89",
              "logoCtx": {
                "text": "BENEFITS"
              },
              "footerText": "9 DEALS LEFT",
              "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "17753",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "17753",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "301890",
            "name": "Lavender Gourmet Burgers & Sandwiches",
            "city": "1",
            "slugs": {
              "restaurant": "lavender-koramangala-koramangala",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/7/31f07078-35b4-4b69-a94f-be8c72c65b27_301890. JPG.jpg",
            "address": "NO.98/A, 5th Block Opp China Perl Restaurant , Koramangala",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "25000",
            "costForTwoMessage": "₹250 FOR TWO",
            "cuisines": [
              "American",
              "Continental",
              "Burgers",
              "Cafe",
              "Beverages"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "1.5K+",
            "sla": {
              "deliveryTime": 61,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 6.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "6.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "₹200 OFF",
              "subHeader": "ABOVE ₹549",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.7",
                "ratingCount": "50"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "301890",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "301890",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "950286",
            "name": "Bigguys Wings & More",
            "city": "1",
            "slugs": {
              "restaurant": "bigguys-wings-&-more-bellandur-sarjapur-bellandur-sarjapur-5",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/b8bb4429-d70f-49a6-8cad-ae3234ba1df7_950286.jpg",
            "address": "Shop No : No. 234 , Floor : G Floor , Beside Shoba Jasmine, Green Glen Layout , ",
            "locality": "Bellandur Sarjapur",
            "areaName": "Bellandur Sarjapur",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "American",
              "Beverages",
              "Fast Food"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "168",
            "sla": {
              "deliveryTime": 77,
              "minDeliveryTime": 75,
              "maxDeliveryTime": 80,
              "lastMileTravel": 13.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "75-80 MINS",
              "lastMileTravelString": "13.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "950286",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "950286",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "981134",
            "name": "Gochick Burgers & Wings",
            "city": "1",
            "slugs": {
              "restaurant": "gochick-btm-btm",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/25/e1d39ab3-de1c-444c-9aab-88926849ebf3_981134.jpg",
            "address": "Shop No : No.7 , Floor : G Floor , Gochick Koramangala Opp.to NEXUS Mall, Korama , ",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Healthy Food",
              "Desserts",
              "Rolls & Wraps",
              "Pastas",
              "Shawarma",
              "Salads",
              "Snacks"
            ],
            "avgRating": 4.2,
            "feeDetails": {},
            "avgRatingString": "4.2",
            "totalRatingsString": "434",
            "sla": {
              "deliveryTime": 64,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 8.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "8.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "981134",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "981134",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "929418",
            "name": "Biggies Burger",
            "city": "1",
            "slugs": {
              "restaurant": "biggies-burger-mahadevpura-mahadevpura",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/56ac4228-519d-4613-b3a3-11d49ae52d89_929418.jpg",
            "address": "Shop No : Trifecta Adatto , Floor : 13th Floor , Garudachalpalya Mahadevpura Post, Bengalore S , ",
            "locality": " Garudachalpalya Mahadevpura",
            "areaName": "Mahadevpura",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "314",
            "sla": {
              "deliveryTime": 47,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 7.8,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "7.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "929418",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "929418",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1012229",
            "name": "Krazy Kebab Co.-Fried Chicken, Burgers & Meals",
            "city": "1",
            "slugs": {
              "restaurant": "krazy-kebab-co-kormangla-btm",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/31/f002bf22-b6c4-4fa2-8727-e61617e3fecd_1012229.jpg",
            "address": "NUMBER 504,1ST FLOOR,6TH CROSS,6TH BLOCK,KORAMANGALA,CLUB ROAD,BENGALURU-560095, BTM Layout , B.B.M.P South, Karnataka-56009",
            "locality": "Kormangla",
            "areaName": "Kormangla",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Kebabs",
              "Fast Food"
            ],
            "avgRating": 4.2,
            "feeDetails": {},
            "avgRatingString": "4.2",
            "totalRatingsString": "139",
            "sla": {
              "deliveryTime": 57,
              "minDeliveryTime": 55,
              "maxDeliveryTime": 60,
              "lastMileTravel": 6.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "55-60 MINS",
              "lastMileTravelString": "6.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "1012229",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "1012229",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "320900",
            "name": "Smashover",
            "city": "1",
            "slugs": {
              "restaurant": "smashover-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "kpvc9puymg4muhhjed4l",
            "address": "441, 1st block 8th B main, 4th A cross, Near coffee day HRBR layout, Kalyanagar, Karnataka-560043 ,,K R Puram,B.B.M.P East,Karnataka-560043",
            "locality": "HRBR layout",
            "areaName": "Kalyanagar",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Burgers"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "555",
            "sla": {
              "deliveryTime": 55,
              "minDeliveryTime": 55,
              "maxDeliveryTime": 60,
              "lastMileTravel": 6.9,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "55-60 MINS",
              "lastMileTravelString": "6.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "₹250 OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "320900",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "320900",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "56407",
            "name": "Big Chicken",
            "city": "1",
            "slugs": {
              "restaurant": "big-chicken-kammanahalli-kammanahallikalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "z8rpixpjhpd1erjhpxyq",
            "address": "#84, Jayalakshmi Complex Near Sansar Collection",
            "locality": "Kammanahalli",
            "areaName": "Kammanahalli",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "American"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "14K+",
            "sla": {
              "deliveryTime": 52,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 6.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "6.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "1.3K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "56407",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "56407",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "174211",
            "name": "Five Star Chicken",
            "city": "1",
            "slugs": {
              "restaurant": "five-star-chicken-kanakanagar-rt-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "jxs68vadqravuphaqhxp",
            "address": "Five star chicken, K R Enterprises, no 46/ 5, site number 1&2, 7th cross,khb main road, kanakaNagar,r t nagar post , Bangalore 560032",
            "locality": "KanakaNagar",
            "areaName": "R T Nagar",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 3.5,
            "feeDetails": {},
            "avgRatingString": "3.5",
            "totalRatingsString": "3.1K+",
            "sla": {
              "deliveryTime": 54,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 10.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "10.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79",
              "logoCtx": {
                "text": "BENEFITS"
              },
              "footerText": "10 DEALS LEFT",
              "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "174211",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "174211",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "326223",
            "name": "Texas Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "texas-burgers-hsr-hsr",
              "city": "bangalore"
            },
            "cloudinaryImageId": "wl86vfsdlxnbpugiwcy6",
            "address": " 2724, 31st Main road, 17th cross road, 1st Sector, hsr layout, bangalore , Karnataka  560102",
            "locality": "1st Sector",
            "areaName": "Hsr Layout",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "American",
              "Snacks"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "1.8K+",
            "sla": {
              "deliveryTime": 62,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 10.8,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "10.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "326223",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "326223",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "59593",
            "name": "Al Daaz",
            "city": "1",
            "slugs": {
              "restaurant": "al-daaz-hsr-hsr",
              "city": "bangalore"
            },
            "cloudinaryImageId": "9d9ccb333db8f94351e3842664d09309",
            "address": "#64 & 65, 27Th Main Rd, 1st Sector Hsr Layout - 560102",
            "locality": "HSR Layout",
            "areaName": "HSR Layout",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Arabian",
              "Mughlai",
              "Chinese",
              "Desserts",
              "American",
              "Indian",
              "Pizzas"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "69K+",
            "sla": {
              "deliveryTime": 59,
              "minDeliveryTime": 55,
              "maxDeliveryTime": 60,
              "lastMileTravel": 9.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "55-60 MINS",
              "lastMileTravelString": "9.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "24K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "59593",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "59593",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "5323",
            "name": "Meat and Eat",
            "city": "1",
            "slugs": {
              "restaurant": "meat-and-eat-maruthi-nagar-btm-btm",
              "city": "bangalore"
            },
            "cloudinaryImageId": "kcikmksxa2ny2vcblwxf",
            "address": "#75/4, Maruthi Nagar Main Road, Next To Surya Sweets, Btm 1st Stage, Bangalore - 560068",
            "locality": "BTM Layout",
            "areaName": "BTM Layout",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Fast Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "3.8K+",
            "sla": {
              "deliveryTime": 65,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 8.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "8.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "3.5",
                "ratingCount": "327"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "5323",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "5323",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "38644",
            "name": "Meat And Eat",
            "city": "1",
            "slugs": {
              "restaurant": "meat-and-eat-rammurthy-nagar-ramamurthy-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "tc7rog1fe7j4eeugeeoj",
            "address": "79, Kalkare main road, Opp More super market, Sir M V Nagar, Ramamurthy Nagar, Bangalore - 560016",
            "locality": "Sir M V Nagar",
            "areaName": "Ramamurthy Nagar",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Fast Food"
            ],
            "avgRating": 4.6,
            "feeDetails": {},
            "avgRatingString": "4.6",
            "totalRatingsString": "7.0K+",
            "sla": {
              "deliveryTime": 54,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 9.9,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "9.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "38644",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "38644",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "324241",
            "name": "Burger Leaf",
            "city": "1",
            "slugs": {
              "restaurant": "burger-leaf-marathahalli-marathahalli",
              "city": "bangalore"
            },
            "cloudinaryImageId": "iryawpvxyahtz5gropde",
            "address": "BURGER LEAF, Vinayaka Theater, 1st Cross Road,Marathahalli, Bengaluru, Karnataka, India",
            "locality": "Marathahalli",
            "areaName": "Marathahalli",
            "costForTwo": "15000",
            "costForTwoMessage": "₹150 FOR TWO",
            "cuisines": [
              "Desserts",
              "Snacks",
              "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "200",
            "sla": {
              "deliveryTime": 53,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 8.1,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "8.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "83"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "324241",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "324241",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "885835",
            "name": "Bigguys Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "bigguys-wings-&-more-bellandur-sarjapur-bellandur-sarjapur-3",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/3a21ffcc-7a2d-44d9-a106-a4a8ab211444_885835.jpg",
            "address": "Shop No : 49 , Floor : G Floor , 2nd Ave, Ambalipura, ROAD, Haralur, Bengaluru , ",
            "locality": "Haralur Main Rd",
            "areaName": "Bellandur Sarjapur",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food"
            ],
            "avgRating": 3.4,
            "feeDetails": {},
            "avgRatingString": "3.4",
            "totalRatingsString": "67",
            "sla": {
              "deliveryTime": 66,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 11.9,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "11.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "885835",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "885835",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "699329",
            "name": "The fritter company",
            "city": "1",
            "slugs": {
              "restaurant": "the-fritter-company-bellandur-sarjapur-bellandur-sarjapur",
              "city": "bangalore"
            },
            "cloudinaryImageId": "81a4a575e0298eece46ed46cfe4f21cf",
            "address": "3/2, Ground Floor, Gate Sarjapur, near aroma spa, little Italy lane, Marathahalli Rd, Ambalipura, Bellandur, Near Quess Corp Office, Bengaluru, Mahadevapura, Karnataka-560103",
            "locality": " near aroma spa,quess corp office, little Italy lane",
            "areaName": "Bellandur Sarjapur",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "shawarma",
              "Rolls & Wraps",
              "Beverages",
              "Fast Food",
              "Continental"
            ],
            "avgRating": 4.2,
            "feeDetails": {},
            "avgRatingString": "4.2",
            "totalRatingsString": "1.1K+",
            "sla": {
              "deliveryTime": 77,
              "minDeliveryTime": 75,
              "maxDeliveryTime": 80,
              "lastMileTravel": 12.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "75-80 MINS",
              "lastMileTravelString": "12.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹129",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "699329",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "699329",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "699328",
            "name": "Burger bakery",
            "city": "1",
            "slugs": {
              "restaurant": "burger bakery-bellandur-sarjapur-bellandur-sarjapur",
              "city": "bangalore"
            },
            "cloudinaryImageId": "fb86f91a59d5134af1b637443418a1e7",
            "address": "833/1, 3rd Floor, Chowman Restaurant Building, Sai Durga Enclave, Near Shell Petrol Pump, Bellandur,Bengaluru, Karnataka 560037,B.B.M.P East,Karnataka  560037",
            "locality": "Near shell petrol pump",
            "areaName": "Bellandur Sarjapur",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "American",
              "Burgers",
              "Beverages"
            ],
            "avgRating": 3.6,
            "feeDetails": {},
            "avgRatingString": "3.6",
            "totalRatingsString": "<3",
            "sla": {
              "deliveryTime": 68,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 11.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "11.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "699328",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "699328",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "699331",
            "name": "California burger village",
            "city": "1",
            "slugs": {
              "restaurant": "california-burger-village-bellandur-sarjapur-bellandur-sarjapur",
              "city": "bangalore"
            },
            "cloudinaryImageId": "43453970d93050fce8817088d5e58aec",
            "address": "3/2, Ground Floor, Gate Sarjapur,  Marathahalli Rd, Ambalipura, Bellandur,  Near Quess Corp Office, Bengaluru,  Karnataka, , Mahadevapura, B.B.M.P East,  Karnataka - 560103",
            "locality": "near aroma spa,quess corp office, little Italy lane",
            "areaName": "Bellandur Sarjapur",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "shawarma",
              "Rolls & Wraps",
              "Beverages",
              "Fast Food",
              "Continental"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "349",
            "sla": {
              "deliveryTime": 74,
              "minDeliveryTime": 70,
              "maxDeliveryTime": 75,
              "lastMileTravel": 12.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "70-75 MINS",
              "lastMileTravelString": "12.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "699331",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "699331",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "108109",
            "name": "Kabab Magic",
            "city": "1",
            "slugs": {
              "restaurant": "kabab-magic-basavanagudi",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/26/f6898ea6-f49b-44b2-8e03-1f414f305d51_108109.jpg",
            "address": "31, R V ROAD BASAVANAGUDI, bangalore 560004.",
            "locality": "Basavanagudi",
            "areaName": "Basavanagudi",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Kebabs",
              "rolls",
              "Biryani",
              "Chinese",
              "North Indian"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "12K+",
            "sla": {
              "deliveryTime": 69,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 10.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "10.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "13K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "108109",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "108109",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "48556",
            "name": "Imperial Restaurant Since 1954",
            "city": "1",
            "slugs": {
              "restaurant": "imperial-restaurant-shivajinagar-frazer-town",
              "city": "bangalore"
            },
            "cloudinaryImageId": "bc2f7e70b995b4095617b21adcde553b",
            "address": "#42/5 central street, opp bus stand ,shivajinagar,bangalore 560001",
            "locality": "Central Street",
            "areaName": "MG Road",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Arabian",
              "Chinese",
              "Desserts",
              "Mughlai",
              "Seafood",
              "South Indian"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "12K+",
            "sla": {
              "deliveryTime": 50,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "48556",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "48556",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "763076",
            "name": "Boba Bhai - Bubble Tea & Korean Street Food",
            "city": "1",
            "slugs": {
              "restaurant": "boba-bhai-brookfield-kadubeesanahalli",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/b0d03080-7f82-42bc-a2c6-31cc9c0cd1d9_763076.jpg",
            "address": "THE EXECUTIVE CENTRE PRESTIGE\nTECHNOSTAR, Gate 3 DODDANEKUNDI INDUSTRIAL\nAREA, BROOKFIELD, GRAPHITE INDIA ROAD,\nBENGALURU., Mahadevapura, B.B.M.P East,\nKarnataka-560048",
            "locality": "BROOKFIELD",
            "areaName": "Prestige Tecnostar",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Bubble Tea",
              "Burger",
              "Korean",
              "Beverages",
              "Fast Food",
              "Juice and shake"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "1.1K+",
            "sla": {
              "deliveryTime": 64,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 11.1,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "11.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹60",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "763076",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "763076",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1008191",
            "name": "No.1 Burger",
            "city": "1",
            "slugs": {
              "restaurant": "no.1-burger-central-bangalore-central-bangalore-2",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/7/953bc779-b358-47ed-832f-d90e0a3922c9_1008191.jpg",
            "address": "Kalpak Archade, Shop No.4, Corporation No. 46/3, (Old No.19), Church Street, Bangalore ,Shanthinagara,B.B.M.P East,Karnataka-560001\t",
            "locality": "Shanthala Nagar",
            "areaName": "Central Bangalore",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "American",
              "Beverages",
              "Fast Food"
            ],
            "avgRating": 4,
            "feeDetails": {},
            "avgRatingString": "4.0",
            "totalRatingsString": "4",
            "sla": {
              "deliveryTime": 59,
              "minDeliveryTime": 55,
              "maxDeliveryTime": 60,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "55-60 MINS",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "1008191",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "1008191",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1063203",
            "name": "Desi Burger",
            "city": "1",
            "slugs": {
              "restaurant": "desi-burger-btm-btm",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/a2f4c106-3aae-4d4f-a3e0-0267e5b38636_1063203 (1).jpg",
            "address": "Shop No : 2 , Floor :  , 4th cross, kaveri layout, taverkere main road , Desi burger, exit gate, opp. Prestige St. John's wood, next to Valuepoint systems, Kaveri Layout, S.G. Palya, Bengaluru, Karnataka 560029, India",
            "locality": "BTM",
            "areaName": "BTM",
            "costForTwo": "10000",
            "costForTwoMessage": "₹100 FOR TWO",
            "cuisines": [
              "Snacks",
              "Fast Food"
            ],
            "feeDetails": {},
            "avgRatingString": "NEW",
            "sla": {
              "deliveryTime": 61,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 9.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "9.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "1063203",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "1063203",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "699560",
            "name": "Lord house burger",
            "city": "1",
            "slugs": {
              "restaurant": "lord-house-burger-bellandur-sarjapur-bellandur-sarjapur",
              "city": "bangalore"
            },
            "cloudinaryImageId": "fb86f91a59d5134af1b637443418a1e7",
            "address": "833/1, near shell petrol pump, Bellandur, Bengaluru, Karnataka 560037",
            "locality": "Near shell petrol pump",
            "areaName": "Bellandur Sarjapur",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "American",
              "Burgers",
              "Beverages"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "<3",
            "sla": {
              "deliveryTime": 69,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 11.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "11.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "699560",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "699560",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "699327",
            "name": "Captain olive",
            "city": "1",
            "slugs": {
              "restaurant": "captain-olive-bellandur-sarjapur-bellandur-sarjapur",
              "city": "bangalore"
            },
            "cloudinaryImageId": "ecffc1c7867a2db44ed10617681b8c19",
            "address": "3/2, Ground Floor, Gate Sarjapur, Near Aroma Spa, Little Italy Lane, Marathahalli Rd, Ambalipura, Bellandur, Near Quess Corp Office, Bengaluru, Mahadevapura, Karnataka",
            "locality": "Bellandur",
            "areaName": "Bellandur",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "shawarma",
              "Rolls & Wraps",
              "Beverages",
              "Fast Food",
              "Continental"
            ],
            "avgRating": 4.3,
            "feeDetails": {},
            "avgRatingString": "4.3",
            "totalRatingsString": "1.4K+",
            "sla": {
              "deliveryTime": 76,
              "minDeliveryTime": 75,
              "maxDeliveryTime": 80,
              "lastMileTravel": 12.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "75-80 MINS",
              "lastMileTravelString": "12.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹129",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "3.9",
                "ratingCount": "7"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "699327",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "699327"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "387581",
            "name": "Kouzina Kafe - The Food Court",
            "city": "1",
            "slugs": {
              "restaurant": "kouzina-kafe-–-the-food-court-marathahalli-marathahalli",
              "city": "bangalore"
            },
            "cloudinaryImageId": "thb8o4hirgmjf62xu4ls",
            "address": "#265, 4th Floor, 1st Main Road,A Block, ACES Layout, Above Ganesh Bhavan, Near Brookfield Bangalore 560037",
            "locality": "ACES Layout",
            "areaName": "Marathahalli",
            "costForTwo": "15000",
            "costForTwoMessage": "₹150 FOR TWO",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Ice Cream",
              "Beverages",
              "Cakes",
              "Cafe"
            ],
            "avgRating": 3.8,
            "feeDetails": {},
            "avgRatingString": "3.8",
            "totalRatingsString": "120",
            "sla": {
              "deliveryTime": 69,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 10.8,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "10.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "387581",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "387581",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "4739",
            "name": "The Grill House - Steaks & Sizzlers",
            "city": "1",
            "slugs": {
              "restaurant": "the-grill-house-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "dtoebhgnf4lhz8apymnx",
            "address": "8/6, Kensington Point, UlsoorRoad, Bangalore- 560008",
            "locality": "Ulsoor",
            "areaName": "Indiranagar",
            "costForTwo": "110000",
            "costForTwoMessage": "₹1100 FOR TWO",
            "cuisines": [
              "American",
              "Steakhouse",
              "Italian",
              "Mexican",
              "Continental",
              "Mediterranean",
              "Desserts",
              "Grill",
              "Salads",
              "Pastas"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "4.2K+",
            "sla": {
              "deliveryTime": 41,
              "minDeliveryTime": 40,
              "maxDeliveryTime": 45,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "40-45 MINS",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "2.1K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "4739",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "4739",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "663798",
            "name": "Burger In Moon",
            "city": "1",
            "slugs": {
              "restaurant": "burger-in-moon-btm-btm-2",
              "city": "bangalore"
            },
            "cloudinaryImageId": "99a749057b6c62151f75d51f43a58d85",
            "address": "N0.19, M Cross Rd, Tavarekere, New Gurappana Palya, 1st Stage, BTM Layout, BTM Layout , B.B.M.P South, Karnataka - 560029",
            "locality": "1st Stage",
            "areaName": "BTM Layout",
            "costForTwo": "25000",
            "costForTwoMessage": "₹250 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "Beverages",
              "Snacks"
            ],
            "avgRating": 4,
            "feeDetails": {},
            "avgRatingString": "4.0",
            "totalRatingsString": "179",
            "sla": {
              "deliveryTime": 66,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 9.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "9.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "663798",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "663798",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1110552",
            "name": "Nakama Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "nakama-bites-cv-raman-nagar-cv-raman-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/d0ae9d6b-59ac-4b92-b946-21060967459c_1110552.jpg",
            "address": "Shop No : Nakama Bites , Floor : 3 , Gawda Building , 5h Cross Rd Malleshpalya, Kaggadasapura, Bengaluru, Karnataka 560075, India 560075",
            "locality": "CV Raman Nagar",
            "areaName": "CV Raman Nagar",
            "costForTwo": "10000",
            "costForTwoMessage": "₹100 FOR TWO",
            "cuisines": [
              "Continental",
              "Pastas",
              "Burgers"
            ],
            "avgRating": 4.8,
            "feeDetails": {},
            "avgRatingString": "4.8",
            "totalRatingsString": "4",
            "sla": {
              "deliveryTime": 48,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 5.8,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "5.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹150",
              "discountTag": "SAVE BIG",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "1110552",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "1110552"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "144951",
            "name": "Venky's Xprs",
            "city": "1",
            "slugs": {
              "restaurant": "venkys-xprs-test-prod-area",
              "city": "bangalore"
            },
            "cloudinaryImageId": "uleizvckav4pl6w1uhue",
            "address": "VENKY'S XPRS, #604, 4TH CROSS, 2ND BLOCK, HRBR LAYOUT,CMR ROAD KALYANNAGAR, BANGALORE-560043",
            "locality": "HRBR Layout",
            "areaName": "Kalyan Nagar",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Fast Food"
            ],
            "avgRating": 4.4,
            "feeDetails": {},
            "avgRatingString": "4.4",
            "totalRatingsString": "84",
            "sla": {
              "deliveryTime": 53,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 6.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "6.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "144951",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "144951",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "154947",
            "name": "Burger Yard",
            "city": "1",
            "slugs": {
              "restaurant": "burger-yard-test-prod-area",
              "city": "bangalore"
            },
            "cloudinaryImageId": "gf685a8faelsvcnwbefu",
            "address": "Inside Cafe Here and Now Liss Arcade, L-149/A, Second Floor, 5th Main Road, Sector 6, HSR Layout, Bengaluru, Karnataka 560102",
            "locality": "Sector 6",
            "areaName": "HSR Layout",
            "costForTwo": "65000",
            "costForTwoMessage": "₹650 FOR TWO",
            "cuisines": [
              "American",
              "Beverages"
            ],
            "avgRating": 3.8,
            "feeDetails": {},
            "avgRatingString": "3.8",
            "totalRatingsString": "1.2K+",
            "sla": {
              "deliveryTime": 65,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 9.9,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "9.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "1.0",
                "ratingCount": "<3"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "154947",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "154947"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "648065",
            "name": "Hot Burger Company",
            "city": "1",
            "slugs": {
              "restaurant": "hot-burger-company-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "554d09c68c834b3c7cf8ede5dab0e365",
            "address": "207,1st Floor,Gowramma 80 Ft Road Avove Photo Yard ,Subbanna Palya,Kammanahalli , Sarvagna Nagar, B.B.M.P East, , Karnataka, 560084",
            "locality": "Nehru Rd",
            "areaName": "Kammanahalli/Kalyan Nagar",
            "costForTwo": "17500",
            "costForTwoMessage": "₹175 FOR TWO",
            "cuisines": [
              "Burgers",
              "Desserts"
            ],
            "avgRating": 3.8,
            "feeDetails": {},
            "avgRatingString": "3.8",
            "totalRatingsString": "116",
            "sla": {
              "deliveryTime": 40,
              "minDeliveryTime": 40,
              "maxDeliveryTime": 45,
              "lastMileTravel": 5.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "40-45 MINS",
              "lastMileTravelString": "5.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "648065",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "648065"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "481246",
            "name": "Beckham Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "beckham-burgers-hsr-hsr",
              "city": "bangalore"
            },
            "cloudinaryImageId": "by9hsiayc62pnymxp2iq",
            "address": "#36, 3rd floor, 14th Main Rd, Sector 7, HSR Layout, Bengaluru, Karnataka 560102, India",
            "locality": "7th Sector",
            "areaName": "HSR Layout",
            "costForTwo": "25000",
            "costForTwoMessage": "₹250 FOR TWO",
            "cuisines": [
              "Burgers",
              "Snacks"
            ],
            "avgRating": 3.8,
            "feeDetails": {},
            "avgRatingString": "3.8",
            "totalRatingsString": "14",
            "sla": {
              "deliveryTime": 69,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 10.8,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "10.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹20",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "481246",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "481246"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1018159",
            "name": "Sandwiches and Burgers by AoI",
            "city": "1",
            "slugs": {
              "restaurant": "sandwiches-and-burgers-by-aoi-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/29/efeb9de1-3338-477d-b9d9-65da60c76250_1018159.jpg",
            "address": "No 434, Shop 1, Ground Floor, 6th B Main Road, HRBR Layout, Kalyan Nagar, Bangalore ,,Sarvagna Nagar,B.B.M.P East,Karnataka-560043\t",
            "locality": "Kammanahalli/Kalyan Nagar",
            "areaName": "Kammanahalli/Kalyan Nagar",
            "costForTwo": "60000",
            "costForTwoMessage": "₹600 FOR TWO",
            "cuisines": [
              "Snacks",
              "Pizzas",
              "Burgers",
              "Cafe"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 51,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 7.1,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "7.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹199",
              "logoCtx": {
                "text": "BENEFITS"
              },
              "footerText": "5 DEALS LEFT",
              "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "1018159",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "1018159",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "878190",
            "name": "BYOB - Build Your Own Burger",
            "city": "1",
            "slugs": {
              "restaurant": "the-burger-truck-hsr-hsr",
              "city": "bangalore"
            },
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/13/29b42f5c-557e-41cd-a24a-1d5212c395c4_878190 (1).jpg",
            "address": "1st floor, 2576, 13th Cross Rd, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka , BTM Layout, B.B.M.P South, Karnataka - 560102",
            "locality": "PWD Quarters",
            "areaName": "HSR",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Burgers",
              "American",
              "Fast Food"
            ],
            "avgRating": 3.9,
            "feeDetails": {},
            "avgRatingString": "3.9",
            "totalRatingsString": "39",
            "sla": {
              "deliveryTime": 71,
              "minDeliveryTime": 70,
              "maxDeliveryTime": 75,
              "lastMileTravel": 10.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "70-75 MINS",
              "lastMileTravelString": "10.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "878190",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "878190"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "835011",
            "name": "My Favorite Burgers Cafe",
            "city": "1",
            "slugs": {
              "restaurant": "my-favorite-burgers-cafe-jayanagar-jayanagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "1ee43c51aca0582a1e951d722bbae644",
            "address": "1623, Basement, 9th Block, East End Main Road, Jayanagar, Bangalore",
            "locality": "Tilak Nagar",
            "areaName": "Jayanagar",
            "costForTwo": "40000",
            "costForTwoMessage": "₹400 FOR TWO",
            "cuisines": [
              "Indian"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 78,
              "minDeliveryTime": 75,
              "maxDeliveryTime": 80,
              "lastMileTravel": 11.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "75-80 MINS",
              "lastMileTravelString": "11.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "835011",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "835011",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "689887",
            "name": "The Cosmic Burger",
            "city": "1",
            "slugs": {
              "restaurant": "the-cosmic-burger-koramangala-koramangala",
              "city": "bangalore"
            },
            "cloudinaryImageId": "f8be30782925ee059ef09928ad03b297",
            "address": "75/2, Hosur Main Road, Industrial Layout, 5Th Block, Koramangala, Bengaluru, Karnataka 560095, India",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Indian"
            ],
            "avgRating": 3.8,
            "feeDetails": {},
            "avgRatingString": "3.8",
            "totalRatingsString": "224",
            "sla": {
              "deliveryTime": 69,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 8.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "8.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "57"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "689887",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "689887"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "20585",
            "name": "Burgers AF",
            "city": "1",
            "slugs": {
              "restaurant": "sunny-side-up-frazer-town-frazer-town",
              "city": "bangalore"
            },
            "cloudinaryImageId": "gsjt6hlbv2eh1mqytstk",
            "address": "#98/5 Davis Road Cooke Town, Bangalore - 560084",
            "locality": "Cox Town",
            "areaName": "Frazer Town",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Continental"
            ],
            "avgRating": 3.8,
            "feeDetails": {},
            "avgRatingString": "3.8",
            "totalRatingsString": "3.4K+",
            "sla": {
              "deliveryTime": 48,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 5.7,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "5.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "20585",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "20585",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "447101",
            "name": "Punjabi Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "rolling-momos-indirapuram-indirapuram",
              "city": "bangalore"
            },
            "cloudinaryImageId": "y65zjm8hf1obldqsznje",
            "address": "1128,BBMP PIN ID-65-27-1128,5TH CROSS,17TH MAIN,PHASE 1,BTM STAGE 2,WARD NUMBER-171,BTM LAYOUT, BTM Layout, B.B.M.P South, Karnataka-560076",
            "locality": "BTM Layout",
            "areaName": "BTM Layout",
            "costForTwo": "25000",
            "costForTwoMessage": "₹250 FOR TWO",
            "cuisines": [
              "Chinese"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "87",
            "sla": {
              "deliveryTime": 71,
              "minDeliveryTime": 70,
              "maxDeliveryTime": 75,
              "lastMileTravel": 10.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "70-75 MINS",
              "lastMileTravelString": "10.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "447101",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "447101",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "689908",
            "name": "The Burger Store",
            "city": "1",
            "slugs": {
              "restaurant": "the-burger-store-bellandur-sarjapur-bellandur-sarjapur",
              "city": "bangalore"
            },
            "cloudinaryImageId": "5e7ce44e6d8a272a3b96453dc8053c69",
            "address": "400, 75/2, sunrise villas, Bellandur Main Rd, Adarsh Palm Retreat, Bellandur, Bengaluru, Karnataka 560103, India",
            "locality": "Sunrise Villas",
            "areaName": "Bellandur Sarjapur",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "North Indian",
              "Fast Food",
              "Beverages"
            ],
            "avgRating": 3.4,
            "feeDetails": {},
            "avgRatingString": "3.4",
            "totalRatingsString": "25",
            "sla": {
              "deliveryTime": 76,
              "minDeliveryTime": 75,
              "maxDeliveryTime": 80,
              "lastMileTravel": 12.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "75-80 MINS",
              "lastMileTravelString": "12.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "ABOVE ₹1000",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "689908",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "689908",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "531554",
            "name": "Wharf Burgers & Wings",
            "city": "1",
            "slugs": {
              "restaurant": "wharf-burgers-&-wings-bellandur-sarjapur-bellandur-sarjapur",
              "city": "bangalore"
            },
            "cloudinaryImageId": "rctsltmnlrpaysjawte4",
            "address": "26, Opp Shub Enclave, Harulur Road, Ambalipura Village, Varthur Hobli, Off Sarjapur Road, Bangalore- 560102",
            "locality": "Sector-1",
            "areaName": "Bellandur",
            "costForTwo": "100000",
            "costForTwoMessage": "₹1000 FOR TWO",
            "cuisines": [
              "Seafood",
              "Continental",
              "American"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 66,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 11.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "11.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "531554",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "531554",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "358656",
            "name": "Dum Burger",
            "city": "1",
            "slugs": {
              "restaurant": "dum-burger-ramamurthy-nagar-ramamurthy-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "zvgjdeg8q7mf7mlruemz",
            "address": "207,1st Floor,Gowramma 80 Ft Road Avove Photo Yard ,Subbanna Palya,Kammanahalli , Sarvagna Nagar, B.B.M.P East, , Karnataka, 560084",
            "locality": "PNS Layout",
            "areaName": "Kammanahalli/Kalyan Nagar",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Burgers",
              "Desserts"
            ],
            "avgRating": 3.7,
            "feeDetails": {},
            "avgRatingString": "3.7",
            "totalRatingsString": "168",
            "sla": {
              "deliveryTime": 47,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 5.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "5.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "358656",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "358656"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "791833",
            "name": "Mc Burger House",
            "city": "1",
            "slugs": {
              "restaurant": "mc-burger-house-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "5588b8b09ad74167309a2745025c72f9",
            "address": "Akkayamma Layout, No 1, 2nd, Gullappa Rd, PNS Layout, Subbayianiah Palyam, Banaswadi, Bengaluru, Karnataka 560043, India",
            "locality": "Gullappa Rd",
            "areaName": "Kammanahalli/Kalyan Nagar",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "Snacks",
              "Beverages"
            ],
            "avgRating": 3.6,
            "feeDetails": {},
            "avgRatingString": "3.6",
            "totalRatingsString": "18",
            "sla": {
              "deliveryTime": 54,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 5.9,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "5.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_4",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "791833",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "791833",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "857333",
            "name": "Burger Pav",
            "city": "1",
            "slugs": {
              "restaurant": "burger-pav-r.t.-nagar-r.t.-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "8ad90aef91ca7fd493e2f2d61bb4de2a",
            "address": "Shop No : Shop No B-373 , Floor : Basement , Mallikarjuna Complex , Lassi day cafe and burgerpav, opp. to RT nagar, AK Colony, RT Nagar, Bengaluru, Karnataka, India",
            "locality": "Mallikarjuna Complex",
            "areaName": "Sanjay Nagar, New BEL Road",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Maharashtrian",
              "Snacks",
              "Fast Food",
              "Pizzas",
              "Momos"
            ],
            "avgRating": 4.6,
            "feeDetails": {},
            "avgRatingString": "4.6",
            "totalRatingsString": "3",
            "sla": {
              "deliveryTime": 58,
              "minDeliveryTime": 55,
              "maxDeliveryTime": 60,
              "lastMileTravel": 10.1,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "55-60 MINS",
              "lastMileTravelString": "10.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "sld": true,
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "857333",
            "impressionObjectName": "impression-restaurant-sld",
            "clickObjectName": "click-restaurant-sld"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "857333",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "true",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "789321",
            "name": "Round Cute Burgers",
            "city": "1",
            "slugs": {
              "restaurant": "round-cute-burgers-central-bangalore-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "1ee43c51aca0582a1e951d722bbae644",
            "address": "11/1, 3rd Cross Rd, Nandi Durga Road Extension, Jayamahal, Bengaluru, Karnataka 560046, India",
            "locality": "Nandi Durga Road Extension",
            "areaName": "R.T. Nagar",
            "costForTwo": "26000",
            "costForTwoMessage": "₹260 FOR TWO",
            "cuisines": [
              "Burgers",
              "Fast Food",
              "Snacks",
              "Pastas",
              "Beverages"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 47,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 7.2,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "7.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "5.0",
                "ratingCount": "25"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "789321",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "789321",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "327751",
            "name": "Just Burger Off",
            "city": "1",
            "slugs": {
              "restaurant": "just-burger-off-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar",
              "city": "bangalore"
            },
            "cloudinaryImageId": "sk3yahbaazgjytdtaoka",
            "address": "1C - 304, Nehru Road, 3rd Block, HRBR Layout, St. Thomas Town Post, Bangalore - 560084 ",
            "locality": "3rd Block HRBR Layout",
            "areaName": "Kalyan Nagar",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "North Indian"
            ],
            "avgRating": 4.1,
            "feeDetails": {},
            "avgRatingString": "4.1",
            "totalRatingsString": "89",
            "sla": {
              "deliveryTime": 53,
              "minDeliveryTime": 50,
              "maxDeliveryTime": 55,
              "lastMileTravel": 7.8,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "50-55 MINS",
              "lastMileTravelString": "7.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "327751",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "327751",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "673504",
            "name": "Super - Mario's Burger House",
            "city": "1",
            "slugs": {
              "restaurant": "super---mario's-burger-house-btm-btm",
              "city": "bangalore"
            },
            "cloudinaryImageId": "4b449e45d0e708e1ae87a7825abe7b72",
            "address": "WJG5+GPW, Tavarekere Main Rd, DRC Post, Brindavan Nagar, S.G. Palya, Bengaluru, Karnataka 560029, India",
            "locality": "SG Palya",
            "areaName": "BTM Layout",
            "costForTwo": "25000",
            "costForTwoMessage": "₹250 FOR TWO",
            "cuisines": [
              "Burgers"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 63,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 9.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "9.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "673504",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "673504",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "760691",
            "name": "Big Bite Burger",
            "city": "1",
            "slugs": {
              "restaurant": "big-bite-burger-koramangala-koramangala",
              "city": "bangalore"
            },
            "cloudinaryImageId": "7babe947a69c5988924b27b26ae09c3c",
            "address": "Shop no 1, Ground Floor, Elite Building, 71-72, Jyoti Nivas College Rd, 5th Block, Koramangala, Bengaluru, Karnataka 560095, India",
            "locality": "Jyoti Nivas College Rd",
            "areaName": "Koramangala",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 66,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 8.4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "8.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "3.5",
                "ratingCount": "<3"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "760691",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "760691",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "345147",
            "name": "Burger and Beyond",
            "city": "1",
            "slugs": {
              "restaurant": "burger-and-beyond-koramangala-koramangala",
              "city": "bangalore"
            },
            "cloudinaryImageId": "tciimszujjmx89dt0tky",
            "address": "PLAN B, K K RAMAKRUPA, PLAN-B-NO.2, GROUND FLOOR, INDUSTRIAL LAYOUT, KORAMANGALA, BANGALORE BTM Layout B.B.M.P South Karnataka 560095",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "25000",
            "costForTwoMessage": "₹250 FOR TWO",
            "cuisines": [
              "American",
              "Fast Food",
              "Beverages"
            ],
            "avgRating": 4.5,
            "feeDetails": {},
            "avgRatingString": "4.5",
            "totalRatingsString": "110",
            "sla": {
              "deliveryTime": 69,
              "minDeliveryTime": 65,
              "maxDeliveryTime": 70,
              "lastMileTravel": 8,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "65-70 MINS",
              "lastMileTravelString": "8.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {},
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "345147",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "345147",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "669227",
            "name": "Bluto'S Burger Chain",
            "city": "1",
            "slugs": {
              "restaurant": "bluto's-burger-chain-btm-btm",
              "city": "bangalore"
            },
            "cloudinaryImageId": "5c0a9238559d41786a81825e632e28f6",
            "address": "WJG5+GPW, Tavarekere Main Rd, DRC Post, Brindavan Nagar, S.G. Palya, Bengaluru, Karnataka 560029, India",
            "locality": "SG Palya",
            "areaName": "BTM Layout",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Burgers"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 63,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 9.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "9.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "669227",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "669227",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "673490",
            "name": "Little Jeannie'S Waffle Burger",
            "city": "1",
            "slugs": {
              "restaurant": "little-jeannie's-waffle-burger-btm-btm",
              "city": "bangalore"
            },
            "cloudinaryImageId": "bbf5f47b875f2b2b464145aced78fa68",
            "address": "WJG5+GPW, Tavarekere Main Rd, DRC Post, Brindavan Nagar, S.G. Palya, Bengaluru, Karnataka 560029, India",
            "locality": "SG Palya",
            "areaName": "BTM Layout",
            "costForTwo": "35000",
            "costForTwoMessage": "₹350 FOR TWO",
            "cuisines": [
              "Waffle"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 63,
              "minDeliveryTime": 60,
              "maxDeliveryTime": 65,
              "lastMileTravel": 9.5,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "60-65 MINS",
              "lastMileTravelString": "9.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "673490",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false",
              "restaurant_id": "673490",
              "query": "burgers"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "811171",
            "name": "Le Burger",
            "city": "1",
            "slugs": {
              "restaurant": "le-burger-mahadevpura-mahadevpura",
              "city": "bangalore"
            },
            "cloudinaryImageId": "1ee43c51aca0582a1e951d722bbae644",
            "address": "No 90/2 whitefield main road  B.Narayanapura Mahadevapura , K R  Puram, B.B.M.P East, Karnataka-560016",
            "locality": "Narayanapura",
            "areaName": "Mahadevpura",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Burgers",
              "Snacks"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 47,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 6.3,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "6.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "811171",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "811171",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "796888",
            "name": "Burger Baar",
            "city": "1",
            "slugs": {
              "restaurant": "burger-baar-central-bangalore-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "91cc3ef8d30bdc8ead1d16bd5449ef42",
            "address": "Mehmood Manzil, Pulikeshi Nagar, Bengaluru, Karnataka 560005, India",
            "locality": "Central Bangalore",
            "areaName": "Central Bangalore",
            "costForTwo": "20000",
            "costForTwoMessage": "₹200 FOR TWO",
            "cuisines": [
              "Indian"
            ],
            "feeDetails": {},
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 49,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 50,
              "lastMileTravel": 5.6,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "45-50 MINS",
              "lastMileTravelString": "5.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "796888",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "restaurant_id": "796888",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c",
              "qrEnabled": "false"
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "555928",
            "name": "Burger Bing",
            "city": "1",
            "slugs": {
              "restaurant": "burger-bing-indiranagar-indiranagar-2",
              "city": "bangalore"
            },
            "cloudinaryImageId": "nmlxlt18wopb9x0tgq7e",
            "address": "NO 152, 4TH CROSS, BEHIND CANARA BANK, KONENA AGRAHARA, OLD AIRPORT ROAD, MURGESHPALYA, Anekal, Bangalore Urban, , Karnataka, 560017",
            "locality": "Murgesh Pallya",
            "areaName": "Indiranagar",
            "costForTwo": "30000",
            "costForTwoMessage": "₹300 FOR TWO",
            "cuisines": [
              "Fast Food",
              "Pizzas",
              "Beverages"
            ],
            "avgRating": 2.5,
            "feeDetails": {},
            "avgRatingString": "2.5",
            "totalRatingsString": "28",
            "sla": {
              "deliveryTime": 45,
              "minDeliveryTime": 40,
              "maxDeliveryTime": 45,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "40-45 MINS",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {}
            },
            "badges": {},
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "ratingSlab": "RATING_SLAB_3",
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {},
              "presentation": {}
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "featuredSectionInfo": {
              "sectionTitle": "More"
            }
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"undefined\",\"grid\":\"372e0caf-15db-4489-bdfc-c1c716d64663\",\"queryUniqueId\":\"b2704926-0682-537a-ee07-d71ed71022a2\",\"query\":\"burgers\"}",
            "objectValue": "555928",
            "impressionObjectName": "impression-restaurant",
            "clickObjectName": "click-restaurant"
          },
          "ctaWithParams": {
            "link": "swiggy://menu",
            "type": "DEEPLINK",
            "params": {
              "qrEnabled": "false",
              "restaurant_id": "555928",
              "query": "burgers",
              "sourceSessionId": "lgfc86e4-d6a5-4115-b096-56bdc813b721",
              "source": "SEARCH",
              "isSld": "false",
              "sourceRequestId": "68626d8f9790fcbfc7924edea4e7750c"
            }
          }
        }
      }
    }
  ]
}
const restrauArr = restrauObject.cards.map(obj => obj.card).map(obj => obj.card);

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar-container">
                <input className="search-bar" type="text"/>
                <button className="search-button">Search</button>
            </div>
            <div className="restau-cards-container">
                <RestauCards 
                    RestauName={restrauArr[0].info.name} //restrauArr.card.card.info.name
                    cuisine={restrauArr[0].info.cuisines.join(', ')} 
                    rating={restrauArr[0].info.avgRating}
                    deliveryIn={restrauArr[0].info.sla.slaString}
                    costForTwo={restrauArr[0].info.costForTwo / 100}
                    imageLogo={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${restrauArr[0].info.cloudinaryImageId}`}
                />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));                                  // it is also element/object
console.log('root : ', root); 
root.render(<AppLayout />);