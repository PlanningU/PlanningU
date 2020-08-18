//THIS IS WHERE YOU INCLUDE WHAT TO RUN BEFORE TRANSLATING
//Generally, it will be anything that contains a .load jquery function (since it likely contains text to translate)
var modules_before_translate = ['app/page_functionality/header_footer'];

require(['../common'], function (common) {
//This requires a double nested require for common and then jquery because we need to first load the common
//file directory (i.e. baseURL, jquery: path, etc.), before we can directly access jquery
    require(['jquery'], function ($) {

        $(document).ready(function () {
            require(modules_before_translate);
        });
        $(document).ready(function () {
            require(['app/page_functionality/translate']);
        });

        require(['app/ui_animations/slideshow_animate']);

    });


});

