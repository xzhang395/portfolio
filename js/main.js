
$(document).ready(function () {
  $(window).resize(function(){location.reload();});
  var h = window.innerHeight;
  $('#stop-motion').css('height',h);
  // Barba.Pjax.start();
  // Barba.Prefetch.init();
//   var $body = $('body'),
//   $main = $('#main'),
//   $site = $('html, body'),
//   transition = 'fade',
//   smoothState;

// smoothState = $main.smoothState({
//   onBefore: function($anchor, $container) {
//       var current = $('[data-viewport]').first().data('viewport'),
//           target = $anchor.data('target');
//       current = current ? current : 0;
//       target = target ? target : 0;
//       if (current === target) {
//           transition = 'fade';
//       } else if (current < target) {
//           transition = 'moveright';
//       } else {
//           transition = 'moveleft';
//       }
//   },
//   onStart: {
//       duration: 400,
//       render: function (url, $container) {
//           $main.attr('data-transition', transition);
//           $main.addClass('is-exiting');
//           $site.animate({scrollTop: 0});
//       }
//   },
//   onReady: {
//       duration: 0,
//       render: function ($container, $newContent) {
//           $container.html($newContent);
//           $container.removeClass('is-exiting');
//       }
//   },
// }).data('smoothState');

  $('.one-time').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
    });
  var clientHeight = $( window ).height();
  $('.home-container').css('height', clientHeight);
  var elements = document.getElementsByTagName('script')

  Array.prototype.forEach.call(elements, function (element) {
    if (element.type.indexOf('math/tex') != -1) {
      // Extract math markdown
      var textToRender = element.innerText || element.textContent;

      // Create span for KaTeX
      var katexElement = document.createElement('span');

      // Support inline and display math
      if (element.type.indexOf('mode=display') != -1) {
        katexElement.className += "math-display";
        textToRender = '\\displaystyle {' + textToRender + '}';
      } else {
        katexElement.className += "math-inline";
      }

      katex.render(textToRender, katexElement);
      element.parentNode.insertBefore(katexElement, element);
    }
  });

  var frameNum = $("#stop-motion").children().length;
  var step = Math.floor(100 / frameNum);
  var currentimg = 1;
  
  //when slider changed value
  $(document).on('input', '#slider', function () {
    var currentval = $(this).val();
      //what is the current frame
    for (var i = 1; i < (frameNum + 1); i++) {
      if (currentval < i * step && currentval >= (i - 1) * step) {
        currentimg = i;
      }
    }
    for (var j = 0; j < (frameNum); j++) {
      if ((currentimg - 1) == j) {
        $("img:nth-child(" + (j+1) + ")").css("opacity", "1");
      }
      else {
        $("img:nth-child(" + (j+1) + ")").css("opacity", "0");
      }
    }
    if (currentval>98){
      window.location.href = "works";
      console.log("hi");
    }

  });
  $('.center').slick({
    centerMode: true,
    infinite: false,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow:'<button type="button" class="prev">Previous</button>',
    nextArrow:'<button type="button" class="next">Previous</button>',    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
})
