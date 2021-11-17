require "kemal"

root_path = ""

macro ecr(xxx)
  {% if xxx.starts_with?('_') %}
    render "src/views/#{{{xxx}}}.ecr"
  {% else %}
    render "src/views/#{{{xxx}}}.ecr", "src/views/layout.ecr"
  {% end %}
end

get "/" do |x|
  ecr("layout")
end

public_folder "../dist"

Kemal.run
