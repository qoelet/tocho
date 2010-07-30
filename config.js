// set your configurations
var server = 'irc.freenode.net'
var channels = ['#node.js']
var nick = 'tocho-san'
var password = '123123'
var logmode = 'nstore'	// nstore or text
var logfile = 'log.db'

// exports
exports.server = function() {
	return server;
}

exports.channels = function() {
	return channels;
}

exports.nick = function() {
	return nick;
}

exports.password = function() {
	return password
}

exports.logfile = function() {
	return logfile
}

exports.logmode = function() {
	return logmode;
}
