$(function () {
    animateMenu();
    //Верхнє меню
    $('.menu-link').each(function (index, element) {
        $(element).click(function () {
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('html').animate({
                scrollTop: top
            }, 1400)
        })
    })
    //

    //Бокове меню
    $(window).bind('scroll', function (e) { animateMenu(); });
    $('.aside-li').each(function (index, element) {
        $(element).click(function () {
            let id = $(this).attr('href');
            let top = $(id).offset().top;
            $('html').animate({
                scrollTop: top
            }, 1400)
        })
    })

    function animateMenu() {
        let section1Top = 0;
        let section2Top = $('#about').offset().top - (($('#skills').offset().top - $('#about').offset().top) / 2);
        let section3Top = $('#skills').offset().top - (($('#works').offset().top - $('#skills').offset().top) / 2);
        let section4Top = $('#works').offset().top - (($('#contact').offset().top - $('#works').offset().top) / 2);
        let section5Top = $('#contact').offset().top - (($(document).height() - $('#contact').offset().top) / 2);

        $('.aside a').removeClass('active');
        if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top) {
            $('.aside  a.aside-li1').addClass('active');
        } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top) {
            $('.aside  .aside-li2').addClass('active');
        } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {
            $('.aside .aside-li3').addClass('active');
        } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top) {
            $('.aside  .aside-li4').addClass('active');
        } else if ($(document).scrollTop() >= section5Top) {
            $('.aside .aside-li5').addClass('active');
        }
    }
    //

    //Skills
    $('.image').each(function (index, element) {
        $(element).mouseover(function () {
            $('.image').eq(index).animate({
                width: '+=50',
                height: '+=30',
                opacity: 0.7
            }, 1000)
        })
        $(element).mouseout(function () {
            $('.image').eq(index).animate({
                width: '-=50',
                height: '-=30',
                opacity: 0.7
            }, 1000)
        })
    })

    //About
    $('.letter').each(function (index, element) {
        $(element).mouseover(function () {
            $('.letter').eq(index).animate({
                'margin-left': '+=250',
                width: '+=50',
                height: '+=50',
            }, 900, 'easeInOutQuart')
        })
        $(element).mouseout(function () {
            $('.letter').eq(index).animate({
                'margin-left': '-=250',
                width: '-=50',
                height: '-=50',
            }, 900, 'easeInOutQuart')
        })
    })

    //Works
    function randomizer() {
        let rand = Math.round(Math.random() * 999);
        return rand;
    }
    function randomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    $('.box').each(function (index, element) {
        $(element).mouseover(function () {
            // $('.box').eq(index).css("border-color", randomColor());
            // $('.boxesContainer').css("border-color", randomColor());
            // $('.number').eq(index).text(randomizer());
            // $('.box').eq(index).css("background-color", randomColor());
            let newColor1 = randomColor('#');
            let newColor2 = randomColor('#');
            let angle = Math.round(Math.random() * 360);
            let gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
            $('.grad').css({
                background: gradient
            });

            let newColor3 = randomColor('#');
            let newColor4 = randomColor('#');
            let angle1 = Math.round(Math.random() * 360);
            let gradient1 = "linear-gradient(" + angle1 + "deg, " + newColor3 + ", " + newColor4 + ")";
            $('.box').eq(index).css({
                background: gradient1
            });
        })
    })
    //Contact
    var card = document.querySelector(".card");
    var playing = false;

    card.addEventListener('click', function () {
        if (playing)
            return;

        playing = true;
        anime({
            targets: card,
            scale: [{
                value: 1
            },
            {
                value: 1.4
            },
            {
                value: 1,
                delay: 250
            }],
            rotateY: {
                value: '+=180',
                delay: 200
            }, easing: 'easeInOutSine',
            duration: 400,
            complete: function (anim) {
                playing = false;
            }
        });
    });
})






