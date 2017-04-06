class Api::PlacesController < ApplicationController

  def index
    @stuff = params
    render :index
  end

end
