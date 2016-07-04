/**
    * Parallax
    * Handle Content on Slider
    * ScrollTop
    * Responsive Texts
    * Reservation
    * Blog Mansory
    * Handle Menu
    * Menu Isotop
    * Google Map
    * Twitter Fetch
    * Testimonial
    * Scroll Texts
    * Go To Top
    * Culi FlexSlider
    * Animation
    * Mailchimp
    * Remove Preloader
*/

;(function($) {

    'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // parallax
    var parallax = function () {
        (function () {
            if($('.slide-section').hasClass('culi-parallax')) // check top has or no culi-parallax
            {
                $('.slide-section').addClass('slide-dark');
                $('.slide-section').parallax('100%', 0.5);
            }
        })();
    };

    // handle content on slider
    var handleContentSlider = function () {
        (function() {
            if( $( ".slide-section" ).data('overlay') != undefined ) // check has or hasn't overlay
                if ( $( ".slide-section" ).data('overlay').toString().toLowerCase() ==="true" )
                    $('.slide-section .mobile-event').before('<div class="overlay"></div>');

            function addHeight () { // add height for section slide
            	$('.slide-section').css('height', $(window).height());
            }

            function middleSlideContent () { // middle for slide content
                var windowHeight= $('.slide-section').height();
                var contentHeight = $('.slide-section .content').outerHeight();
                var logoHeight = $('.slide-section .header .logo-img').outerHeight();
                var margin = (windowHeight - contentHeight- logoHeight) / 2;

                if ( $(window).width() < 479 ) {
                    logoHeight = 180;
                    margin = (windowHeight - contentHeight) / 2  - logoHeight;
                }
                else if ( $(window).width() < 975 ) {
                    logoHeight = 170;
                    margin = (windowHeight - contentHeight) / 2  - logoHeight;
                }
                $('.slide-section .content').css('margin-top', margin + 'px');
            }

            function middleFlexContent () { // middle for flex slide content
                // setup image left and image right for slide
                if ( $(window).width() <= 479 ) {
                	$('.btn-slide').css('bottom','30px');
                	$('.img-items .img-left').css({'margin-bottom':'0', 'margin-top':'-110px'});
                	$('.img-items .img-right').css({'top':'90px'});
                }
                else if ( $(window).width() <= 975 && $(window).width() > 480 ) {
                	$('.btn-slide').css('bottom','30px');
                	$('.img-items .img-left').css({'margin-bottom':'0', 'margin-top':'-90px'});
                	$('.img-items .img-right').css({'top':'134px'});
                }
                else if ( $(window).width() > 991 ) {
                	$('.btn-slide').css('bottom','100px');
                	$('.img-items .img-left').css({'margin-bottom':'200px', 'margin-top':'0'});
                	$('.img-items .img-right').css({'top':'180px'});
                	$('.slide-section .content').css('margin-top', '172px');
                }
            }

            if ( !$().flexslider ) {
	            addHeight();
	            $(window).on("resize", addHeight);
        	} else {
	            middleFlexContent();
	            $(window).on("resize", middleFlexContent);
        	}

            middleSlideContent();
            $(window).on("resize", middleSlideContent);
        })();
    };

    var scrollTop = function() {
        $('.slide-section .mainnav ul > li > a, #top .btn-slide, .btn-reser').on('click',function() {
            var anchor = $(this).attr('href').split('#')[1];
            if ( anchor ) {
                if ( $('#'+anchor).length > 0 ) {
                    var target = $('#'+anchor).offset().top;
                    $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
                }
            } // if anchor
            return false;
        });
    };

    // respnsive texts
    var responsiveText = function () {
        if ( $().fitText ) {
            $('.slide-section .content  h1').fitText(1.3, { minFontSize: '21px', maxFontSize: '48px' });
            $('.slide-section .content h4').fitText(1.3, { minFontSize: '11px', maxFontSize: '18px' });
            $('.slide-section .content h6').fitText(1.3, { minFontSize: '8px', maxFontSize: '13px' });
        }
    };

    // reservation form
    var reservation = function () {
        $('.time + ul li a').on('click', function () { // time in combobox at RESERVE A TABLE
            $('.time').empty().append($(this)[0].innerHTML);
            $('.time').parent().removeClass('open');
            return false;
        });

        $('.people + ul li a').on('click', function () { // many people in combobox at RESERVE A TABLE
            $('.people').empty().append($(this)[0].innerHTML);
            $('.people').parent().removeClass('open');
            return false;
        });
    };

    // blog mansory
    var restroMansory = function () {
        if ( $().isotope ) {
           var $container = $('.posts-container');
           $container.imagesLoaded(function() {
              $container.isotope({
                 itemSelector: '.post-item',
                 transitionDuration: '1s',
                 layoutMode: 'masonry',
                 masonry: { columnWidth: $container.width() / 12 }
              }); // isotope
           });

           $(window).resize(function() {
              $container.isotope({
                 masonry: { columnWidth: $container.width() / 12 }
              });
           }); // relayout
        };
    };

    // handle menu header
    var menu = function () {
        var menuActive = false;
        $('.mobile-event').append($('.top')[0].innerHTML);

        (function () {
            function addMobile () {
                $('#top').removeClass('mobile');
                $('.mobile-event .mainnav').css({'opacity' : '0'});
                menuActive = false;
                if ( $(window).width() < 979 ) {
                    $('#top').addClass('mobile');
                    $('.mobile-event .btn-menu').removeClass('menuActive').removeClass('menu-close');
                }
            }
            $(window).on("resize", addMobile);
            $(document).on("ready", addMobile);
        })();

        $('.btn-menu').on('click',function () {
            if ( menuActive === false ) {
                menuActive = true;
                $('.mobile-event .mainnav').animate({'opacity' : '1'},600);
                $('.mobile-event .btn-menu').addClass('menuActive').addClass('menu-close');
            } else {
                menuActive = false;
                $('.mobile-event .mainnav').animate({'opacity' : '0'},600);
                setTimeout(function() {
                    $('.mobile-event .btn-menu').removeClass('menuActive').removeClass('menu-close');
                }, 200);
            }
        });
    };

    // menu isotop
    var menuIsotop = function () {
        if ( $().isotope ) {
            var $container = $('.portfolio-container');

            $container.imagesLoaded(function(){
               $container.isotope({
                itemSelector: '.col-md-4',
                columnWidth: '.col-md-4',
                transitionDuration: '1s'
               }); // end isotope
            });

            $('.class-filter li').on('click',function(){
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-container').isotope({ filter: selector });
                return false;
            }); // on click

            $('#menu .class-filter li a').on('click', function () { // add state active for element a after click at OUR MENU
                $('#menu .class-filter li a').removeClass('active');
                $(this).addClass('active');
            });

            $('.class-filter li:nth-child(1) a').click();
        }; // if isotope exists
    };

    // google map
    var googleMap = function () {
        $("#map").goMap({ // load map
            markers: [{  
                address: 'S Street Viaduct, New York, United States', 
                title: 'marker title 1',
                icon: 'images/pin.png'
            }],
            scrollwheel: false, 
            disableDoubleClickZoom: false,
            zoom: 16,
            maptype: 'ROADMAP'
        });
    };

    // twitter
    var twitter = function () {
        if ( $().tweet ) {
            $('.list-tiwtter').each(function () {
                var $this = $(this);
                $this.tweet({
                    username: $this.data('username'),
                    join_text: "auto",
                    avatar_size: null,
                    count: $this.data('number'),
                    template: "{text} {time}",
                    loading_text: "loading tweets...",
                    modpath: $this.data('modpath')      
                }); // tweet
            }); // lastest-tweets each
        };
    };

    // testimonial
    var testimonial = function () {
        $("#owl-carousel").owlCarousel({
            autoPlay: 6000, 
            items : 1,
            paginationSpeed : 1000,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet : [768,1],
            itemsMobile : [479,1]
        });
    };

    // scroll texts
    var scrollText = function () {
        if ( $('.slide-section').hasClass('scroll-texts') ) {
        	var slide = '.control-slider .flex-active-slide ';
            var current = 1, height, numberDivs, first;
            height = $('.text-scroll').height(); 
            numberDivs = $('.text-scroll').children().length; 
            first = $('.text-scroll h1:nth-child(1)');

            setInterval(function() {
               var number = current * -height;
               first.css('margin-top', number + 'px');
               if (current === numberDivs) {
                 first.css('margin-top', '0px');
                 current = 1;
               } else current++;
            }, 2500);
        }
    };

    // go to top
    var goTop = function () {
        $(window).scroll(function () {
           if ($(this).scrollTop() > 800 ) {
              $('#bttop').addClass('show');
           } else {
              $('#bttop').removeClass('show');
           }
        }); 
        
        $('#bttop').on('click', function () {
           $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
           return false;
        });
    };

    // flexslider api
    var culiFlex = function () {
        if ( $().flexslider ) {
            $('.content h4').css({'top' : '-10%', 'opacity' : 0 });
            $('.content .text-scroll').css({'top' : '-20%', 'opacity' : 0 });
            $('.content h6').css({'top' : '-20%', 'opacity' : 0 });
            $('.content .btn-reser').css({'bottom' : '-10%', 'opacity' : 0 });

            $('.control-slider').each(function() {
                $(this).find('.flexslider').flexslider({
                    animation: 'fade',
                    animationLoop: true,
                    slideshow: false,
                    slideshowSpeed: 6000,
                    animationSpeed: 800,
                    pauseOnHover: true, 
                    pauseOnAction:true,
                    controlNav: false,
                    directionNav: true,
                    prevText: '<i class="fa fa-angle-left"></i>',
                    nextText: '<i class="fa fa-angle-right"></i>',
                    controlsContainer: '.flex-container',
                    start: function(slider) {
                        $('.control-slider .flex-active-slide .content h4').stop().transition({top: '0', opacity: '1'}, 1200);
                        $('.control-slider .flex-active-slide .content .text-scroll').stop().transition({top: '0', opacity: '1'}, 1200);
                        $('.control-slider .flex-active-slide .content h6').stop().transition({top: '0', opacity: '1'}, 1200);
                        $('.control-slider .flex-active-slide .content .btn-reser').stop().transition({bottom: '0', opacity: '1'}, 1200);

                        $('.control-slider .flex-active-slide .img-items .img-right').stop().transition({right: '0', opacity: '1'}, 1200);
                        $('.control-slider .flex-active-slide .img-items .img-left').stop().transition({left: '0', opacity: '1'}, 1200);
                    },
                    before: function(slider) {
                        $('.control-slider .flex-active-slide .content h4').stop().transition({top: '-10%', opacity: '0'}, 1200);
                        $('.control-slider .flex-active-slide .content .text-scroll').stop().transition({top: '-20%', opacity: '0'}, 1200);
                        $('.control-slider .flex-active-slide .content h6').stop().transition({top: '-20%', opacity: '0'}, 1200);
                        $('.control-slider .flex-active-slide .content .btn-reser').stop().transition({bottom: '-10%', opacity: '0'}, 1200);

                        $('.control-slider .flex-active-slide .img-items .img-right').stop().transition({right: '-10%', opacity: '0'}, 1200);
                        $('.control-slider .flex-active-slide .img-items .img-left').stop().transition({left: '-10%', opacity: '0'}, 1200);
                    },
                    after: function(slider) {
                        responsiveText();
                        $('.control-slider .flex-active-slide .content h4').stop().transition({top: '0', opacity: '1'}, 1200);
                        $('.control-slider .flex-active-slide .content .text-scroll').stop().transition({top: '0', opacity: '1'}, 1200);
                        $('.control-slider .flex-active-slide .content h6').stop().transition({top: '0', opacity: '1'}, 1200);
                        $('.control-slider .flex-active-slide .content .btn-reser').stop().transition({bottom: '0', opacity: '1'}, 1200);

                        $('.control-slider .flex-active-slide .img-items .img-right').stop().transition({right: '0', opacity: '1'}, 1200);
                        $('.control-slider .flex-active-slide .img-items .img-left').stop().transition({left: '0', opacity: '1'}, 1200);
                    }
                }); // end flexslider
            }); // end each
        }
    };

    // animation
    var animate = function () {
        $('.culi-animation').each( function() {
            if( !isMobile.any() ) {
                var orElement = $(this),
                orAnimationClass = orElement.data('animation'),
                orAnimationDelay = orElement.data('animation-delay'),
                orAnimationOffset = orElement.data('animation-offset'),
                effect = orElement.data('portfolio-effect');

                orElement.css({
                    '-webkit-animation-delay':  orAnimationDelay,
                    '-moz-animation-delay':     orAnimationDelay,
                    'animation-delay':          orAnimationDelay
                });

                orElement.waypoint(function () {
                orElement.addClass('animated ' + effect ).addClass(orAnimationClass);
                },{
                   triggerOnce: true,
                   offset: orAnimationOffset
                });
            } else {
                $('.culi-animation').addClass('animated');
            }
        });
    };

    // send mail
    var ajaxSubscribe = {
      obj: {
         subscribeEmail    : $('#subscribe-email'),
         subscribeButton   : $('#subscribe-button'),
         subscribeMsg      : $('#subscribe-msg'),
         subscribeContent  : $("#subscribe-content"),
         dataMailchimp     : $('#subscribe-form').attr('data-mailchimp'),
         success_message   : '<div class="notification_ok">Thank you for joining our mailing list. Please check your email for a confirmation link.</div>',
         failure_message   : '<div class="notification_error">There was a problem processing your submission.</div>',
         noticeError       : '<div class="notification_error">{msg}</div>',
         noticeInfo        : '<div class="notification_error">{msg}</div>',
         basicAction       : 'mail/subscribe.php',
         mailChimpAction   : 'mail/subscribe-mailchimp.php'
      },
      eventLoad: function() {
         var objUse = ajaxSubscribe.obj;
         $(objUse.subscribeButton).on('click', function() {
            if ( window.ajaxCalling ) return;
            var isMailchimp = objUse.dataMailchimp === 'true';

            if ( isMailchimp ) {
              ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
            } else {
              ajaxSubscribe.ajaxCall(objUse.basicAction);
            }
         });
      },
      ajaxCall: function (action) {
         window.ajaxCalling = true;
         var objUse = ajaxSubscribe.obj;
         var messageDiv = objUse.subscribeMsg.html('').hide();
         $.ajax({
            url: action,
            type: 'POST',
            dataType: 'json',
            data: {
               subscribeEmail: objUse.subscribeEmail.val()
            },
            success: function (responseData, textStatus, jqXHR) {
               if ( responseData.status ) {
                  objUse.subscribeContent.fadeOut(500, function () {
                     messageDiv.html(objUse.success_message).fadeIn(500);
                  });
               } else {
                  switch (responseData.msg) {
                  case "email-required":
                     messageDiv.html(objUse.noticeError.replace('{msg}','Email is required.'));
                     break;
                  case "email-err":
                     messageDiv.html(objUse.noticeError.replace('{msg}','Email invalid.'));
                     break;
                  case "duplicate":
                     messageDiv.html(objUse.noticeError.replace('{msg}','Email is duplicate.'));
                     break;
                  case "filewrite":
                     messageDiv.html(objUse.noticeInfo.replace('{msg}','Mail list file is open.'));
                     break;
                  case "undefined":
                     messageDiv.html(objUse.noticeInfo.replace('{msg}','undefined error.'));
                     break;
                  case "api-error":
                     objUse.subscribeContent.fadeOut(500, function () {
                        messageDiv.html(objUse.failure_message);
                     });
                  }
                  messageDiv.fadeIn(500);
               }
            },
            error: function (jqXHR, textStatus, errorThrown) {
               alert('Connection error');
            },
            complete: function (data) {
               window.ajaxCalling = false;
            }
         });
      }
    };

    // remove preloader
    var removePreloader = function() {
        $('.loader').fadeOut('slow',function () {
            $(this).remove();
        });
    };

    // date picker
    var datePicker = function() {
        $( "#datepicker" ).datepicker({
            dateFormat: 'dd/mm/yy'
        }); // set datepicker
    }

    $(function() {
        parallax();
        menu();
        restroMansory();
        menuIsotop();
        reservation();
        animate();
        testimonial();
        scrollTop();
        goTop();
        culiFlex();
        responsiveText();
        scrollText();
        handleContentSlider();
        datePicker();
        ajaxSubscribe.eventLoad();
        removePreloader();
        googleMap();
        //twitter();
    });

})(jQuery);