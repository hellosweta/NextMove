class Api::PlacesController < ApplicationController

  def index
    request_options = {
      :types => params[:types],
      :radius => params[:radius]
    }
    @places = search(params[:lat], params[:lon], request_options)
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
