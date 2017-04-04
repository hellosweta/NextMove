// const secretToken = 'VpVpDc9FAuiJwpdJ4s3uWzQsohebfEDGEWmK';
// const auth = 'Basic ZGFuaWVsLmouZmxldGNoZXIyQGdtYWlsLmNvbTpOZXh0TW92ZS0yMDE3';
const appToken = 'MEHWMmCJr8sM2vOUe2513qFHR';
const baseUrl = 'https://data.sfgov.org/resource/9v2m-8wqu.json';
const radiusInMeters = radiusInMiles => radiusInMiles * 1609.34;

export const fetchFilteredCrimes = (lat, lon, radiusInMiles) => (
  $.ajax({
    method: 'GET',
    url: `${baseUrl}?$where=`
          + `within_circle(location,${lat},${lon},${radiusInMeters(radiusInMiles)})`
          + `&category=${crimes()}`,
    headers: {
      'X-App-Token': appToken
    }
  })
);

// https://data.sfgov.org/resource/9v2m-8wqu.json?$where=within_box(location,37.80971,-122.47791,37.74187,-122.39208)&category=ARSON&category=ASSAULT

const norwest = "37.80971,-122.47791";
const soueast = "37.74187,-122.39208";

export const fetchAllCrimes = () => (
  $.ajax({
    method: 'GET',
    url: `${baseUrl}?$where=`
          + `within_box(location,${norwest},${soueast})`
          + `&category=${crimes()}`,
    headers: {
      'X-App-Token': appToken
    }
  })
);


const crimes = () => violentCrime.join(" OR category=");

// Crimes we care about -- API requires them to be inside single quotes
const violentCrime = [
  "'ARSON'",
  "'ASSAULT'",
  "'BURGLARY'",
  "'DISORDERLY CONDUCT'",
  "'DRIVING UNDER THE INFLUENCE'",
  "'DRUG/NARCOTIC'",
  "'DRUNKENNESS'",
  "'KIDNAPPING'",
  "'LARCENY/THEFT'",
  "'MISSING PERSON'",
  "'PORNOGRAPHY/OBSCENE'",
  "'PROSTITUTION'",
  "'ROBBERY'",
  "'SEX OFFENSES, FORCIBLE'",
  "'SEX OFFENSES, NON FORCIBLE'",
  "'STOLEN PROPERTY'",
  "'SUICIDE'",
  "'TRESPASS'",
  "'VANDALISM'",
  "'VEHICLE THEFT'",
  "'WEAPON LAWS'"
];
