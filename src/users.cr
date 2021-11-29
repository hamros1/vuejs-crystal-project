require "crypto/bcrypt/password"

struct User
	include DB::Serializable

	property updated : Time
	property email : String

	property password : String?
	property token : String
end

def get_user(sid, headers, db, refresh = true)
	begin
		if email = db.query_one?("SELECT email FROM session_ids WHERE id = $1", sid, as: String)
			user = db.query_one("SELECT * FROM users WHERE email = $1", email, as: User)

			user_array = user.to_a
			args = arg_array(user_array)

			db.exec("INSERT INTO users VALUES (#{args}) ON CONFLICT (email) DO UPDATE SET updated = $1", args: user_array)

			db.exec("INSERT INTO session_ids VALUES ($1, $2, $3) ON CONFLICT (id) DO NOTHING", sid, user.email, Time.utc)
		else 
			token = Base64.urlsafe_encode(Random::Secure.random_bytes(32))

			user = User.new({
				updated: Time.utc
				email: nil,
				password: nil,
				token: token,
			})

			user_array = user.to_a
			args = arg_array(user.to_a)

			db.exec("INSERT INTO users VALUES (#{args}) ON CONFLICT (email) DO UPDATE set UPDATED = $1", args: user_array)

			db.exec("INSERT INTO session_ids VALUES ($1, $2, $3) ON CONFLICT (id) DO NOTHING", sid, user.email, Time.utc)
		end
	rescue ex
	end

	return user, sid
end

def create_user(sid, email, password)
	password = Crypto::Bcrypt::Password.create(password, cost: 10)
	token = Base64.urlsafe_encode(Random::Secure.random_bytes(32))

	user = User.new({
		updated: Time.utc,
		email: email,
		password: password.to_s,
		token: token,
	})

	return user, sid
end
