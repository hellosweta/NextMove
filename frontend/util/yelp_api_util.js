const radiusInMeters = radiusInMiles => radiusInMiles * 1609.34;

export const fetchFilteredYelpLocations = (latitude, longitude, term, radius = radiusInMeters(0.25)) => (
  $.ajax({
    url: '/api/yelp',
    data: {
      latitude,
      longitude,
      term,
      radius
    }
  })
);
