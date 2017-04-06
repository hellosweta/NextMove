class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :search

  # def search(lat, lon, request_options)
  #   @client ||= GooglePlaces::Client.new('AIzaSyASgVW43IJ48fysieFZk3Xi3AIbicdiR2E')
  #   @client.spots(lat, lon, request_options)
  # end

  def search(search_params)
    search_params['key'] = 'AIzaSyASgVW43IJ48fysieFZk3Xi3AIbicdiR2E'

    results = []
    response = GooglePlaces::Request.spots(search_params)
    results += parse_response(response)
    # debugger
    2.times do
      if response["next_page_token"]
        sleep(2)
        response = search_next_page(response["next_page_token"])
        results += parse_response(response)
      end
    end

    results.compact
  end

  def parse_response(response)
    response['results'].map do |result|
      GooglePlaces::Spot.new(result, 'AIzaSyASgVW43IJ48fysieFZk3Xi3AIbicdiR2E')
    end
  end

  def search_next_page(next_page_token)
    search_params = {
      pagetoken: next_page_token,
      key: 'AIzaSyASgVW43IJ48fysieFZk3Xi3AIbicdiR2E'
    }
    # debugger
    GooglePlaces::Request.spots(search_params)
  end

end
