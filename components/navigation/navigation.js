$(document).ready(() => {
        
    // When hovering the Projects button or the project expansion : display or still display the "Project Expansion" section.
    $('#projects').on('mouseenter', () => {
        $('#more-projects').css('visibility', 'visible');
    }).on('mouseleave', () => {
        $('#more-projects').css('visibility', 'hidden');
    });

    $('#more-projects').on('mouseenter', () => {
        $('#more-projects').css('visibility', 'visible');
    }).on('mouseleave', () => {
        $('#more-projects').css('visibility', 'hidden');
    });

    // When hovering the Projects button or the project expansion : display or still display the "Project Expansion" section.
    $('#games').on('mouseenter', () => {
        $('#more-games').css('visibility', 'visible');
    }).on('mouseleave', () => {
        $('#more-games').css('visibility', 'hidden');
    });

    $('#more-games').on('mouseenter', () => {
        $('#more-games').css('visibility', 'visible');
    }).on('mouseleave', () => {
        $('#more-games').css('visibility', 'hidden');
    });
});
