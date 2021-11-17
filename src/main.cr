require "kemal"

root_path = ""

macro ecr(xxx)
  render "src/views/#{{{xxx}}}.ecr"
end

get "/" do |x|
  ecr("layout")
end

Kemal.run
