$(document).foundation()

/* Projects Page */

$(document).on('load', function() {
  $('.project-body').css('dispay','none');
  $('.image-holder').css('dispay','none');
})
MotionUI.animateIn('li.is-active .project-body', 'slide-in-right');
MotionUI.animateIn('.image-holder', 'fade-in');


/* Change slide on scroll */
//Firefox
$(window).bind('DOMMouseScroll', function(e){
    if(e.originalEvent.detail * 100 > 0) {
        //scroll down
        $('.orbit-next').click();
    }else {
        //scroll up
        $('.orbit-previous').click();
    }

    //prevent page fom scrolling
    return false;
});

//IE, Opera, Safari
$(window).bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta  < 0) {
        //scroll down
        $('.orbit-next').click();
    }else {
        //scroll up
        $('.orbit-previous').click();
    }

    //prevent page fom scrolling
    return false;
});
/* Carousel Deep Linking */

$('#button-1').click(function(e) {
  e.preventDefault();
  $('#button1').click();
});

$('#button-2').click(function(e) {
  e.preventDefault();
  $('#button2').click();
});

$('#button-3').click(function(e) {
  e.preventDefault();
  $('#button3').click();
});

$('#button-4').click(function(e) {
  e.preventDefault();
  $('#button4').click();
});

$('#button-5').click(function(e) {
  e.preventDefault();
  $('#button5').click();
});

$('#button11').click(function(e) {
  e.preventDefault();
  $('#button1').click();
});

$('#button12').click(function(e) {
  e.preventDefault();
  $('#button2').click();
});

$('#button13').click(function(e) {
  e.preventDefault();
  $('#button3').click();
});

$('#button14').click(function(e) {
  e.preventDefault();
  $('#button4').click();
});

$('#button15').click(function(e) {
  e.preventDefault();
  $('#button5').click();
});

function slideNumber() {
  var $slides = $('.orbit-slide');
  var $activeSlide = $slides.filter('.is-active');
  var activeNum = $slides.index($activeSlide) + 1;
  var activeLink = $slides.index($activeSlide);
  $('.orbit-external-control li.is-active').removeClass('is-active');
  $('.orbit-external-control li').eq(activeLink).addClass('is-active');
  $('.orbit-external-control-button button.is-active').removeClass('is-active');
  $('.orbit-external-control-button button').eq(activeLink).addClass('is-active');
  MotionUI.animateIn('li.is-active .project-body', 'slide-in-right');
}

$('[data-orbit]').on('slidechange.zf.orbit', slideNumber);


/* Service Page */

$('.service-central-body').css('display','none');
MotionUI.animateIn('.service-central-body','slide-in-left');

$("#web-service").css('display','none');
$("#graphic-service").css('display','none');
$("#motion-service").css('display','none');
MotionUI.animateIn('#web-service','slide-in-right', function() {
  MotionUI.animateIn('#graphic-service', 'slide-in-right', function() {
    MotionUI.animateIn('#motion-service', 'slide-in-right');
  });
});

/* About Page */


$('.our-process-body').mouseenter(function() {
  $(this).css({
    "transition": "0.6s",
    "transform-style": "preserve-3d",
    "-ms-transform": "scale(1.2, 1.2)",
    "-webkit-transform": "scale(1.2, 1.2)",
    "transform": "scale(1.2, 1.2)"
  });
});

$('.our-process-body').mouseleave(function() {
  $(this).css({
    "transition": "0.6s",
    "transform-style": "preserve-3d",
    "-ms-transform": "scale(1, 1)",
    "-webkit-transform": "scale(1, 1)",
    "transform": "scale(1, 1)"
  });
});

$('.client-callout').mouseenter(function() {
  $(this).css({
    "transition": "0.6s",
    "transform-style": "preserve-3d",
    "-ms-transform": "scale(1.1, 1.1)",
    "-webkit-transform": "scale(1.1, 1.1)",
    "transform": "scale(1.1, 1.1)",
    "z-index": "99",
    "box-shadow": "0 0 25px 2px #888888",
    "border": "none",
    "cursor": "pointer"
  });
});

$('.client-callout').mouseleave(function() {
  $(this).css({
    "transition": "0.6s",
    "transform-style": "preserve-3d",
    "-ms-transform": "scale(1, 1)",
    "-webkit-transform": "scale(1, 1)",
    "transform": "scale(1, 1)",
    "box-shadow": "none",
    "border": "1px solid rgba(10, 10, 10, 0.25)",
    "cursor": "normal"
  });
});

$('.career-callout').mouseenter(function() {
  $(this).css({
    "transition": "0.6s",
    "transform-style": "preserve-3d",
    "-ms-transform": "scale(1.2, 1.2)",
    "-webkit-transform": "scale(1.2, 1.2)",
    "transform": "scale(1.2, 1.2)",
    "z-index": "99",
    "cursor": "pointer",
    "background": "#f6303e"
  });
});

$('.career-callout').mouseleave(function() {
  $(this).css({
    "transition": "0.6s",
    "transform-style": "preserve-3d",
    "-ms-transform": "scale(1, 1)",
    "-webkit-transform": "scale(1, 1)",
    "transform": "scale(1, 1)",
    "cursor": "normal",
    "z-index": "1",
    "background": "#303e48"
  });
});

$(".dh-container").css('display','none');
$(".dh-container").each(function(i, e) {
  $(this).delay(i*300).fadeIn("slow");
})

$(document).on('load', function() {
  $('.story-image-holder').css('dispay','none');
})
MotionUI.animateIn('.story-image-holder', 'fade-in');


$(document).on('load', function() {
  $('.our-process-body').css('display', 'none');
  console.log('working');
});

$('.our-process-body').addClass('hinge-in-from-left');

/* Career */

$(".career-callout").css('display','none');
$(".career-callout").each(function(i, e) {
  $(this).delay(i*300).fadeIn("slow");
})

$('.apply-form').css('display', 'none');
$('.career-message').css('display', 'none');

$(".career-callout").on('click', function(e) {
  e.preventDefault();
  $(".career-callout").fadeOut('slow', function() {
    MotionUI.animateIn('.apply-form', 'slide-in-right');
  });
});

$('#apply').on('click', function(e) {
  e.preventDefault()
  $('.apply-form').fadeOut('slow', function() {
    MotionUI.animateIn('.career-message', 'slide-in-right');
  });
});


/* Mouse aware */

(function ($) {

    $.fn.directionalHover = function(options) {
        // Extend default plugin options
        var opts = $.extend({}, $.fn.directionalHover.defaults, options);

        // Create bit flags
        var FLAG_T = 1, // top
            FLAG_R = 2, // right
            FLAG_B = 4, // bottom
            FLAG_L = 8; // left

        // Create bit masks
        var tlMask = FLAG_T | FLAG_L,
            trMask = FLAG_T | FLAG_R,
            blMask = FLAG_B | FLAG_L,
            brMask = FLAG_B | FLAG_R;

        function slideOverlay(overlay, direction, px, py, ew, eh, ex, ey) {
            var cornerFlags = 0; // top|right|bottom|left

            if (py - ey <= eh / 2) cornerFlags ^= FLAG_T;
            if (px - ex >= ew / 2) cornerFlags ^= FLAG_R;
            if (py - ey >  eh / 2) cornerFlags ^= FLAG_B;
            if (px - ex <  ew / 2) cornerFlags ^= FLAG_L;

            findSide(cornerFlags, overlay, direction, px-ex, py-ey, ew/2, eh/2);
        }

        function findSide(flags, overlay, direction, x, y, w, h) {
            if (testMask(flags, tlMask)) {
                testTopLeftToBottomRight(x, y, w, h) ? setOverlayPosition(overlay, direction, 0, -w*2) : setOverlayPosition(overlay, direction, -h*2, 0);
            }
            else if (testMask(flags, trMask)) {
                testBottomRightToTopLeft(x, y, w, h) ? setOverlayPosition(overlay, direction, -h*2, 0) : setOverlayPosition(overlay, direction, 0, w*2);
            }
            else if (testMask(flags, blMask)) {
                testBottomRightToTopLeft(x, y, w, h) ? setOverlayPosition(overlay, direction, 0, -w*2) : setOverlayPosition(overlay, direction, h*2, 0);
            }
            else if (testMask(flags, brMask)) {
                testTopLeftToBottomRight(x, y, w, h) ? setOverlayPosition(overlay, direction, h*2, 0) : setOverlayPosition(overlay, direction, 0, w*2);
            }
        }

        function testMask(flags, mask) {
            return (flags & mask) === mask;
        }

        function testTopLeftToBottomRight(x, y, w, h) {
            return (h * x - w * y) < 0;
        }

        function testBottomRightToTopLeft(x, y, w, h) {
            return (w * (y-h) + h * x - w * h) < 0;
        }

        function setOverlayPosition(overlay, direction, top, left) {
            if (direction === 'in') {
                overlay.animate({
                    top: top,
                    left: left
                }, 0, function() {
                    overlay.stop().animate({
                        top: 0,
                        left: 0
                    }, opts.speed, opts.easing);
                });
            }
            else if (direction === 'out') {
                overlay.animate({
                    top: 0,
                    left: 0
                }, 0, function() {
                    overlay.stop().animate({
                        top: top,
                        left: left
                    }, opts.speed, opts.easing);
                });
            }
        }

        this.css({
            position: 'relative',
            overflow: 'hidden'
        });

        this.find('.' + opts.overlay).css({
            position: 'absolute',
            top: '-100%'
        });

        return this.each(function() {
            var container = $(this);

            container.hover(function(e) {
                slideOverlay(
                    container.find('.' + opts.overlay),
                    'in',
                    e.pageX,
                    e.pageY,
                    container.width(),
                    container.height(),
                    Math.floor(container.offset().left),
                    container.offset().top
                );
            }, function(e) {
                slideOverlay(
                    container.find('.' + opts.overlay),
                    'out',
                    e.pageX,
                    e.pageY,
                    container.width(),
                    container.height(),
                    Math.floor(container.offset().left),
                    container.offset().top
                );
            });
        });
    };

    // Plugin default options
    $.fn.directionalHover.defaults = {
        overlay: "dh-overlay",
        easing: "swing",
        speed: 400
    };

}(jQuery));

$('.dh-container').directionalHover();
