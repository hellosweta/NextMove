const radiusInMeters = radiusInMiles => radiusInMiles * 1609.34;

// export const fetchAllYelpLocations = (term, location="San Francisco", categories = "") => (
//   $.get({
//     url: `https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}`,
//     headers: { Authorization: 'Bearer vOgJew9n62qyjM1P4zEhdz5LGeoy7bK_Kf1qdLmm4WeLVcnILWdB5Ls5Bd1KURm2tnTMXSVtO1mEq0MvfwAr_ksHWnwJIu2OW2RTOgW1NQN2KsVmfcoqcZEWXMviWHYx',
//                 'cache-control': 'no-cache'},
//     dataType: 'JSONP',
//     cache: true
//   })
// );

export const fetchAllYelpLocations = (term, location="San Francisco", categories = "") => (
  $.ajax({
    url: `https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}`,
    headers: {
      'Authorization': 'Bearer vOgJew9n62qyjM1P4zEhdz5LGeoy7bK_Kf1qdLmm4WeLVcnILWdB5Ls5Bd1KURm2tnTMXSVtO1mEq0MvfwAr_ksHWnwJIu2OW2RTOgW1NQN2KsVmfcoqcZEWXMviWHYx',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
      'Access-Control-Allow-Methods': 'GET',
      'dataType': 'JSONP',
      'cache': 'true'
    }
  })
);

// const baseUrl = 'https://api.yelp.com/v3/';
// const resource = 'businesses/search';
// const params = {term: 'restaurants' }
//
// $.ajax({
//   url: baseUrl + resource + jsonToQueryString(params),
//   headers: {
//     'Authorization': 'Bearer ' + this.accessToken
//   }
// });

// export const fetchFilteredYelpLocations = (term, latitude, longitude, radiusInMiles, categories = "") => (
//   $.ajax({
//     url: `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&term=${term}&categories=${categories}&radius=${radiusInMeters(radiusInMiles)}`,
//     headers: { 'Authorization': 'Bearer vOgJew9n62qyjM1P4zEhdz5LGeoy7bK_Kf1qdLmm4WeLVcnILWdB5Ls5Bd1KURm2tnTMXSVtO1mEq0MvfwAr_ksHWnwJIu2OW2RTOgW1NQN2KsVmfcoqcZEWXMviWHYx' },
//     dataType: "JSONP"
//   })
// );
//
// export const fetchSingleYelpLocation = (id) => (
//   $.ajax({
//     url: `https://api.yelp.com/v3/businesses/${id}`,
//     headers: { 'Authorization': 'Bearer vOgJew9n62qyjM1P4zEhdz5LGeoy7bK_Kf1qdLmm4WeLVcnILWdB5Ls5Bd1KURm2tnTMXSVtO1mEq0MvfwAr_ksHWnwJIu2OW2RTOgW1NQN2KsVmfcoqcZEWXMviWHYx' },
//     dataType: "JSONP"
//   })
// );

// import Yelp from 'yelp-api-v3';
//
// const yelp = new Yelp({
//   app_id: 'J5q3JIa3r48o65rY_kTPug',
//   app_secret: 'sbVlbHGfIo9oNCUtdz7gT46OqqcVGYhp6Ywo0kaKMG7xPo2ZZuX5x69LQi18Cfdl'
// });
//
// export const fetchAllYelpLocations = (term, location="San Francisco") => (
//   yelp.search({term, location})
// );

// var Yelp = require('yelp-api-v3');
//
// var yelp = new Yelp({
//   app_id: 'J5q3JIa3r48o65rY_kTPug',
//   app_secret: 'sbVlbHGfIo9oNCUtdz7gT46OqqcVGYhp6Ywo0kaKMG7xPo2ZZuX5x69LQi18Cfdl'
// });
//
// yelp.search({term: 'food', location: '90210', price: '1,2,3', limit: 10})
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (err) {
//   console.error(err);
// });
