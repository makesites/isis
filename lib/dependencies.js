// Dependency handling

isis.load = function(){

};


// Inject a css style
var inject: {
	css: function( url ){
		var link = document.createElement("link");
		link.href = url;
		link.type = "text/css";
		link.rel = "stylesheet";
		document.getElementsByTagName("head")[0].appendChild(link);
	}
};
