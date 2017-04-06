# json.stuff @response
json.array! @stuff do |obj|
  json.reference obj.reference
  json.vicinity obj.vicinity
  json.lat obj.lat
  json.lng obj.lng
  json.name obj.name
  json.type obj.types
  json.rating obj.rating
end
