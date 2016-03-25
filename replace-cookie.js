module.exports = function(config, req) {
	var replaces = config["cookie-replacer"];
	if ("cookie" in req.headers) {
		(replaces || []).forEach(function(replace) {
			req.headers.cookie = req.headers.cookie.replace(replace.pattern, replace.replacement);
		});
	}
};
