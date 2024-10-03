import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
   const  {resData} = props;

   const {name, cuisines, avgRating, sla} = resData?.info ;
    return (
        <div className="res-card">
            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId } alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
}

const restList = [
    {
      "info": {
        "id": "150586",
        "name": "Accord International",
        "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
        "locality": "Parasia Road",
        "areaName": "Vishnu Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Continental",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "26828",
        "avgRatingString": "4.3",
        "totalRatingsString": "570",
        "sla": {
          "deliveryTime": 64,
          "lastMileTravel": 14.3,
          "serviceability": "SERVICEABLE",
          "slaString": "60-65 mins",
          "lastMileTravelString": "14.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-02 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-87b99bf1-4878-4ebe-a1a7-3f17a2985d02"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/accord-international-parasia-road-vishnu-nagar-rest150586",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "615927",
        "name": "Roof 5",
        "cloudinaryImageId": "glepanv4xjfnhsbieam1",
        "locality": "Adarsh Nagar Colony",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 4.1,
        "parentId": "171348",
        "avgRatingString": "4.1",
        "totalRatingsString": "117",
        "sla": {
          "deliveryTime": 61,
          "lastMileTravel": 13.9,
          "serviceability": "SERVICEABLE",
          "slaString": "60-65 mins",
          "lastMileTravelString": "13.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-02 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-87b99bf1-4878-4ebe-a1a7-3f17a2985d02"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/roof-5-adarsh-nagar-colony-chhindwara-locality-rest615927",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "196341",
        "name": "Rangla Panjab",
        "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
        "locality": "Shankaracharya Nagar",
        "areaName": "Prasia Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "166894",
        "avgRatingString": "4.2",
        "totalRatingsString": "391",
        "sla": {
          "deliveryTime": 56,
          "lastMileTravel": 13.6,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "13.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-02 23:40:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹699",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-87b99bf1-4878-4ebe-a1a7-3f17a2985d02"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/rangla-panjab-shankaracharya-nagar-prasia-road-rest196341",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "898041",
        "name": "Thikana",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
        "locality": "RANGLA PUNJAB PARASIA ROAD",
        "areaName": " ADARSH NAGAR CHHINDWARA",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 3.3,
        "parentId": "215738",
        "avgRatingString": "3.3",
        "totalRatingsString": "4",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 13.6,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "13.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-02 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-87b99bf1-4878-4ebe-a1a7-3f17a2985d02"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/thikana-rangla-punjab-parasia-road-adarsh-nagar-chhindwara-rest898041",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "625927",
        "name": "Kathi Junction",
        "cloudinaryImageId": "nigqvxgzvyxtfjuqasgg",
        "locality": "Bunglow Madhuvan Colony",
        "areaName": "Prasia Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "rolls",
          "Burgers",
          "Pizzas",
          "Fast Food"
        ],
        "avgRating": 3.9,
        "parentId": "1935",
        "avgRatingString": "3.9",
        "totalRatingsString": "272",
        "sla": {
          "deliveryTime": 57,
          "lastMileTravel": 13.5,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "13.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-02 23:15:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-87b99bf1-4878-4ebe-a1a7-3f17a2985d02"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "898044",
        "name": "Thikana Special",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/6adf18b9-0a2e-45ad-b587-3f714762f7bd_898044.jpg",
        "locality": "Punjab ",
        "areaName": "Chhindwara City",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Biryani",
          "Sweets",
          "Salads"
        ],
        "avgRating": 4.6,
        "parentId": "522552",
        "avgRatingString": "4.6",
        "totalRatingsString": "6",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 11.3,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-02 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-87b99bf1-4878-4ebe-a1a7-3f17a2985d02"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/thikana-special-punjab-chhindwara-city-rest898044",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "509851",
        "name": "Magic Momo",
        "cloudinaryImageId": "dh0qsuqritnmbncwrni3",
        "locality": "Parasia Road",
        "areaName": "Prasia Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Momos",
          "Chinese"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "129345",
        "avgRatingString": "4.1",
        "totalRatingsString": "36",
        "sla": {
          "deliveryTime": 60,
          "lastMileTravel": 12.3,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "12.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-87b99bf1-4878-4ebe-a1a7-3f17a2985d02"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/magic-momo-parasia-road-prasia-road-rest509851",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "870899",
        "name": "Paras Mishthan",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
        "locality": "Nagarpalika Complex",
        "areaName": "Chhindwara City",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Beverages",
          "Sweets",
          "Snacks"
        ],
        "avgRating": 3.9,
        "veg": true,
        "parentId": "510613",
        "avgRatingString": "3.9",
        "totalRatingsString": "21",
        "sla": {
          "deliveryTime": 58,
          "lastMileTravel": 11.2,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-87b99bf1-4878-4ebe-a1a7-3f17a2985d02"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/paras-mishthan-nagarpalika-complex-chhindwara-city-rest870899",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                { 
                  restList.map((restaurant) => <RestaurantCard key={restaurant.id} resData= {restaurant}/>)
                }   
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);