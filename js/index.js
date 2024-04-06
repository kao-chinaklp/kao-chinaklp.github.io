$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    var windowHeight = $(window).height();

    $('.p-word').each(function() {
        var wordPos = $(this).offset().top;

        if (scrollPos + windowHeight > wordPos) {
            $(this).addClass('fadein-both');
        }
    });
});