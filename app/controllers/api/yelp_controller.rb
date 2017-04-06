require 'json'
require 'http'

class Api::YelpController < ApplicationController
  def index
    @locations = get_locations(search_params).businesses
    render :index
  end

  private

  def search_params
    params.require(:yelp_search).permit(:latitude, :longitude, :radius, :term)
  end

  def bearer_token
    url = "https://api.yelp.com/oauth2/token"

    params = {
      client_id: ENV["YELP_APP_ID"],
      client_secret: ENV["YELP_APP_SECRET"],
      grant_type: "client_credentials"
    }

    response = HTTP.post(url, params: params).parse
    "#{response['token_type']} #{response['access_token']}"
  end

  def get_locations(params)
    url = "https://api.yelp.com/v3/businesses/search"
    response = HTTP.auth(bearer_token).get(url, params: params)
    response.parse
  end

end
