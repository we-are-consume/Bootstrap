/* ==============================================
Parallax
=============================================== */
(function($) {
  "use strict";
	$(document).ready(function(){
    	  $(window).stellar({ 
    	horizontalScrolling: false,
    });  
});
})(jQuery);





/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
$(document).ready(function () {
    var $container = $('.portfolio-wrapper .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
	});
    $('.filter li a').click(function () {
        $('.filter li a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });
});
})(jQuery);





/*-----------------------------------------------------------------------------------*/
/* Pretty Photo
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
jQuery(document).ready(function(){
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: "light_square"
    });
});
})(jQuery);




/*-----------------------------------------------------------------------------------*/
/* SLIDER
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
$(document).ready(function() {
  //Sort random function
  function random(owlSelector){
    owlSelector.children().sort(function(){
		   });
} 
$("#owl-clients").owlCarousel({
    items:	4,
	navigation: true,
    navigationText: [
      "<i class='ion-ios7-arrow-back'></i>",
      "<i class='ion-ios7-arrow-forward'></i>"
      ],
    beforeInit : function(elem){
(elem);
    }
});
});
})(jQuery);





/*-----------------------------------------------------------------------------------*/
/* Slider
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
$(document).ready(function() {
  //Sort random function
  function random(owlSelector){
    owlSelector.children().sort(function(){
		   });
} 
$("#owl-teacher").owlCarousel({
   items:	3,
	 itemsDesktop : [1199,1],
   itemsDesktopSmall : [979,1],
	 itemsMobile : [600,1],
   navigation: true,
   navigationText: ["<i class='ion-ios7-arrow-back'></i>","<i class='ion-ios7-arrow-forward'></i>"],
});
});
})(jQuery);





/*-----------------------------------------------------------------------------------*/
/* Slider
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() { 
  var owl = $("#owl-learn"); 
  owl.owlCarousel({
  	autoPlay: 5000,
    navigation : true,
    singleItem : true,
    pagination : true,
    navigation :false,
	stopOnHover :true,
    paginationNumbers: false,
    transitionStyle : "backSlide"
  }); 
});








/*-----------------------------------------------------------------------------------*/
/* Feed BACk Slider
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
 
  $("#owl-feed").owlCarousel({ 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,
      pagination : true,
      paginationNumbers: false,
      stopOnHover: true,
      transitionStyle : "fade",
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false 
  }); 
});



/*-----------------------------------------------------------------------------------*/
/*  THEME PUNCH SLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
   revapi = jQuery('.tp-banner').revolution({
    delay:12000,
    startwidth:1170,
    startheight:800,
    hideThumbs:10,
    fullWidth:"on",
    forceFullWidth:"on"
  });

}); //ready




/*-----------------------------------------------------------------------------------*/
/* ANIMATION
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
  }
);
wow.init();
})(jQuery);



/*-----------------------------------------------------------------------------------*/
/* POPUP
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
$('.test-popup-link').magnificPopup({ 
  type: 'image'
	// other options
});
})(jQuery);


/*-----------------------------------------------------------------------------------*/
/* LOADER
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
$(window).load(function() {
	$(".loader").delay(300).fadeOut();
	$("#page-loader").delay(500).fadeOut("slow");
});
})(jQuery);



/*-----------------------------------------------------------------------------------*/
/* CONTACT FORM
/*-----------------------------------------------------------------------------------*/
(function($) {
  "use strict";
var form = $('#contact'),
    submit = form.find('[name="submit"]');
form.on('submit', function(e) {
  e.preventDefault();
  
  // avoid spamming buttons
  if (submit.attr('value') !== 'Send')
    return;
  
  var valid = true;
  form.find('input, textarea').removeClass('invalid').each(function() {
    if (!this.value) {
      $(this).addClass('invalid');
      valid = false;
    }
  });
  
  if (!valid) {
    form.animate({left: '0em'},  50)
        .animate({left:  '0em'}, 100)
        .animate({left:    '0'},  50);
  } else {
    submit.attr('value', 'Sending...')
          .css({boxShadow: '0 0 0em 0em rgba(225, 225, 225, 0.6)',
                backgroundColor: '#ccc'});
    // simulate AJAX response
    setTimeout(function() {
      // step 1: slide labels and inputs
      // when AJAX responds with success
      // no animation for AJAX failure yet
      form.find('label')
          .animate({left: '100%'}, 500)
          .animate({opacity: '0'}, 500);
    }, 1000);
    setTimeout(function() {
      // step 2: show thank you message after step 1
      submit.attr('value', 'Thank you :)')
            .css({boxShadow: 'none'});
    }, 2000);
    setTimeout(function() {
      // step 3: reset
      form.find('input, textarea').val('');
      form.find('label')
          .css({left: '0'})
          .animate({opacity: '1'}, 500);
      submit.attr('value', 'Send')
            .css({backgroundColor: '#f3835d'});
    }, 4000);
  }
});
})(jQuery);





/* ==============================================
Smooth Scroll To Anchor
=============================================== */
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('header a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});





/* ==============================================
Back to Top
=============================================== */

$(window).scroll(function(){
    if($(window).scrollTop() > 300){
      $("#back-to-top").fadeIn(600);
    } else{
      $("#back-to-top").fadeOut(600);
    }
  });
  
  $('#back-to-top, .back-to-top').click(function() {
      $('html, body').animate({ scrollTop:0 }, '1000');
      return false;
  });




/* ==============================================
Active Menu Item on Page Scroll
=============================================== */    
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('current');
      sections.removeClass('current');
 
      $(this).addClass('current');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
    }
  });
});




$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: true,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
});
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: true,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});
$(document).ready(function() {
	$('.popup-vedio').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: true,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
});
$('.popup-vedio').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: true,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});

(function($) {
  "use strict";
$('.video').magnificPopup({
  type: 'iframe', 
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }  
});
})(jQuery);

