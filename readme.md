# pro-xy-cookie-replace

Plugin for url-replace, that performs user defined replaces in cookies header in requests sent to server.

It can be used in development to add/remove cookies with auth tokens, env settings,...

Sample configuration

```
{
    "port": 8000,
    "logLevel": "INFO",
    "plugins": [
        "pro-xy-cookie-replace"
    ],
    "pro-xy-cookie-replace": {
		"disabled": true,
		"replaces": [
			{
				"urlPattern": ".*",
				"pattern" : "test",
				"replacement" : "_test"
		    }
		]
	}
}
```

- *urlPattern* - only requests with matching URL will be modified
- *pattern* - RegExp to be searched in cookie header
- *replacement* - replacement to be used instead of pattern
