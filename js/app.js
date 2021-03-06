

$(document).ready(function () {
    $(window).on('load', function () {
        $('.preloader').addClass('complete');
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd")
        }
        else {
            $(".sticky").removeClass("stickyadd")
        }
    })

    var typed = new Typed(".element", {
        strings: ["Ronak Patel", "a Front-End Developer", "a Web Developer", "a UI Developer", " a UX/UI Designer"],
        smartBackspace: true,
        typeSpeed: 100,
        backspeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000

    });

    //Progress bars 

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function () {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style", "Width:95%; transition:1s all");
            p[1].setAttribute("style", "Width:85%; transition:1.5s all");
            p[2].setAttribute("style", "Width:90%; transition:1.8s all");
            p[3].setAttribute("style", "Width:75%; transition:2.1s all");
            p[4].setAttribute("style", "Width:80%; transition:2.4s all");
            p[5].setAttribute("style", "Width:70%; transition:2.7s all");
            p[6].setAttribute("style", "Width:89%; transition:3s all");
            p[7].setAttribute("style", "Width:82%; transition:3.3s all");
            p[8].setAttribute("style", "Width:95%; transition:3.7s all");
            p[9].setAttribute("style", "Width:85%; transition:4s all");
            p[10].setAttribute("style", "Width:90%; transition:4.1s all");
            p[11].setAttribute("style", "Width:75%; transition:4.3s all");
            p[12].setAttribute("style", "Width:80%; transition:4.4s all");
            p[13].setAttribute("style", "Width:70%; transition:4.6s all");
            p[14].setAttribute("style", "Width:89%; transition:4.8s all");
            p[15].setAttribute("style", "Width:82%; transition:5s all");

        },
        offset: '90%'
    })
    // var filterizd = $('.filter-container').filterizr({
    //     animationDuration: 0.5,
    // });

    $(function () {
        $('.filter-container').filterizr({
            animationDuration: 0.5,
        });
    });


    $('#slider').owlCarousel({
       
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    

});

