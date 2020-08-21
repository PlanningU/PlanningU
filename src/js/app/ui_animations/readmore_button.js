//The readmore plus arrow found on the about page on mobile pages
define(function() {
    $('#about-readmore-toggle').on('click', function(){
        if (!$("#about-story-creation").hasClass("expanded")) {
            $("#about-story-creation").css("height", $('#about-story-creation')[0].scrollHeight);
            $("#about-story-creation").addClass("expanded");
            $('button.readmore-toggle span:first-of-type, button.readmore-toggle span:last-of-type').css({
                "transform": "rotate(90deg)"
            });
            $('button.readmore-toggle span:last-of-type').css({
                "left": "50%",
                "right": "50%"
            });
        } else {
            $('button.readmore-toggle span:first-of-type, button.readmore-toggle span:last-of-type').removeAttr("style");
            $('button.readmore-toggle span:last-of-type').removeAttr("style");
            $("#about-story-creation").removeClass("expanded");
            $("#about-story-creation").removeAttr("style");
        }
    })




});
