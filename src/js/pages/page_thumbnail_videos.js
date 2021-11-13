var modules_before_translate = ['app/page_functionality/header_footer', 'app/page_functionality/create_cards'];

require(['../common'], function (common) {
//This requires a double nested require for common and then jquery because we need to first load the common
//file directory (i.e. baseURL, jquery: path, etc.), before we can directly access jquery
    require(['jquery'], function ($) {

        require(modules_before_translate.concat(['app/page_functionality/translate']), function (hf, create_cards, translate) {

            var d1 = new $.Deferred();
            var d2 = new $.Deferred();

            $.when(d1, d2).then(function () {
                hf.doAfter();
                new create_cards.VideoCards(
                    "/PlanningU/src/assets/articles/video_metadata.csv",
                    "video-section");
                //console.log(document.querySelector("#video-section .video-card:nth-child(n + 4) .video-description"));


                //DO PERSONALIZED CODE HERE===========//


                //===================================//
                //Translate should be last
                translate.translate();
            });


            //DO ANYTHING HERE THAT NEEDS TO TRANSLATED ==========//
            hf.loadContent(d1, d2);

            //===================================================//



        });


    });
});