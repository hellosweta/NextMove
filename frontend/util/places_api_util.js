// export const fetchPlaces = (radius = 0.25, { lat = 37.755893, lon = -122.417673 } ) => (
export const fetchPlaces = (radius = 0.25, lat = 37.755893, lon = -122.417673 ) => (
  $.ajax({
    method: 'GET',
    url: 'api/places',
    data: { radius, location: { lat, lon } },
    success: r => console.log(r)
  })
);
