jQuery(document).ready(function ($) {
    // Your code here

    TweenMax.fromTo(".line01", 4, { drawSVG: "100% 100%", autoAlpha: 0, display: "none", ease: Power1.easeOutIn }, { drawSVG: "0% 100%", autoAlpha: 1, display: "block", ease: Power4.easeInOut }, 0);

    TweenMax.fromTo(".line02", 4, { drawSVG: "100% 100%", autoAlpha: 0, display: "none", ease: Power1.easeOutIn }, { drawSVG: "0% 100%", autoAlpha: 1, display: "block", ease: Power4.easeInOut }, 0);

    TweenMax.fromTo(".arrow01", 1, { drawSVG: "50% 50%", autoAlpha: 0, display: "none", }, { drawSVG: "0% 100%", autoAlpha: 1, display: "block", ease: Power4.easeOutIn, delay: 3.1 }, 0);

    TweenMax.fromTo(".arrow02", 1, { drawSVG: "50% 50%", autoAlpha: 0, display: "none", }, { drawSVG: "0% 100%", autoAlpha: 1, display: "block", ease: Power4.easeOutIn, delay: 3.175 }, 0);

    $(".banner-img").fadeIn(1500);
    //$(".banner-text").css("display", "none");
    $(".banner-text").delay(500).fadeIn(1500);

    // window.alert( "ready!" );
    $("#highered-popout").css("display", "none");
    $("#fold-arrow").css("display", "none");

    $("#highered").click(function () {
        $("#highered-popout").slideToggle("slow");

        if ($("#fold-arrow").is(':hidden')) {
            $("#fold-arrow").delay(400).fadeIn("slow");
        }

    });

    //Back button click toggle

    $("#backbtn-wrapper").click(function () {
        $("#highered-popout").slideToggle("slow");
    });
});