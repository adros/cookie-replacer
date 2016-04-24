# cookie-replacer

Plugin for url-replace, that performs user defined replaces in cookies header in requests sent to server.

It can used in development to add/remove cookies with auth tokens, env settings,...

## Config

This plugin is configured in url-replace config file by field "cookie-replacer".

	"cookie-replacer" : [
		{
			"urlPattern" : ".*",
			"pattern" : "test",
			"replacement" : "_test"
		}
	]

* **urlPattern** - only requests with matching URL will be modified
* **pattern** - RegExp to be searched in cookie header
* **replacement** - replacement to be used instead of pattern
