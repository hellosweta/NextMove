const appToken = 'MEHWMmCJr8sM2vOUe2513qFHR';
const baseUrl = 'https://data.sfgov.org/resource/ednt-jx6u.json';
const radiusInMeters = radiusInMiles => radiusInMiles * 1609.34;

export const fetchAllRestaurants = () => (
  $.ajax({
    method: 'GET',
    url: `${baseUrl}?$select=location&$where=${inBox}`,
    headers: {
      'X-App-Token': appToken
    }
  })
);

const norwest = "37.80971,-122.47791";
const soueast = "37.74187,-122.39208";
const inBox = `within_box(location,${norwest},${soueast})`;
