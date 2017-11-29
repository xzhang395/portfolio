
$(document).ready(function () {
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

  });
})
