$(function() {

    /* Fixed Header */
    let header = $("#header");
    let intro = $(".container--intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    checkScroll(scrollPos, introH)

    $(window).on('scroll resize', function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smooth scroll */
    $('[data-scroll]').on("click", function(event) {
        event.preventDefault();

        let blockID = $(this).data("scroll");
        let blockOffset = $(blockID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: blockOffset - 70
        }, 500);

    });


    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    /* Reviews */
    let slider = $("#reviewsSlider");

    slider.slick ({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });


    /*My contact*/
    $("#logo").mouseenter(function() {
        $("#arrow").addClass("active");
    })
        .mouseleave(function() {
            $("#arrow").removeClass("active");
            
            $("#by").removeClass("active");
    });

    $("#arrow").mouseenter(function() {
        $("#arrow").addClass("active");
    });

    $("#arrow").on("click", function(event) {
        event.preventDefault();

        $('#by').addClass("active");
    });

    $("#header").mouseleave(function(){
        $("#arrow").removeClass("active");

        $("#by").removeClass("active");
    });
});