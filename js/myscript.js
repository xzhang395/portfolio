$(document).ready(function () {

    // Some random colors
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
    var numBalls = 0;
if ($(window).width()<480){
     numBalls = 10;
}else
{numBalls = 30;}
    const balls = [];

    for (var i = 0; i < numBalls; i++) {
        var ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 45)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()}em`;
        ball.style.height = ball.style.width;

        balls.push(ball);
        $('#home-space').append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
        var to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };

        var anim = el.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
                duration: (Math.random() + 1) * 2000, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    });

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //slick
    $('.one-time').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    //Progress Bar    
    var winHeight = $(window).height(),
        docHeight = $(document).height(),
        max, value;

    /* Set the max scrollable area */
    max = docHeight - winHeight;


    //offset anchor
    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 110);
    });

    //find the number of anchors/sections
    var numSec = $('.section').length;

    //append all anchors 
    if (numSec > 0) {
        for (i = 1; i <= numSec; i++) {
            var secName = $('#s' + i).text();
            $('#tags').append('<a class="anchor" id="a' + i + '" href="#s' + i + '">' + secName + '</a>');
        }


        //change tag when pass anchor point 
        var anchor_offset = 0;
        var image_offset = 0;

        $(window).on('scroll', function () {
            for (i = 1; i <= numSec; i++) {
                anchor_offset = $('#s' + i).offset().top - 200;
                if ($(window).scrollTop() > anchor_offset) {
                    $('.active').removeClass('active');
                    $('#a' + i).addClass('active');
                }
            }
            if ($('#process').length != 0) {
                image_offset = $('#process').offset().top - 200;
                if ($(window).scrollTop() > image_offset) {
                    $('#process').attr('src', '../assets/Bento/sense-making-fade.png');
                }
                else {
                    $('#process').attr('src', '../assets/Bento/sense-making.png');
                }
            }
        })
    };



    //Hide and show nav when scroll
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('nav').removeClass('nav-down').addClass('nav-up border');
            //            $('.project-sum').addClass('hidden');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
                //                $('.project-sum').removeClass('hidden');
            }
        }

        //remove nav border when at the top of the page 
        if (st < 60) {
            $('nav').removeClass('border');
            $('nav').addClass('transbg');
        }

        if (st > 60) {
            $('nav').removeClass('transbg');
        }

        //show nav if at page bottom
        if (st > max - 200) {
            $('nav').removeClass('nav-up').addClass('border');
        }

        //show sidebar only after scrolling x
        if (st > 300) {
            $('.project-sum').removeClass('hidden');
            $('.project-sum').addClass('shown');
        } else {
            $('.project-sum').addClass('hidden');
            $('.project-sum').removeClass('shown');
        }

        lastScrollTop = st;
    }


});