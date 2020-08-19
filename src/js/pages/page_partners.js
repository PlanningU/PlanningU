var modules_before_translate = ['app/page_functionality/header_footer'];

require(['../common'], function (common) {
//This requires a double nested require for common and then jquery because we need to first load the common
//file directory (i.e. baseURL, jquery: path, etc.), before we can directly access jquery
    require(['jquery'], function ($) {

        require(modules_before_translate.concat(['app/page_functionality/translate']), function (hf, translate) {
            var d1 = new $.Deferred();
            var d2 = new $.Deferred();
            $.when(d1, d2).then(function () {
                hf.doAfter();
                translate.translate();
            });
            hf.loadContent(d1, d2);
        });

        require(['app/ui_animations/slideshow_animate']);

    });


});
