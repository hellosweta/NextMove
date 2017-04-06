// export const fetchPlaces = (radius = 0.25, { lat = 37.755893, lon = -122.417673 } ) => (
export const fetchPlaces = (radius = 0.25, lat = 37.790243, lon = -122.398108, terms = 'restaurant' ) => (
  $.ajax({
    method: 'GET',
    url: 'api/places',
    data: { radius, lat, lon, terms },
    success: r => console.log(r)
  })
);
