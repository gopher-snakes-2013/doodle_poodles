require 'active_record'
require 'sinatra'

set :database, ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'] || "sqlite3:///db/poodles.db")

# This works: 
# set :database, ActiveRecord::Base.establish_connection("sqlite3:///db/poodles.db")
# This does not work:
# set :database, ActiveRecord::Base.establish_connection('postgres://localhost/poodles')

# DATABASE_URL='postgres://localhost/thunder_dev'

get '/' do

  erb :index
end
