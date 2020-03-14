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

$('.waveWrapper').on('mousemove', function (event) {
    $('.waveWrapper .circle.circle-1').css({
        transform: 'translate(-' + (event.clientX * 0.05) + '%, ' + (event.clientY * 0.05) + '%)'
    });
    $('.waveWrapper .circle.circle-2').css({
        transform: 'translate(-' + (event.clientX * 0.03) + '%, ' + (event.clientY * 0.02) + '%)'
    });
    $('.waveWrapper .circle.circle-3').css({
        transform: 'translate(' + (event.clientX * 0.07) + '%, -' + (event.clientY * 0.07) + '%)'
    });
    $('.waveWrapper .circle.circle-4').css({
        transform: 'translate(-' + (event.clientX * 0.04) + '%, ' + (event.clientY * 0.03) + '%)'
    });
    $('.waveWrapper .circle.circle-5').css({
        transform: 'translate(-' + (event.clientX * 0.06) + '%, ' + (event.clientY * 0.06) + '%)'
    });
    $('.waveWrapper .circle.circle-6').css({
        transform: 'translate(' + (event.clientX * 0.08) + '%, -' + (event.clientY * 0.08) + '%)'
    });
    $('.waveWrapper .circle.circle-7').css({
        transform: 'translate(' + (event.clientX * 0.03) + '%, -' + (event.clientY * 0.03) + '%)'
    });
    $('.waveWrapper .circle.circle-8').css({
        transform: 'translate(-' + (event.clientX * 0.02) + '%, ' + (event.clientY * 0.01) + '%)'
    });
});