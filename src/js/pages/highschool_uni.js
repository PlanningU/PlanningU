//THIS IS WHERE YOU INCLUDE WHAT TO RUN BEFORE TRANSLATING
//Generally, it will be anything that contains a .load jquery function (since it likely contains text to translate)
modules_before_translate = ['app/page_functionality/header_footer', 'app/page_functionality/sidebar'];

require(['../common', '../libs/jquery.min'], function (common, $) {

    require(['app/page_functionality/header_footer', 'app/page_functionality/sidebar'], function(){
        require(['app/page_functionality/translate']);
    });

});
