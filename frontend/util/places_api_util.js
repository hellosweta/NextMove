const radiusInMeters = radiusInMiles => radiusInMiles * 1609.34;

export const fetchFilteredTransit = (radiusInMiles, lat, lon) => (
  $.ajax({
    method: 'GET',
    url: 'api/places',
    data: {
      radius: radiusInMeters(radiusInMiles),
      lat,
      lon,
      type: 'transit_station'
    }
  })
);
