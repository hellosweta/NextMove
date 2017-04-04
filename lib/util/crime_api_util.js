// const secretToken = 'VpVpDc9FAuiJwpdJ4s3uWzQsohebfEDGEWmK';
// const auth = 'Basic ZGFuaWVsLmouZmxldGNoZXIyQGdtYWlsLmNvbTpOZXh0TW92ZS0yMDE3';
const appToken = 'MEHWMmCJr8sM2vOUe2513qFHR';
const baseUrl = 'https://data.sfgov.org/resource/9v2m-8wqu.json';
const radiusInMeters = radiusInMiles => radiusInMiles * 1609.34;

// export const fetchFilteredCrimes = (lat, lon, radiusInMiles) => (
//   $.ajax({
//     method: 'GET',
//     url: `${baseUrl}?$query=SELECT category WHERE `
//           + `within_circle(location,${lat},${lon},${radiusInMeters(radiusInMiles)}) `
//           + `|> SELECT category WHERE `
//           + `category=${crimes()}`,
//           // + ` localized`,
//     headers: {
//       'X-App-Token': appToken
//     }
//   })
// );

export const fetchFilteredCrimes = (lat, lon, radiusInMiles) => (
  $.ajax({
    method: 'GET',
    url: `${baseUrl}?$where=${filterQuery(lat, lon, radiusInMiles)}`,
          // + ` localized`,
    headers: {
      'X-App-Token': appToken
    }
  })
);

// https://data.sfgov.org/resource/9v2m-8wqu.json?$where=within_box(location,37.80971,-122.47791,37.74187,-122.39208)&category=ARSON&category=ASSAULT

// export const fetchAllCrimes = () => (
//   $.ajax({
//     method: 'GET',
//     url: `${baseUrl}?$where=`
//           + `category=${crimes()}`
//           + `AND within_box(location,${norwest},${soueast})`,
//     headers: {
//       'X-App-Token': appToken
//     }
//   })
// );

export const fetchAllCrimes = () => (
  $.ajax({
    method: 'GET',
    url: `${baseUrl}?$where=${allQuery()}`,
    headers: {
      'X-App-Token': appToken
    }
  })
);


const filterQuery = (lat, lon, radiusInMiles) => {
  const inRadius = `within_circle(location,${lat},${lon},${radiusInMeters(radiusInMiles)})`;
  const segments = violentCrime.map(category => `${inRadius} AND category=${category}`);
  return segments.join(` OR `);
};


const allQuery = () => {
  const norwest = "37.80971,-122.47791";
  const soueast = "37.74187,-122.39208";
  const inBox = `within_box(location,${norwest},${soueast})`;
  const segments = violentCrime.map(category => `${inBox} AND category=${category}`);
  return segments.join(` OR `);
};


// const crimes = () => violentCrime.join(" OR category=");

// Crimes we care about -- API requires them to be inside single quotes
const violentCrime = [
  "'ARSON'",
  "'ASSAULT'",
  "'BURGLARY'",
  "'DRIVING UNDER THE INFLUENCE'",
  "'DRUG/NARCOTIC'",
  "'KIDNAPPING'",
  "'LARCENY/THEFT'",
  "'PROSTITUTION'",
  "'ROBBERY'",
  "'SEX OFFENSES, FORCIBLE'",
  "'SEX OFFENSES, NON FORCIBLE'",
  "'STOLEN PROPERTY'",
  "'VEHICLE THEFT'",
  "'WEAPON LAWS'"
];
