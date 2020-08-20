//THIS IS WHERE YOU INCLUDE WHAT TO RUN BEFORE TRANSLATING
//Generally, it will be anything that contains a .load jquery function (since it likely contains text to translate)
var modules_before_translate = ['app/page_functionality/header_footer'];


require(['../common'], function (common) {
//This requires a double nested require for common and then jquery because we need to first load the common
//file directory (i.e. baseURL, jquery: path, etc.), before we can directly access jquery
    require(['jquery'], function ($) {

        require(modules_before_translate.concat(['app/page_functionality/translate']), function (hf, translate) {

            //These are passed to any modules that have a .load function, and when they complete, they will
            //call the .when function below
            var d1 = new $.Deferred();
            var d2 = new $.Deferred();

            $.when(d1, d2).then(function () {
                hf.doAfter();
                translate.translate();
            });

            hf.loadContent(d1, d2);

            //Auto-scroll when click the 'arrow'
            $("#down-arrow").on("click touch", function(){
                console.log("hi");
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#our-team").offset().top - 50
                }, 1000);
            })



        });

        require(['app/ui_animations/profile_hover_mobile']);
        require(['app/ui_animations/readmore_button']);


    });
})