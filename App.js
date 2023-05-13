import React from "react";
import ReactDOM from "react-dom/client";




//All Resturant in 462026 Bhopal::
const resList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "508469",
        "name": "KFC",
        "uuid": "75e189d2-8bce-45ba-a2da-cbfcb6f97520",
        "city": "55",
        "area": "Hoshangabad Road",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "kfc-ashima-mall-mp-nagar",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "KFC Ashima Mall  (Sapphire foods India Ltd),Shop/Unit No. 2 E2 & 2E, Ground floor, Hoshangabad Road, Danish Nagar, Bhopal (M.P) 462 026",
        "locality": "Ashima Mall",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 on select items | Use code SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 on select items | Use code SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6757729~p=1~eid=00000188-0e92-5b2e-4722-a221006e0129",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "508469",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "121782",
        "name": "Pizza Hut",
        "uuid": "95c91787-6d79-452c-b86a-baa803370495",
        "city": "55",
        "area": "Hoshangabad Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "cuisines": [
          "Continental",
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 1.7000000476837158,
        "slugs": {
          "restaurant": "pizza-hut-fcd-hoshangabad-road-kolar-road",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "FCD Hoshangabad Road Address, Plot No 06,Sector-C, Vidhyanagar,Hoshangabad Road,Opposite Baghsavenia thana,Bhopal Pin code 462026",
        "locality": "Vidhya Nagar",
        "parentId": 721,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "121782",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 1.7000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "96842",
        "name": "Vrindavan Dhaba",
        "uuid": "6e2ccd72-a87c-45f7-bfb8-9c2424168ad9",
        "city": "55",
        "area": "Hoshangabad Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "gybjnl9fhbust5ofngfj",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Tandoor",
          "Indian",
          "Beverages",
          "Sweets",
          "Chinese",
          "Salads"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "vrindavan-dhaba-gulmohar-colony-kolar-road",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "Hoshangabad Road, Near Aashima Mall, Gulmohar Colony, Bhopal",
        "locality": "Gulmohar Colony",
        "parentId": 224566,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use JUMBO",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹100 on orders above ₹350| Use code JUMBO",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use JUMBO",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹100 on orders above ₹350| Use code JUMBO",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "96842",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "92816",
        "name": "Idli & More",
        "uuid": "2f297f8a-7cf5-43f1-8883-8a0c284cc17c",
        "city": "55",
        "area": "MP NAGAR",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "yti6qdbmzawis39mjfni",
        "cuisines": [
          "South Indian",
          "Chinese",
          "Italian",
          "Beverages",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 2.799999952316284,
        "slugs": {
          "restaurant": "idli-and-more-mp-nagar-mp-nagar",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "E3/15 Arera Colony Near habib ganj crossing",
        "locality": "Arera Colony",
        "parentId": 371274,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6565770~p=4~eid=00000188-0e92-5b2e-4722-a223006e0466",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "92816",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 2.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "393311",
        "name": "GURU FAST FOOD CAFE & RESTAURANT",
        "uuid": "8f41c7ed-363d-4784-957f-23bac9d6196f",
        "city": "55",
        "area": "Habib Ganj",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "1b6cf667863f81ce3a987ad8843ffca2",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Thalis",
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "guru-fast-food-cafe-&-restaurant-kolar-road-kolar-road",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "FLAT NO. 1, MIG BLOCK-J, SHIVANI COMPLEX, VIDHYAVIHAR, HOSHANGABAD ROAD, Bhopal, Bhopal, Bhopal, Madhya Pradesh - 462026",
        "locality": "Vidhyavihar",
        "parentId": 246488,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "393311",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "235518",
        "name": "Anjani Veg Bhojnalay",
        "uuid": "f0514d09-c1a4-4b93-8c25-9328e343070f",
        "city": "55",
        "area": "Bagmugaliya",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "fyjngb7vkxf7zsl5aizn",
        "cuisines": [
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 12000,
        "costForTwoString": "₹120 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "anjani-veg-bhojnalay-hoshangabad-road-hoshangabad-road",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "h no d-1/122 danish nagar hb road bhopal",
        "locality": "Danish Nagar",
        "parentId": 33612,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT150 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹150 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT150 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "235518",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "235820",
        "name": "Biryani By Kilo",
        "uuid": "9d7ff8f5-66bc-4f9e-8071-aff5abc6335c",
        "city": "55",
        "area": "Maharana Pratap Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "qjlxj9scdfjn6jlytt1x",
        "cuisines": [
          "Biryani",
          "Hyderabadi",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 70000,
        "costForTwoString": "₹700 FOR TWO",
        "deliveryTime": 53,
        "minDeliveryTime": 53,
        "maxDeliveryTime": 53,
        "slaString": "53 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "biryani-by-kilo-mp-nagar-mp-nagar",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "Ground Floor G2 & G3, Plot No. R44, Kishan Arcade Zone 1, MP Nagar, Bhopal-462011, Madhya Pradesh, India",
        "locality": "Kishan Arcade",
        "parentId": 130,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off | Use code PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off | Use code PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6727184~p=7~eid=00000188-0e92-5b2e-4722-a225006e072c",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "235820",
          "deliveryTime": 53,
          "minDeliveryTime": 53,
          "maxDeliveryTime": 53,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "78168",
        "name": "Sagar Gaire Fast Food - 10 Number",
        "uuid": "8b5d1db5-9210-4650-bdfd-8f59eb76a20e",
        "city": "55",
        "area": "Bhopal",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "pf01eqvzjcyjbzlrfmwu",
        "cuisines": [
          "Fast Food",
          "North Indian",
          "South Indian",
          "Pastas",
          "Pizzas",
          "Snacks",
          "Biryani",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "sagar-gaire-fast-food-arera-colony-mp-nagar",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "10, Number Market, Arera Colony, Bhopal",
        "locality": "",
        "parentId": 7049,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "78168",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "84400",
        "name": "Burger King",
        "uuid": "4ce3f2ac-eb92-4cb4-8929-38a897eec8c6",
        "city": "55",
        "area": "Maharana Pratap Nagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 56,
        "minDeliveryTime": 56,
        "maxDeliveryTime": 56,
        "slaString": "56 MINS",
        "lastMileTravel": 5.5,
        "slugs": {
          "restaurant": "burger-king-db-city-mall-mp-nagar",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "FS 11 & 12 FOOD COURT, THIRD FLOOR DB CITY MALL,OPP. M.P. NAGAR ,ZONE-1 ARERA HILLS,BHOPAL (M.P.) PIN CODE-462011",
        "locality": "DB City Mall",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6772502~p=25~eid=00000188-0e92-5b2e-4722-a22d006e1919",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "84400",
          "deliveryTime": 56,
          "minDeliveryTime": 56,
          "maxDeliveryTime": 56,
          "lastMileTravel": 5.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "525064",
        "name": "Hong Kong Chinese Restaurant",
        "uuid": "c72c7155-d19a-4af4-a730-1f4f317b4b21",
        "city": "55",
        "area": "Hoshangabad Road",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "zyyl5z3pfr1qidn3hz82",
        "cuisines": [
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
          "restaurant": "hong-kong-chinese-restaurant-kolar-road-kolar-road",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "B-22 VIDHYA NAGAR HOSHANGABAD ROAD  BHOPAL, Bhopal, Bhopal, Madhya  Pradesh-462026",
        "locality": "Vidhya Nagar",
        "parentId": 96920,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "525064",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 1.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "518845",
        "name": "Falahari Junction",
        "uuid": "f67f164b-acf8-4bbf-b1a7-5bf9dba09faf",
        "city": "55",
        "area": "MP Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "hd7srb1ntzaws5silgal",
        "cuisines": [
          "Indian",
          "Thalis",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 2.200000047683716,
        "slugs": {
          "restaurant": "falhari-junction-mp-nagar-mp-nagar",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "MIG 16 2A SAKET NAGAR, Huzur, Huzur, Bhopal, Madhya Pradesh - 462024",
        "locality": "Saket Nagar",
        "parentId": 309795,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "518845",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 2.200000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "507165",
        "name": "Gaagar Sweets MP Nagar",
        "uuid": "f2349668-13c2-4422-8c62-126aa8cb2489",
        "city": "55",
        "area": "MP Nagar",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "rwp6xnar3wppneq5eedy",
        "cuisines": [
          "Sweets",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 4.900000095367432,
        "slugs": {
          "restaurant": "punjab-dairy-centre-mp-nagar-mp-nagar",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "SHOP NO 11 & 12, JYOTI CINEMA COMPLEX, M P NAGAR ZONE -1 ,BHOPAL, Bhopal, Bhopal",
        "locality": "Ram Gopal Maheshwari Marg",
        "parentId": 336744,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6753699~p=13~eid=00000188-0e92-5b2e-4722-a228006e0d40",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.9 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "507165",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "lastMileTravel": 4.900000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.6",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "100009",
        "name": "Sharma & Vishnu Fast Food - Hoshangabad Road",
        "uuid": "45a54eb2-4f91-4f6f-9c1a-47253f61f5d6",
        "city": "55",
        "area": "Hoshangabad Road",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "em0inpp54ilvpeu29yab",
        "cuisines": [
          "Chinese",
          "North Indian",
          "Snacks",
          "South Indian",
          "Fast Food",
          "Pizzas",
          "Pastas",
          "Thalis"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "sharma-vishnu-chinese-hoshangabad-road-kolar-road",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "Shop 6, 7, 9 A-block, Surendra Land Mark, Hoshangabad Road, Bhopal",
        "locality": "A Block",
        "parentId": 182026,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "100009",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "633208",
        "name": "Indian Pizza Corner\t",
        "uuid": "93e799cd-b2c4-4367-8356-b7b0914d1df6",
        "city": "55",
        "area": "Hoshangabad Road",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "kqc9zyrpu5p9ysg5a0mg",
        "cuisines": [
          "Pizzas",
          "Fast Food",
          "Burgers"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "indian-pizza-corner-hoshangabad-road-hoshangabad-road",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "SURINDER PALACE , IN FRONT OF BARKATULLAH UNIVERSITY, HOSHANGABAD ROAD BHOPAL.",
        "locality": "Goharganj",
        "parentId": 106631,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "633208",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "348082",
        "name": "Starbucks Coffee",
        "uuid": "3e371201-4892-4eef-8bd9-8683651a813e",
        "city": "55",
        "area": "Arera Colony",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "f9ac2c765637d42a9802cf703ced07d8",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "starbucks-coffee-arera-colony-mp-nagar",
          "city": "bhopal"
        },
        "cityState": "55",
        "address": "Krishna Emporio, E-4/32, E-4 Arera Colony, Bhopal, Madhya Pradesh 462016",
        "locality": "Krishna Emporio",
        "parentId": 195515,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT125 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6772416~p=16~eid=00000188-0e92-5b2e-4722-a229006e1073",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "348082",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    }
];




//Heading Component::
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



//Card Component::
const ResturantComponent = (props) => {
  const { resData } = props;

  const {name, cloudinaryImageId, cuisines, costForTwo, deliveryTime} = resData?.data;

  // console.log(props);
  return (
    <div className="res-card">
      <h3>{name}</h3>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt=""
        className="res-logo"
      />
      <h4>{cuisines.join(", ")}</h4>
      <h4>Price for Two: Rs {costForTwo / 100} </h4>
      <h4>Delivery Time: {deliveryTime} MINS</h4>
    </div>
  );
};




//Body::
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        {
            resList.map(restaurant => <ResturantComponent resData={restaurant}/>)
        }
      </div>
    </div>
  );
};






const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
