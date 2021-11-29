def arg_array(array, start = 1)
	if array.size == 0
		args = "NULL"
	else
		args = [] of String
		(start..array.size + start - 1).each { |i| args << "($#{i})" }
		args = args.join(",")
	end

	return args
end

def get_referer(env, fallback = "/", unroll = true)
	referer = env.params.query["referer"]?
	referer ||= env.request.headers["referer"]?
	referer ||= fallback

	referer = URI.parse(referer)

	if unroll
		loop do
			if referer.query
				params = HTTP::Params.parse(referer.query.not_nil!)
				if params["referer"]?
					referer = URI.parse(URI.decode_www_form(params["referer"]))
				else
					break
				end
			else
				break
			end
		end
	end

	referer = referer.request_target
	referer = "/" + referer.gsub(/[^\/?@&%=\-_.0-9a-zA-Z]/, "").lstrip("/\\")

	if referer == env.request.path
		referer = fallback
	end

	return referer
end
