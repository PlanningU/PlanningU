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

                //For the savvyuni page, if someone goes to the page via clicking the alert banner for the lottery,
                //auto scroll to the lottery section
                if(/[?&]promotion=/.test(location.search)){
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#lottery-banner").offset().top - 50
                    }, 1000);
                }
            });
            hf.loadContent(d1, d2);
        });

        //Logo for the savvyuni page
        $('.partner-logo').on("click", function(){
            window.location.href = "https://savvyuni.com/";
        })




    });


});
