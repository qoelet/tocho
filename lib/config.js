// set your configurations
var server = 'irc.freenode.net'
var channels = ['#kennyshen']
var nick = 'tocho-san'
var password = ''
var logmode = 'nstore'	// nstore or text
var logfile = 'log.db'

var auth = false; // if no password, not registered, set to false.
var ircbot = false; // if you want to toggle off irc bot mode
var webserver = true; // if you want to toggle on the web server

// simple exports
exports.server = function() {
	return server;
}

exports.webserver = function() {
	return webserver;
}

exports.ircbot = function() {
	return ircbot;
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

exports.auth = function() {
	return auth
}

exports.logfile = function() {
	return logfile
}

exports.logmode = function() {
	return logmode;
}
