import { getCrimes } from 'spotcrime';
// or, as an alternative to the spotcrime npm package, we can write the url manually as follows:
// http://api.spotcrime.com/crimes.json?key=privatekeyforspotcrimepublicusers-commercialuse-877.410.1607&lat=33.39657&lon=-112.03422&radius=0.01

export const fetchAllCrimes = (lat, lon, radius) => {
  const loc = { lat, lon };
  return getCrimes(loc, radius);
};
