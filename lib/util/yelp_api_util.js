export const fetchYelpLocations = (term, location, radius, categories = "") => (
  $.ajax({
    url: `https://api.yelp.com/v3/businesses/search?latitude=${location.lat}&longitude=${location.lng}&radius=${radius}&term=${term}&categories=${categories}`,
    headers: { 'Authorization': 'Bearer vOgJew9n62qyjM1P4zEhdz5LGeoy7bK_Kf1qdLmm4WeLVcnILWdB5Ls5Bd1KURm2tnTMXSVtO1mEq0MvfwAr_ksHWnwJIu2OW2RTOgW1NQN2KsVmfcoqcZEWXMviWHYx' }
  })
);

export const fetchSingleYelpLocation = (id) => (
  $.ajax({
    url: `https://api.yelp.com/v3/businesses/${id}`,
    headers: { 'Authorization': 'Bearer vOgJew9n62qyjM1P4zEhdz5LGeoy7bK_Kf1qdLmm4WeLVcnILWdB5Ls5Bd1KURm2tnTMXSVtO1mEq0MvfwAr_ksHWnwJIu2OW2RTOgW1NQN2KsVmfcoqcZEWXMviWHYx' }
  })
);
