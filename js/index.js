$(window).scroll(function() {
    var scrollPos = $(document).scrollTop();
    var windowHeight = $(window).height();

    $('.p-word').each(function() {
        var wordPos = $(this).offset().top;

        if (scrollPos + windowHeight > wordPos) {
            $(this).addClass('fadeinboth');
        }
    });
});