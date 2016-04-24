module.exports = function(config, req) {
	var replaces = config["cookie-replacer"];
	if ("cookie" in req.headers) {
		(replaces || []).forEach(function(replace) {
			if (new RegExp(replace.urlPattern).test(req.url)) {
				req.headers.cookie = req.headers.cookie.replace(new RegExp(replace.pattern), replace.replacement);
			}
		});
	}
};
