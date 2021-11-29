require "kemal"
require "pg"
require "./users.cr"
require "./utils.cr"
require "./tokens.cr"
require "./login.cr"
require "./errors.cr"

HMAC_KEY = Random::Secure.hex(32)

PG_DB = DB.open ""

before_all do |env|
	if Kemal.config.ssl
		env.response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains; preload"

		if env.request.cookies.has_key? "SID"
			sid = env.request.cookies["SID"].value

			if sid.starts_with? "v1:"
				raise "Cannot use token as SID"
			end

			if email = PG_DB.query_one?("SELECT email FROM session_ids WHERE id = $1", sid, as: String)
				user = PG_DB.query_one("SELECT * FROM users WHERE email = $1", email, as: User)
				csrf_token = generate_response(sid, {
					":authorize_token",
					":signout",
					":token_ajax",
				}, HMAC_KEY, PG_DB, 1.week)

				env.set "sid", sid
				env.set "csrf_token", csrf_token
				env.set "user", user
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
end
end

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
