# Isis

Web application GUI framework

I see you baby...

## Dependencies

The framework is heavily relying on the [Backbone.js](http://backbonejs.org) extensions, maintained by [Makesites.org](http://makesites.org)

* [Backbone APP](http://github.com/backbone/backbone-app)
* [Backbone UI](http://github.com/backbone-ui)
* [Backbone Input](http://github.com/backbone-input)

[Commons](http://github.com/commons) web assets provide the foundation for the front-end client(s)

* [Common.css](http://github.com/commons/common.css)
* [Common.js](http://github.com/commons/common.js)
* [Common Grid](http://github.com/commons/grid)

## Install

Using bower:
```
bower install isis
```

## Usage

After including the core lib you may initialize it with a set of options:
```
isis({
	ui: {
		slider: {}
	},
	input: {
		touch: {}
	}
});
```
Any of the options may be parameterized with a series of sub-options. For example in the above object:
```
...
	slider: {
		direction: vertical
		transition: ".5 easeout"
		arrows: false
	}
...
```

## Options

Here is the main groups of options you can pass during initialization

### ui

Setting the variant UI components you'll be requesting. Usually these are a 1-1 match with the equivalent [Backbone UI](http://github.com/backbone-ui) extension.

### input

Defining the input methods our app will be monitoring. Again, these correlate with the relevant [Backbone Input](http://github.com/backbone-input) extensions...

### grid

A generator of the (per-layout) grid system, used to guide the Common Grid setup.


## Credits

Created by [Lyndel Thomas](http://twitter.com/ryndel)

Distributed through [Makesites.org](http://makesites.org)

Dual-licensed under the MPL & AGPL
