// Team slider
$('.team_slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoPlay: true,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})
