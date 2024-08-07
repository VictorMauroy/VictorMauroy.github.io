$(document).ready(() => {
        
    $('#projects').on('mouseenter', () => {
        $('#more-projects').css('visibility', 'visible');
    }).on('mouseleave', () => {
        $('#more-projects').css('visibility', 'hidden');
    });

});
