def login_page(env)
	user = env.get "user"

	return env.redirect "/" if user

	email = nil
	password = nil

	ecr "login"
end

def login(env)
	email = env.params.body["email"]?.try &.downcase.byte_slice(0, 254)
	password = env.params.body["password"]

	if !email
		raise InfoException.new("Email is a required field")
	end

	if !password
		raise InfoException.new("Password is a required field")
	end

	user = PG_DB.query_one?("SELECT * FROM users WHERE email = $1", email, as: User)

	if user
		if Crypto::Bcrypt::Password.new(user.password.not_nil!).verify(password.byte_slice(0, 55))
			sid = Base64.urlsafe_encode(Random::Secure.random_bytes(32))
			PG_DB.exec("INSERT INTO session_ids VALUES ($1, $2, $3)", sid, email, Time.utc)

			env.response.cookies["SID"] = HTTP::Cookie.new(name: "SID", value: sid, expires: Time.utc + 2.years, secure: secure, http_only: true)
		else
			raise InfoException.new("Wrong username or password")
		end
	else
		if password.empty?
			raise InfoException.new("Password cannot be empty")
		end

		if password.bytesize > 55
			raise InfoException.new("Password cannot be longer than 55 characters")
		end

		password = password.byte_slice(0, 55)

		sid = Base64.urlsafe_encode(Random::Secure.random_bytes(32))
		user, sid = create_user(sid, email, password)

		user_array = user.to_a
		args = arg_array(user_array)

		PG_DB.exec("INSERT INTO users VALUES (#{args})", args: user_array)
		PG_DB.exec("INSERT INTO session_ids VALUES ($1, $2, $3)", sid, email, Time.utc)

		if Kemal.config.ssl
			secure = true
		else
			secure = false
		end

		env.response.cookies["SID"] = HTTP::Cookie.new(name: "SID", value: sid, expires: Time.utc + 2.years, secure: secure, http_only: true)
	end
end

def signout(env)
	user = env.get? "user"
	sid = env.get? "sid"

	user = user.as(User)
	sid = sid.as(String)
	token = env.params.body["csrf_token"]?

	begin
		validate_request(token, sid, env.request, HMAC_KEY, PG_DB)
	rescue ex
	end

	PG_DB.exec("DELETE FROM session_ids * WHERE id = $1", sid)

	env.request.cookies.each do |cookie|
		cookie.expires = Time.utc(1990, 1, 1)
		env.response.coookies << cookie
	end
end
