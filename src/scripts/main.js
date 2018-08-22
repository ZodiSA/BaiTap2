// Main


$(document).ready(function(){
	CanhCamResponsive();
	homeSlider();
	homePartner();
})

function homeSlider(){
	var synce1 = $('#synce1')
	$(synce1).owlCarousel({
		items: 1,
		dots: true,
		nav: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		loop: true,
		responsive : {
			480 : {
			},
			768 : {

			},
			992 : {
				nav: false,
				dots: false
			}
		}
	});
}

function homePartner(){
	$('.home_partner .partner-list .owl-for').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		loop: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive : {
			480 : {
				items: 2,
			},
			768 : {
				items: 3,
			},
			992 : {
				items: 6
			}
		}
	});
}
// Plugins
function CanhCamResponsive() {
	// Set BG Resposive
	$('[bg-img]').each(function () {
		var bgimg = $(this).attr('bg-img');
		var pos = $(this).attr('bg-pos');
		var size = $(this).attr('bg-size');
		if (pos && pos.length > 0) {
			$(this).css({
				"background-position": pos
			});
		} else {
			$(this).css({
				"background-position": "center center"
			});
		}
		if (size && size.length > 0) {
			$(this).css({
				"background-size": size
			});
		} else {
			$(this).css({
				"background-size": "cover"
			});
		}
		$(this).css({
			"background-image": "url(" + bgimg + ")"
		});
	});

	$('[bg-img-responsive]').each(function () {
		var bgimg = $(this).attr('bg-img-responsive');
		var bgimgsm = $(this).attr('bg-img-responsive-sm');
		var bgimgxs = $(this).attr('bg-img-responsive-xs');
		if ($(window).width() >= 992) {
			$(this).css({
				"background-image": "url(" + bgimg + ")",
				"background-position": "center center",
				"background-size": "cover"
			});
		} else if ($(window).width() < 992 && $(window).width() > 768) {
			$(this).css({
				"background-image": "url(" + bgimgsm + ")",
				"background-position": "center center",
				"background-size": "cover"
			});
		} else {
			$(this).css({
				"background-image": "url(" + bgimgxs + ")",
				"background-position": "center center",
				"background-size": "cover"
			});
		}
	});

	$('[img-src-responsive]').each(function () {
		var bgimg2 = $(this).attr('img-src-responsive');
		var bgimg2sm = $(this).attr('img-src-responsive-sm');
		var bgimg2xs = $(this).attr('img-src-responsive-xs');
		if ($(window).width() >= 992) {
			$(this).attr("src", "" + bgimg2 + "");
		} else if ($(window).width() < 992 && $(window).width() > 768) {
			$(this).attr("src", "" + bgimg2sm + "");
		} else {
			$(this).attr("src", "" + bgimg2xs + "");
		}
	});

}

$(function () {
		CanhCamResponsive();
});

$(window).resize(function () {
		CanhCamResponsive();
});
