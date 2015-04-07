
var pages= null;
$.ajax('https://api.github.com/repos/erichard/pop_cnam/git/blobs/f072e1ca7414e45bda8389a10d237d3f13677d93')
.done(function(data) {
    pages = JSON.parse(atob(data.content)).data;
});


$('.nav a').on('click', function(){
    var pageId = $(this).data('pageId');
    var page = pages[pageId];
    $('.page-title').html(page.title);
    $('.page-subtitle').html(page.subtitle);
    $('.page-author').html(page.author);
    $('.page-body').html(page.body);
});
