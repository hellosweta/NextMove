export const fetchAddress = (lat, lon) => (
  $.ajax({
    method: 'GET',
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?`
          + `access_token=${appToken}`
  })
);

const appToken = 'pk.eyJ1IjoiZGpmbGV0Y2hlciIsImEiOiJjajF6bjR5djUwMzQzMndxazY3cnR5MGtmIn0.EhgTpiAXtQ6D0H82S24b5g'
