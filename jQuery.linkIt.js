/*
* Name: 	linkIt
* Author: 	Girgis Abdel-malak
* Version: 	0.1.0
* License: 	MIT
*/


(function ($) {

	$.fn.linkIt = function (values) {
		// setting the default values
		var settings = $.extend({
			href 	: null,
			target	: null
		}, values);

		// validation
		if(settings.href == null) {
			settings.href = "#";
		}

		if(settings.target == null) {
			settings.target = "_self";
		}

		// setting the values of attributes to the user's values
		var selected = this[0].outerHTML;
		this.before("<a href='" + settings.href + "'" + "target='" + settings.target + "'>" + selected + "</a>").remove();
		
	};

} (jQuery));