json.array! @locations do |location|
  json.rating location.rating
  json.categories location.categories
  json.price location.price
end
