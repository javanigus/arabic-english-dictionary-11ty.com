(function () {
	"use strict";

	$(".toggle-menu").on("click", function (event) {
		console.log("click");
		$(".nav, .subnav").toggle();
	});
}());