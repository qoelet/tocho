// load node-irc & other stuff
var irc = require('irc');
var fs = require('fs');
var config = require('./lib/config');
var bot = new irc.Client(config.server(), config.nick(), {
	channels: config.channels(),
});

// logging
if (config.logmode() == 'nstore') {
	var nStore = require('nstore');
	var logfile = nStore(config.logfile());
} else {
	var logfile = config.logfile();
	var log_fd;
	fs.open(logfile, 'a', mode=0666, function(err, fd) {
		log_fd = fd;
	});
}

// load welcome message
console.log('tocho is getting ready to listen & log...');

// temp auth 
var auth = config.auth();

// load messages to screen
bot.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
	if (config.logmode() == 'nstore') {
		logfile.save(null, {date:Date(), from:from, message:message })
	} else {
		var log_message = (Date() + '__' + from + ':' + message + '\n');
		fs.write(log_fd, log_message, encoding='utf8');
	}
});

bot.addListener('pm', function (from, message) {
    console.log(from + ' => TOCHO: ' + message);
	if (config.logmode() == 'nstore') {
		logfile.save(null, {date:Date(), from:from, message:message, private: true })
	} else {
		var log_message = (Date() + '__' + from + ':' + message + '\n');
		fs.write(log_fd, log_message, encoding='utf8');
	}
});

if(auth == true)
	setTimeout(authbot, 20000);

function authbot() {
	bot.say('nickserv', ("identify "+config.password()));
	console.log("AUTH SENT.");
}

// web push via Socket.IO
// -- not ready yet.
if(config.webserver == true) {
	var http = require('http')
	var io = require('socket.io')
	var less = require('less.js')
	var express= require('express')
	
	// initalizing via express
	var webpush = express.createServer();
	
	webpush.get('/', function(req, res) {
		// only route we'll take for now
		
		// future '/search/?q=author' for searching the logs
	});
	
	webpush.listen(8080)
	
	var socket = io.listen(server)

	// socket methods

}