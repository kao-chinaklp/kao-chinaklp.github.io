$(window).scroll(function() {
    var scrollPos = $(document).scrollTop();
    var windowHeight = $(window).height();
    
    var wordPos = $('.text1').offset().top;
    if (scrollPos + windowHeight> wordPos) {
        $('.text1').addClass('slideinfrombottom');
    }
    
    wordPos = $('.text2').offset().top;
    if (scrollPos + parseInt(windowHeight * 0.66) > wordPos) {
        $('.text2').addClass('slideinfromright');
    }
    
    wordPos = $('.text3').offset().top;
    if (scrollPos + parseInt(windowHeight * 0.66) > wordPos) {
        $('.text3').addClass('slideinfromleft');
    }
});