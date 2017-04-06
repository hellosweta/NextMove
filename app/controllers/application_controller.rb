class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :search

  # def search(lat, lon, radius, client)
  def search(lat, lon, request_options)
    # debugger
    @client ||= GooglePlaces::Client.new('AIzaSyASgVW43IJ48fysieFZk3Xi3AIbicdiR2E')
    places = @client.spots(lat, lon, request_options)

    # next_page_token = places.last["nextpagetoken"]
    #
    # if !next_page_token.nil?
    #   request_options['next_page_token'] = next_page_token
    #   places += search(request_options)
    # end

    places
  end

end
