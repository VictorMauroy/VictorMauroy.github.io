$(document).ready(() => {
    
    // When hovering the Projects button or the project expansion : display or still display the "Project Expansion" section.
    $('#projects, #more-projects').on('mouseenter', () => {
        $('#more-projects').css('visibility', 'visible');
    }).on('mouseleave', () => {
        $('#more-projects').css('visibility', 'hidden');
    });

    // When hovering the Projects button or the project expansion : display or still display the "Project Expansion" section.
    $('#games, #more-games').on('mouseenter', () => {
        $('#more-games').css('visibility', 'visible');
    }).on('mouseleave', () => {
        $('#more-games').css('visibility', 'hidden');
    });
});
