const racer = require('racer')
const Socket = require('./socket')
// need another way to set options for Socket
// channel: literally the default in this package
const CLIENT_OPTIONS = { base: '/channel' };

// why does this function accept data param?
racer.Model.prototype._createSocket = function (appdata) {
  return new Socket(CLIENT_OPTIONS)
}
