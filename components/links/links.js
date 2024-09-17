$(document).ready(() => {

    function openLinkInNewTab(destination) {
        window.open(destination, '_blank').focus();
    }

    $('.github-button').on('click', () => {
        openLinkInNewTab("https://github.com/VictorMauroy");
    });

    $('.linkedin-button').on('click', () => {
        openLinkInNewTab("https://www.linkedin.com/in/victor-mauroy-01803a1a5/");
    });

    $('.gmail-button').on('click', () => {
        openLinkInNewTab("mailto:mauroy.victor@gmail.com");
    });
    
    $('.map-button').on('click', () => {
        openLinkInNewTab("https://www.google.com/maps/place/Amiens/");
    });

});