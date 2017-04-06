class Api::PlacesController < ApplicationController

  def index
    search_params = {
      type: params[:type],
      radius: params[:radius],
      location: "#{params[:lat]},#{params[:lon]}"
    }

    @places = search(search_params)
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



end
