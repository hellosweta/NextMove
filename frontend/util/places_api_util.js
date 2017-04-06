// export const fetchPlaces = (radius = 0.25, { lat = 37.755893, lon = -122.417673 } ) => (
export const fetchPlaces = (radius = 400, lat = 37.790243, lon = -122.398108, type = 'transit_station' ) => (
  $.ajax({
    method: 'GET',
    url: 'api/places',
    data: { radius, lat, lon, type },
    success: r => console.log(r)
  })
);
