$(document).ready(function () {

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    // Some random colors
    if (isMobile == false) {
        const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
        var numBalls = 0;
        if ($(window).width() < 480) {
            numBalls = 10;
        } else { numBalls = 30; }
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
    }

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