# logger
Logger in Coffeescript

### NOTE
Do NOT download from npm!

Just add the dependency that use https git repo url as a version.

    "@coffee-toolbox/logger": "https://github.com/coffee-toolbox/logger.git"

npm is evil that it limit the publish of more than one project.
And its restriction on version number is terrible for fast development that
require local reference. (npm link sucks!)
[why npm link sucks](https://github.com/webpack/webpack/issues/554)

It ruined my productivity for a whole three days!

For any one who values his life, please be away from npm.

----

Support following method as sorted by its log level started from 0

 - debug
 - trace
 - info
 - assert
 - log
 - warn
 - error

In Node.js, `info` and `debug` is alias of `log`

Default log level is `debug` for debug and `assert` for production.

To set production: in webpack,

    plugins: [
    	new webpack.EnvironmentPlugin([
    		'NODE_ENV'
    	])
    ]

then run with

	NODE_ENV=production webpack
