var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

new WOW().init();

$('.waveWrapper, .firstVideo, .counterBlock, .advantages, .secondVideo, .materials, .cta-block, .profitCalc, .footer-container').on('mousemove', function (event) {
    $('.circle.circle-1').css({
        transform: 'translate(-' + (event.clientX * 0.05) + '%, ' + (event.clientY * 0.05) + '%)'
    });
    $('.circle.circle-2').css({
        transform: 'translate(-' + (event.clientX * 0.03) + '%, ' + (event.clientY * 0.02) + '%)'
    });
    $('.circle.circle-3').css({
        transform: 'translate(' + (event.clientX * 0.02) + '%, -' + (event.clientY * 0.02) + '%)'
    });
    $('.circle.circle-4').css({
        transform: 'translate(-' + (event.clientX * 0.04) + '%, ' + (event.clientY * 0.03) + '%)'
    });
    $('.circle.circle-5').css({
        transform: 'translate(-' + (event.clientX * 0.06) + '%, ' + (event.clientY * 0.06) + '%)'
    });
    $('.circle.circle-6').css({
        transform: 'translate(' + (event.clientX * 0.12) + '%, -' + (event.clientY * 0.12) + '%)'
    });
    $('.circle.circle-7').css({
        transform: 'translate(' + (event.clientX * 0.02) + '%, -' + (event.clientY * 0.02) + '%)'
    });
    $('.circle.circle-8').css({
        transform: 'translate(-' + (event.clientX * 0.02) + '%, ' + (event.clientY * 0.01) + '%)'
    });
    $('.circle.circle-9').css({
        transform: 'translate(-' + (event.clientX * 0.1) + '%, ' + (event.clientY * 0.05) + '%)'
    });
});

var target = $('.counterBlock');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
var count = true;
$(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if((winScrollTop > scrollToElem) && count ){
        $('#circle1').circleProgress({
            value: 0.33,
            size: 144,
            fill: {color: '#5831B5'}
        }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text((stepValue*12).toFixed(0));
        });
        $('#circle2').circleProgress({
            startAngle: Math.PI / 4*3,
            value: 0.45,
            size: 144,
            fill: {color: '#5831B5'}
        }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text((stepValue*44).toFixed(0));
        });
        $('#circle3').circleProgress({
            startAngle: Math.PI / 4*2,
            value: 0.6,
            size: 144,
            fill: {color: '#5831B5'}
        }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text((stepValue*53).toFixed(0));
        });
        $('#circle4').circleProgress({
            startAngle: Math.PI / 3.5,
            value: 0.7,
            size: 144,
            fill: {color: '#5831B5'}
        }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text((stepValue*50).toFixed(0));
        });
        count = false;
    }
});

$(document).ready(function(){

});