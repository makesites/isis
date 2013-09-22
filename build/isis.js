(function( window, document ){
// default options
var defaults = {
	
	
};
// Main Constructor

var isis = function( options ){

};

// Dependency handling

isis.load = function(){

};


// Inject a css style
var inject = {
	css: function( url ){
		var link = document.createElement("link");
		link.href = url;
		link.type = "text/css";
		link.rel = "stylesheet";
		document.getElementsByTagName("head")[0].appendChild(link);
	},
	// Load scripts on the fly
	// Taken from common.js: https://github.com/commons/common.js/blob/master/lib/c.script.js
	// Usage: inject.js('http://platform.twitter.com/widgets.js', { id : 'twitter-wjs',  async : true});
	js: function( url, attr ){
		//fallbacks
		attr = attr || {};
		url = url || false;
		attr.id = attr.id || false;
		attr.async = attr.async || false;
		// prerequisites
		if( !url ) return;
		if( attr.id && d.getElementById(attr.id) ) return;
		// variables
		var t = "script";
		var js = d.createElement(t);
		// clean url from protocol definition
		url = url.replace(/^http:|^https:/, "");
		// set attributes
		js.type = 'text/javascript';
		if( attr.id ) js.id = attr.id;
		js.async = attr.async;
		js.src = ("https:"==location.protocol?"https:":"http:")+ url;
		// place in DOM
		var s = d.getElementsByTagName(t)[0];
		s.parentNode.insertBefore(js, s);
	}
};



	// save back to the window object
	if( window ) window.isis = isis;

})( this.window, this.document );