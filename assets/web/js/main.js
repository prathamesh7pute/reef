//requirejs config
require.config({

	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		handlebars: {
			exports: 'Handlebars'
		}
	},

	paths: {
		jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone/backbone',
		handlebars: 'lib/handlebars/handlebars.runtime',
	}

});

//application entry with backbone utility overrides
require([
    'jquery',
    'backbone',
    'routers/router'],

function ($, Backbone, Router) {

	var router = new Router();

	Backbone.history.start({
		pushState: true,
		root: '/'
	});

	$(document).on("click", "a[href]:not([data-bypass])", function (evt) {
		var root = location.protocol + "//" + location.host + '/',
			href = {
				prop: $(this).prop("href"),
				attr: $(this).attr("href")
			};

		if (href.prop.slice(0, root.length) === root) {
			evt.preventDefault();
			Backbone.history.navigate(href.attr, true);
		}
	});

	Backbone.View.prototype.close = function () {
		if (this.beforeClose) {
			this.beforeClose();
		}
		this.remove();
		this.unbind();
	};

	Backbone.View.prototype.navigate = function (url, options) {
		router.navigate(url, options);
	};

});