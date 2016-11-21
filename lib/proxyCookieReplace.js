var logger;

function init(_proxy, _logger) {
	logger = _logger;
}

function exec(config, req/*, res*/) {

	var replaces = config["pro-xy-cookie-replace"];
	if ("cookie" in req.headers) {
		(replaces || []).forEach(function(replace) {
			if (!new RegExp(replace.urlPattern).test(req.url)) {
				return;
			}

			logger.trace(`Url matched "${req.url}"`);
			var regex = new RegExp(replace.pattern, "g");

			var cookieValue = req.headers.cookie || "";
			if (regex.test(cookieValue)) {
				var newVal = req.headers.cookie = cookieValue.replace(regex, replace.replacement);
				logger.debug(`Cookie value "${cookieValue}" replaced for "${newVal}" in ${req.url}`);
			}
		});
	}
}

module.exports = {
	init,
	exec
};
