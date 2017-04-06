class Api::PlacesController < ApplicationController

  def index
    @client = GooglePlaces::Client.new('AIzaSyASgVW43IJ48fysieFZk3Xi3AIbicdiR2E')
    # @response = @client.spots(37.807155, -122.521630,  options = {types: 'restaurant', radius: 1000})
    request_options = {
      # :location => "37.807155, -122.521630",
      # :keyword => 'restaurant',
      :types => 'restaurant',
      :radius => 200
    }
    # @stuff = @client.spots(-33.8670522, 151.1957362)
    # @stuff = @client.spots(37.807155, -122.521630)
    # @stuff = @client.spots(37.7749295, -122.4194155)
    @stuff = @client.spots(37.790243, -122.398108, request_options)
    # debugger
    # @response = @client.spots(37.807155, -122.521630, request_options)
    # @stuff = @client.spots_by_query("Gym in San Francisco", :types => ['gym'])
    # debugger
    # radius = params[:radius]
    # @stuff = search(nil, nil, radius)
    render :index
  end

  # def index
  #   @restaurants = search(lat, lon, radius)
  #   render 'api/restaurants/show'
  # end

  # def fetch_all_restaurants
  #   $.ajax({
  #     method: 'GET',
  #     url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyASgVW43IJ48fysieFZk3Xi3AIbicdiR2E&location=37.789616,%20-122.400647&radius=500&type=transit_station'
  #   })
  # end

  # @client = GooglePlaces::Client.new('AIzaSyASgVW43IJ48fysieFZk3Xi3AIbicdiR2E')
  #
  # def search(lat, lon, radius)
  #   response = @client.spots(lat: 37.807155, lon: -122.521630, types: 'restaurant', radius: 1000)
  #   if response["next_page_token"]
  #     response += search(lat, lon, radius)
  #   end
  #   response
  # end


end
