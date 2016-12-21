'use strict'
class Logger
	constructor: (@prefix, @level)->
		@prefix ?= ""
		@level ?= if NDEBUG?
			Logger.WARN
		else
			Logger.DEBUG

	debug: (v...)->
		if @level <= Logger.DEBUG
			if console.debug?
				console.debug @prefix, v...
			else
				console.log @prefix, v...

	trace: (v...)->
		if @level <= Logger.TRACE
			console.trace @prefix, v...

	info: (v...)->
		if @level <= Logger.INFO
			console.info @prefix, v...

	assert: (t, v...)->
		if @level <= Logger.ASSERT
			console.assert t, @prefix, v...

	log: (v...)->
		if @level <= Logger.LOG
			console.log @prefix, v...

	warn: (v...)->
		if @level <= Logger.WARN
			console.warn @prefix, v...

	error: (v...)->
		if @level <= Logger.ERROR
			console.error @prefix, v...

	@DEBUG: 0

	@TRACE: 1

	@INFO:2

	@ASSERT: 3

	@LOG: 4

	@WARN: 5

	@ERROR: 6

module.exports =
	Logger: Logger
