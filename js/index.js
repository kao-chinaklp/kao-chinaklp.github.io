$(window).scroll(function() {
    var scrollPos = $(document).scrollTop();
    var windowHeight = $(window).height();
    
    var wordPos = $('.text1').offset().top;
    if (scrollPos + windowHeight> wordPos) {
        $('.text1').addClass('slideinfrombottom');
    }
    
    wordPos = $('.text2').offset().top;
    if (scrollPos + windowHeight / 2 > wordPos) {
        $('.text2').addClass('slideinfromright');
    }
    
    wordPos = $('.text3').offset().top;
    if (scrollPos + windowHeight / 2 > wordPos) {
        $('.text3').addClass('slideinfromleft');
    }
});