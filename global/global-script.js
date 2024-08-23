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
            console.log($currentSection);
            var $sectionId = $currentSection.attr("id");
            $('.current').removeClass('current');
            $("[href='#" + $sectionId + "']").parent().addClass('current');
        }
    });

//#endregion
    
    // $(window).scroll(function () {
    //     var currentScroll = $(this).scrollTop();
    //     var $currentSection
    //     $sections.each(function () {
    //         var divPosition = $(this).offset().top;
    //         if (divPosition - 100 < currentScroll) {
    //             $currentSection = $(this);
    //         }
    //         if ($currentSection) {
    //             var id = $currentSection.attr('id');
    //             $('a').removeClass('active');
    //             $("[href='#" + id + "']").addClass('active');
    //         }
    //     })

    // });
});