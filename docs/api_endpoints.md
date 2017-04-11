# API Endpoints

## [Crime](https://github.com/contra/spotcrime)

+ allCrime: SpotCrime.
+ crimeDetail: SpotCrime.

## Restaurants

+ allRestaurants: [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3/business_search).
	+ `GET /businesses/search`
	+ Takes any of the following parameters (and more): term, latitude, longitude, radius
	+ The JSON response includes: coordinates, rating, price, id
+ restaurantDetail: [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3/business_search).

## Transit

+ allTransit: Bart and SFMTA’s GTFS formatted API documentation.
+ transitDetail: Google Places, type: transit_station.
