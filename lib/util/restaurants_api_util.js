const appToken = 'MEHWMmCJr8sM2vOUe2513qFHR';
const baseUrl = 'https://data.sfgov.org/resource/ednt-jx6u.json';
const radiusInMeters = radiusInMiles => radiusInMiles * 1609.34;

let allRestaurants = [];

const storeResults = restaurants => (
  allRestaurants = allRestaurants.concat(restaurants)
);

export const fetchAllRestaurants = () => {
  for (let i = 0; i < 8; i++) {
    $.ajax({
      method: 'GET',
      url: `${baseUrl}?$select=location&$where=${restaurant} AND ${inBox}`,
      headers: {
        'X-App-Token': appToken
      },
      success: storeResults,
      error: e => console.log(e)
    });
  }

  return allRestaurants;
};

const norwest = "37.807155, -122.521630";
const soueast = "37.723597, -122.351775";
const restaurant = `naic_code_description='Food Services'`;
const inBox = `within_box(location,${norwest},${soueast})`;
