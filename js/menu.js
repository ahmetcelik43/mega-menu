$(document).ready(function() {

    $('.menu-item.has-sub').mouseenter(function(e) {
        //const left = $(this).position().left;
        const childul = $(e.target).find('ul');
        //const fullwidth = window.innerWidth;
        //const first = $('.menu-item.has-sub').first().position().left;
        //const a = $(".menu-item").last().position().left - $(".menu-item").first().position().left
        //console.log(a)
        childul.eq(0).css({ "left": 100, "right": 100 })
    });

    $('.menu-item.has-sub').mouseover(function() {
        $('.overlay').fadeIn('fast');
    }).mouseleave(function() {
        $('.overlay').fadeOut("fast")
    });

});