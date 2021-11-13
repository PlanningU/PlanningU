//THIS IS WHERE YOU INCLUDE WHAT TO RUN BEFORE TRANSLATING
//Generally, it will be anything that contains a .load jquery function (since it likely contains text to translate)
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
                translate.translate();
            });
            hf.loadContent(d1, d2);

            new create_cards.VideoCards(
                "/PlanningU/src/assets/articles/video_metadata.csv",
                "video-section");

        });


        require(['app/ui_animations/slideshow_animate']);

    });


});

