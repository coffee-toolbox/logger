# logger
Logger in Coffeescript

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
Setup global `NDEBUG: true` for a production release.
