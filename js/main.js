$(function () {

    // Preloader
    $(window).on("load", function () {
        setTimeout(function() {
            $(".preloader").fadeOut("slow")
        }, 600)
    })

    // Colors Option Fanctionality
    $(".gear").click(function() {
        $(".colors-option").toggleClass("open");
        $(".gear-icon .gear").toggleClass("fa-spin")
    })

    $(".colors-option ul li").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    })

    // Add Class Scrolled To Navbar
    $(window).on("scroll", function() {
        let header = $(".header");
        if ($(window).scrollTop() >= header.innerHeight()) {
            if (! header.hasClass("scrolled")) {
                header.addClass("scrolled");
            }
        } else {
            header.removeClass("scrolled")
        }
    })

    // Add smooth scrolling on all links inside the navbar
    $(".navbar .nav-item .nav-link ").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    } // End if

});


    // Products Carousel
    $('#products-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    // Testimonials Carousel
    $('#testims-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
})