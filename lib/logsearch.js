// called by webserver and returns all conversations by author

var sys = require('sys');
var events = require('events');
var nStore = require('nStore');

exports.logSearch = logSearch;

function logSearch() {
	var self = this;
	events.EventEmitter.call(self);
}

//sys.inherits(logSearch, events.EventEmitter)
// Explicit inheritance.
logSearch.super_ = events.EventEmitter;
logSearch.prototype = Object.create(events.EventEmitter.prototype, {
    constructor: {
        value: logSearch,
        enumerable: false
    }
});

logSearch.prototype.results = function(db, author_name) {
	var self = this;
	self.db = nStore(db);
	self.author_name = author_name
	self.results = {};

	self.db.all(
		function (doc, meta) {
	    	return doc.from == self.author_name;
		}, 
		function (err, docs, metas) {
	  		if (err) throw err;
	  		self.results = docs;
	  		self.emit('data', self.results);
		});
	
	return self;
}



	