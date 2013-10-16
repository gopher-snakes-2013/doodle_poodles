require 'active_record'
require 'sinatra'

set :database, ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || "sqlite3:///db/poodles.db")

# Note for our own learning, feedback appreciated :-)
# This works: 
# set :database, ActiveRecord::Base.establish_connection("sqlite3:///db/poodles.db")
# This does not work:
# set :database, ActiveRecord::Base.establish_connection('postgres://localhost/poodles')

get '/' do
  erb :index
end
