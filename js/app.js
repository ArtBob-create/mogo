$(function() {

	var header = $("#header");
	var scrolloffset = $(window).scrollTop();
	var introH = $("#intro").innerHeight();


	// Fixed Header
	checkScroll(scrolloffset);

	$(window).on("scroll", function() {

		scrolloffset = $(this).scrollTop();
		checkScroll(scrolloffset);

	});

	function checkScroll(scrolloffset) {
		if (scrolloffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	// Smooth scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this);
		var blockId = $this.data("scroll");
		var blockoffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockoffset + 10
		}, 500);
	});


	// Menu nav toggle
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});


	// Collapse
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();
		var $this = $(this);
		var blockId = $this.data("collapse");
		$this.toggleClass("reactive");
	});


	// Slider
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
        slidesToScroll: 1
	});

});