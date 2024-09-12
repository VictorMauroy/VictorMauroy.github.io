$(function() { // Replacement of $(document).ready() call, which is deprecated

//#region NavBar_Scrolling
    var $sections = $("section");
    $(window).on('scroll', ()=> {
        var $currentSection = "";

        // check every section and calculate the relative position to the top, to know the current one.
        $sections.each(function() {
            
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            if ($(window).scrollTop() >= sectionTop - sectionHeight / 3) {
                $currentSection = $(this);
            }
        })

        if($currentSection) { // If there is a current section
            var $sectionId = $currentSection.attr("id");
            $('.current').removeClass('current');
            $("[href='#" + $sectionId + "']").parent().addClass('current');
        }
    });

//#endregion
    
//#region Projects_Cases

    $("#moneybox-img").children().hide();
    $("#moneybox-img").on("mouseover", ()=> {
        $("#moneybox-img").children().show();
    }).on("mouseleave", () => {
        $("#moneybox-img").children().hide();
    });

    $("#DQMJ-img").children().hide();
    $("#DQMJ-img").on("mouseover", ()=> {
        $("#DQMJ-img").children().show();
    }).on("mouseleave", () => {
        $("#DQMJ-img").children().hide();
    });

    $("#portfolio-img").children().hide();
    $("#portfolio-img").on("mouseover", ()=> {
        $("#portfolio-img").children().show();
    }).on("mouseleave", () => {
        $("#portfolio-img").children().hide();
    });
    
    $("#genetic-algo-img").children().hide();
    $("#genetic-algo-img").on("mouseover", ()=> {
        $("#genetic-algo-img").children().show();
    }).on("mouseleave", () => {
        $("#genetic-algo-img").children().hide();
    });

    $("#codewars-img").children().hide();
    $("#codewars-img").on("mouseover", ()=> {
        $("#codewars-img").children().show();
    }).on("mouseleave", () => {
        $("#codewars-img").children().hide();
    });

//#endregion

//#region Games_Cases

$("#cherjournal-img").children().hide();
$("#cherjournal-img").on("mouseover", ()=> {
    $("#cherjournal-img").children().show();
}).on("mouseleave", () => {
    $("#cherjournal-img").children().hide();
});

$("#eartgame-img").children().hide();
$("#eartgame-img").on("mouseover", ()=> {
    $("#eartgame-img").children().show();
}).on("mouseleave", () => {
    $("#eartgame-img").children().hide();
});

$("#hardestdungeon-img").children().hide();
$("#hardestdungeon-img").on("mouseover", ()=> {
    $("#hardestdungeon-img").children().show();
}).on("mouseleave", () => {
    $("#hardestdungeon-img").children().hide();
});

$("#moregames-img").children().hide();
$("#moregames-img").on("mouseover", ()=> {
    $("#moregames-img").children().show();
}).on("mouseleave", () => {
    $("#moregames-img").children().hide();
});

//#endregion


//#region Projects_Slider
    var $totalProjects = $(".project-item").length;
    var projectsPerPage;
    var currentPage = 0;
    
    function updateSliderWidth() {

        var screenWidth = $(window).width();

        if (screenWidth > 1200) {
            projectsPerPage = 3; // For large screens (desktop)
        } else if (screenWidth >= 900) {
            projectsPerPage = 2; // For tablets
        } else {
            projectsPerPage = 1; // For small screens (mobile)
        }

        updateProjects();
    }

    function updateProjects() {
        var offset = -currentPage * (100 / projectsPerPage);
        $(".project-wrapper").css("transform", "translateX(" + offset + "%)");
    }

    $(".previous-project").on("click", function() {
        if (currentPage > 0) {
            currentPage--;
            updateProjects();
        }
    });

    $(".next-project").on("click", function() {
        if (currentPage < $totalProjects - projectsPerPage) {
            currentPage++;
            updateProjects();
        }
    });

    updateSliderWidth();

    // Update the projectsPerPage when the window is resized
    $(window).on("resize", function() {
        updateSliderWidth();
        currentPage = 0;
    });

//#endregion

//#region Games_Slider
var $totalGames = $(".game-item").length;
var gamesPerPage;
var currentGamePage = 0;

function updateGameSliderWidth() {

    var screenWidth = $(window).width();

    if (screenWidth > 1200) {
        gamesPerPage = 3; // For large screens (desktop)
    } else if (screenWidth >= 900) {
        gamesPerPage = 2; // For tablets
    } else {
        gamesPerPage = 1; // For small screens (mobile)
    }

    updateGames();
}

function updateGames() {
    var offset = -currentGamePage * (100 / gamesPerPage);
    $(".game-wrapper").css("transform", "translateX(" + offset + "%)");
}

$(".previous-game").on("click", function() {
    if (currentGamePage > 0) {
        currentGamePage--;
        updateGames();
    }
});

$(".next-game").on("click", function() {
    if (currentGamePage < $totalGames - gamesPerPage) {
        currentGamePage++;
        updateGames();
    }
});

updateGameSliderWidth();

// Update the projectsPerPage when the window is resized
$(window).on("resize", function() {
    updateGameSliderWidth();
    currentGamePage = 0;
});

//#endregion

//#region Studies_Slider
var $totalStudiesSlides = $('.study-item').length; 
var currentStudiesSlide = 0;
var studiesSlideInterval = 3000; //in milliseconds
var autoSlide; //The handle, allowing us to stop the auto sliding.

function updateStudiesSlider() {
    var offset = -currentStudiesSlide * 100;
    $('#studies-wrapper').css("transform", "translateX(" + offset + "%)");
    
    removeActiveStudies();
    switch(currentStudiesSlide) {
        case 0:
            $("#study-first").addClass("active-study");
            break;
            
        case 1:
            $("#study-second").addClass("active-study");
            break;
            
        case 2:
            $("#study-third").addClass("active-study");
            break;
    }
}

function nextStudiesSlide() {
    currentStudiesSlide = (currentStudiesSlide+1 < $totalStudiesSlides) ? currentStudiesSlide+1 : 0;
    console.log("Current study slide: " + currentStudiesSlide);
    updateStudiesSlider();
}

/**
 * Start the auto sliding effect on study slider.
 * @param {Custom delay before auto slide transition} customDelay 
 */
function startAutoSlide(customDelay) {
    // if(customDelay != 0){
    //     autoSlide = setInterval(nextStudiesSlide, customDelay);
    // } else {
    //     autoSlide = setInterval(nextStudiesSlide, studiesSlideInterval);
    // }
    autoSlide = setInterval(nextStudiesSlide, studiesSlideInterval);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

function removeActiveStudies() {
    var studyControls = $('#studies-controls').children();
    studyControls.removeClass("active-study");
}

$('#study-first').on("click", ()=>{
    stopAutoSlide();
    currentStudiesSlide = 0;
    updateStudiesSlider();
    startAutoSlide(5000);

    removeActiveStudies();
    $(event.currentTarget).addClass("active-study");
});

$('#study-second').on("click", ()=>{
    stopAutoSlide();
    currentStudiesSlide = 1;
    updateStudiesSlider();
    startAutoSlide(5000);

    removeActiveStudies();
    $(event.currentTarget).addClass("active-study");
});

$('#study-third').on("click", ()=>{
    stopAutoSlide();
    currentStudiesSlide = 2;
    updateStudiesSlider();
    startAutoSlide(5000);

    removeActiveStudies();
    $(event.currentTarget).addClass("active-study");
});

startAutoSlide(studiesSlideInterval); //Start the auto-sliding by default.
$("#study-first").addClass("active-study");

//#endregion
});