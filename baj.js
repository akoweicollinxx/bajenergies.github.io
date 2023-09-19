$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });


    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, Options = 2000);
    });

    $('.press a[href*="#"]').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, Options = 2000);
    });
    
    

    $('#up').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: 0
        }, Options = 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

$(document).ready(function(){
    $('.acc .accent-wrapper').click(function(){
        $('.acc .accent-wrapper').removeClass("checked");
        $(this).addClass("checked");


        var selectedreview = $(this).attr("data-checker");
        $('.right').removeClass("active").hide();

        $('.right.' + selectedreview).addClass("active").show();
    });
});

let more =document.querySelectorAll('.more');
for (let i = 0; i<more.length; i++){
    more[i].addEventListener('click', function(){
        more[i].parentNode.classList.toggle('active')
    })
}