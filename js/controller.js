
	$('.influencer-tab').click(function() {
		$('.brand-box-side-design .influencer-img').css('display' , 'block');
		$('.brand-box-side-design .brands-img').css('display' , 'none');
	});

	$('.brands-tab').click(function() {
		$('.brand-box-side-design .influencer-img').css('display' , 'none');
		$('.brand-box-side-design .brands-img').css('display' , 'block');
	});



	$('.brand-support-icon li').each(function(a) {
		$(this).attr('data-wow-delay', `${(a / 10) * 1.5}s`);
	});
	
	new WOW().init();


	// if visible 

	$.fn.isInViewport = function() {


	    var offset = $(this).offset();
	    if(!offset) return;
	    var elementTop = offset.top;
	    var elementBottom = elementTop + $(this).outerHeight();

	    var viewportTop = $(window).scrollTop();
	    var viewportBottom = viewportTop + $(window).height();

	    return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$('.mobile-sidebar-visible').click(function() {
		$('.sidebar').addClass('sidebar-visible');
	});

	$('.side-close').click(function() {
		$('.sidebar').removeClass('sidebar-visible');
	});

