// const secretToken = 'VpVpDc9FAuiJwpdJ4s3uWzQsohebfEDGEWmK';
// const auth = 'Basic ZGFuaWVsLmouZmxldGNoZXIyQGdtYWlsLmNvbTpOZXh0TW92ZS0yMDE3';
const appToken = 'MEHWMmCJr8sM2vOUe2513qFHR';
const baseUrl = 'https://data.sfgov.org/resource/9v2m-8wqu.json';
const radiusInMeters = radiusInMiles => radiusInMiles * 1609.34;

export const fetchSomeCrimes = (lat, lon, radiusInMiles) => (
  $.ajax({
    method: 'GET',
    url: `${baseUrl}?$where=within_circle(location,${lat},${lon},${radiusInMeters(radiusInMiles)})`,
    headers: {
      'X-App-Token': appToken
    }
  })
);

const norwest = "37.80971,-122.47791";
const soueast = "37.74187,-122.39208";

export const fetchAllCrimes = () => (
  $.ajax({
    method: 'GET',
    url: `${baseUrl}?$where=within_box(location,${norwest},${soueast})`,
    headers: {
      'X-App-Token': appToken
    }
  })
);
