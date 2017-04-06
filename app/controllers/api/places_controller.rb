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

end
