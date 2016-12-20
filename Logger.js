// Generated by CoffeeScript 1.12.2
(function() {
  'use strict';
  var Logger,
    slice = [].slice;

  Logger = (function() {
    function Logger(prefix, level) {
      this.prefix = prefix;
      this.level = level;
      if (this.prefix == null) {
        this.prefix = "";
      }
      if (this.level == null) {
        this.level = typeof NDEBUG !== "undefined" && NDEBUG !== null ? Logger.WARN : Logger.DEBUG;
      }
    }

    Logger.prototype.debug = function() {
      var v;
      v = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (this.level <= Logger.DEBUG) {
        if (console.debug != null) {
          return console.debug.apply(console, [this.prefix].concat(slice.call(v)));
        } else {
          return console.log.apply(console, [this.prefix].concat(slice.call(v)));
        }
      }
    };

    Logger.prototype.trace = function() {
      var v;
      v = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (this.level <= Logger.TRACE) {
        return console.trace.apply(console, [this.prefix].concat(slice.call(v)));
      }
    };

    Logger.prototype.info = function() {
      var v;
      v = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (this.level <= Logger.INFO) {
        return console.info.apply(console, [this.prefix].concat(slice.call(v)));
      }
    };

    Logger.prototype.assert = function() {
      var t, v;
      t = arguments[0], v = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (this.level <= Logger.ASSERT) {
        return console.assert.apply(console, [t, this.prefix].concat(slice.call(v)));
      }
    };

    Logger.prototype.log = function() {
      var t, v;
      t = arguments[0], v = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (this.level <= Logger.LOG) {
        return console.log.apply(console, [t, this.prefix].concat(slice.call(v)));
      }
    };

    Logger.prototype.warn = function() {
      var t, v;
      t = arguments[0], v = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (this.level <= Logger.WARN) {
        return console.warn.apply(console, [t, this.prefix].concat(slice.call(v)));
      }
    };

    Logger.prototype.error = function() {
      var t, v;
      t = arguments[0], v = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (this.level <= Logger.ERROR) {
        return console.error.apply(console, [t, this.prefix].concat(slice.call(v)));
      }
    };

    Logger.DEBUG = 0;

    Logger.TRACE = 1;

    Logger.INFO = 2;

    Logger.ASSERT = 3;

    Logger.LOG = 4;

    Logger.WARN = 5;

    Logger.ERROR = 6;

    return Logger;

  })();

  module.exports = {
    Logger: Logger
  };

}).call(this);