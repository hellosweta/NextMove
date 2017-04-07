# require 'http'
#
# def bearer_token
#   url = "https://api.yelp.com/oauth2/token"
#
#   params = {
#     client_id: Yelp.app_id,
#     client_secret: Yelp.secret,
#     grant_type: "client_credentials"
#   }
#
#   response = HTTP.post(url, params: params).parse
#   "#{response['token_type']} #{response['access_token']}"
# end
#
# Yelp.app_id = ENV["YELP_APP_ID"]
# Yelp.secret = ENV["YELP_APP_SECRET"]
# Yelp.access_token = bearer_token
