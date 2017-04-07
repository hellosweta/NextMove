const radiusInMeters = radiusInMiles => radiusInMiles * 1609.34;

export const fetchFilteredYelpLocations = (latitude, longitude, radius, term) => (
  $.ajax({
    url: '/api/yelp',
    data: {
      latitude,
      longitude,
      radius: radiusInMeters(radius),
      term
    }
  })
);
