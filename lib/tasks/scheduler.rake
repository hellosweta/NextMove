require 'http'

task ping: :environment do
  puts "Pinging..."
  HTTP.get('http://nextmovesf.info')
  puts 'done.'
end
