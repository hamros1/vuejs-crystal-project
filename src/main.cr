require "kemal"
require "pg"
require "./macros.cr"
require "./users.cr"
require "./utils.cr"
require "./tokens.cr"
require "./login.cr"
require "./errors.cr"

HMAC_KEY = Random::Secure.hex(32)

PG_DB = DB.open "postgresql://kemal:kemal@localhost/dev"

before_all do |env|
	env.response.headers["X-XSS-Protection"] = "1; mode=block"
	env.response.headers["X-Content-Type-Options"] = "nosniff"
	env.response.headers["Referrer-Policy"] = "interest-cohort=()"
	
	if env.request.cookies.has_key? "SID"
		sid = env.request.cookies["SID"].value
		
		if email = PG_DB.query_one?("SELECT email FROM session_ids WHERE id = $1", sid, as: String)
			begin
				user = PG_DB.query_one("SELECT * FROM users WHERE email = $1", email, as: User)
				csrf_token = generate_response(sid, {
					":signout"
				}, HMAC_KEY, PG_DB, 1.week)
				
				env.set "sid", sid
				env.set "csrf_token", csrf_token
			rescue ex
			end
		end
	end
	
	current_page = env.request.path
	if env.request.query
		query = HTTP::Params.parse(env.request.query.not_nil!)

		if query["referer"]?
			query["referer"] = get_referer(env, "/")
		end
		
		current_page += "?#{query}"
	end
	
	env.set "current_page", URI.encode_www_form(current_page)
end


macro ecr(xxx)
	{% if xxx.starts_with?('_') %}
		render "src/views/#{{{xxx}}}.ecr"
	{% else %}
		render "src/views/#{{{xxx}}}.ecr", "src/views/layout.ecr"
	{% end %}
end

get "/" do |env|
	ecr("layout")
end

get "/login" do |env|
	ecr("layout")
end

get "/register" do |env|
	ecr("layout")
end

public_folder "../dist"

Kemal.run
