

$(".background_bg").each(function() {
    let attr = $(this).attr('data-img-src');
    if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css('background-image', 'url(' + attr + ')');
    }
});