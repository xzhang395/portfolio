$(document).ready(function () {
    // resize();
    // window.onresize = resize;
    // function resize() {
    //     // if ($(window).width() < 779) {
    //     //     $(".ui").remove();
    //     //     $(".project-descrp-R").css(
    //     //         {
    //     //             "width": "100%",
    //     //             "float": "none"
    //     //         }
    //     //     );
    //     //     $(".project-descrp-L").css(
    //     //         {
    //     //             "width": "100%",
    //     //             "float": "none"
    //     //         }
    //     //     );
    //     //     $(".p1").append("<a class='ui' href='projects/collaborative-search.html'><img src='assets/earnist.png' alt='collaborative search' data-toggle='tooltip' title='See Project Details'></a>");
    //     //     $(".p2").append("<a class='ui' href='projects/projects/earnist.html'><img src='assets/earnist.png' alt='Earnist' data-toggle='tooltip' title='See Project Details'></a>");
    //     //     $(".p3").append("<a class='ui' href='projects/medshare.html'><img src='assets/earnist.png' alt='MedShare' data-toggle='tooltip' title='See Project Details'></a>");
    //     //     $(".p4").append("<a class='ui' href='projects/moquality.html'><img src='assets/earnist.png' alt='MoQuality' data-toggle='tooltip' title='See Project Details'></a>");
    //     //     $(".ui").css(
    //     //         {
    //     //             "width": "100%",
    //     //             "float": "none"
    //     //         }

    //     //     );
    //     // }
    // }
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

        $(window).on('scroll', function () {
            for (i = 1; i <= numSec; i++) {
                anchor_offset = $('#s' + i).offset().top - 200;
                if ($(window).scrollTop() > anchor_offset) {
                    $('.active').removeClass('active');
                    $('#a' + i).addClass('active');
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