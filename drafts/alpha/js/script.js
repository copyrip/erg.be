$(document).ready(function() {
	console.log("ready →");

});

$(window).on('load', function() {
	console.log("loaded ✅");
	console.log("...");

	chasseOuverte(".marquee");

	//$(".marquee").animate({marginLeft: '-1000%'}, 130000, 'linear');


});

function chasseOuverte(e) {
	var fonts = ["bx_line", "figura", "lucette", "espatarra", "giskith"];

	$(e).children().each(function() {
		$(this).addClass(fonts[Math.floor((Math.random() * (fonts.length - 1)))]);
	});
}
