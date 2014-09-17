require 'sinatra'

get '/' do
  send_file 'views/rps.html'
end
