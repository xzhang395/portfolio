
$(document).ready(function () {
  if (localStorage.getItem('project') == null) { localStorage.setItem("project", 0); } 
  $(window).resize(function(){location.reload();});
  var h = window.innerHeight;
  var w = window.innerWidth;
  $('#stop-motion').css('height',h);
  $('#stop-motion').css('width',w);
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
    if (currentval==0){
      $('.headline').addClass('animated fadeIn');
      $('.headline').removeClass(' fadeOut');
    }else{ $('.headline').addClass('animated fadeOut');
    $('.headline').removeClass(' fadeIn'); }
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
$(".slick-slide").click(function() {
  var index = $(this).attr("data-slick-index");
  localStorage.setItem("project", index);
});
var cp = parseInt(localStorage.getItem('project'));
cp+=1;
$( ".slick-slide:nth-child("+ cp +")").remove();
})
