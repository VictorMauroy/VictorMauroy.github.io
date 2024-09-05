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

//#endregion

//#region Projects_Slider
    var $totalProjects = $(".project-item").length;
    var projectsPerPage;
    var currentPage = 0;

    var screenWidth = $(window).width();
                
    if (screenWidth > 1200) {
        projectsPerPage = 3; // For large screens (desktop)
    } else if (screenWidth > 900) {
        projectsPerPage = 2; // For tablets
    } else {
        projectsPerPage = 1; // For small screens (mobile)
    }

    function updateProjects() {

        var offset = -currentPage * (100 / projectsPerPage);
        $(".project-wrapper").css("transform", "translateX(" + offset + "%)");
    }

    $(".previous-project").on("click", function() {
        console.log("Previous");
        if (currentPage > 0) {
            currentPage--;
            updateProjects();
        }
    });

    $(".next-project").on("click", function() {
        console.log("Next");
        if (currentPage < projectsPerPage - 1) {
            currentPage++;
            updateProjects();
        }
    });

//#endregion

});