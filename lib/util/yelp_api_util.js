export const fetchAllYelpLocations = (term, location="San Francisco", categories = "") => (
  $.ajax({
    url: `https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&categories=${categories}`,
    headers: { 'Authorization': 'Bearer vOgJew9n62qyjM1P4zEhdz5LGeoy7bK_Kf1qdLmm4WeLVcnILWdB5Ls5Bd1KURm2tnTMXSVtO1mEq0MvfwAr_ksHWnwJIu2OW2RTOgW1NQN2KsVmfcoqcZEWXMviWHYx' }
  })
);

export const fetchSomeYelpLocations = (term, latitude, longitude, radius, categories = "") => (
  $.ajax({
    url: `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&term=${term}&categories=${categories}&radius=${radius}`,
    headers: { 'Authorization': 'Bearer vOgJew9n62qyjM1P4zEhdz5LGeoy7bK_Kf1qdLmm4WeLVcnILWdB5Ls5Bd1KURm2tnTMXSVtO1mEq0MvfwAr_ksHWnwJIu2OW2RTOgW1NQN2KsVmfcoqcZEWXMviWHYx' }
  })
);

export const fetchSingleYelpLocation = (id) => (
  $.ajax({
    url: `https://api.yelp.com/v3/businesses/${id}`,
    headers: { 'Authorization': 'Bearer vOgJew9n62qyjM1P4zEhdz5LGeoy7bK_Kf1qdLmm4WeLVcnILWdB5Ls5Bd1KURm2tnTMXSVtO1mEq0MvfwAr_ksHWnwJIu2OW2RTOgW1NQN2KsVmfcoqcZEWXMviWHYx' }
  })
);
