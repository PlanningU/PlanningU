//THIS IS WHERE YOU INCLUDE WHAT TO RUN BEFORE TRANSLATING
//Generally, it will be anything that contains a .load jquery function (since it likely contains text to translate)
modules_before_translate = ['app/page_functionality/header_footer'];

require(['../common', '../libs/jquery.min'], function (common, $) {

    require(modules_before_translate, function(){
        require(['app/page_functionality/translate']);
    });

    require(['app/ui_animations/profile_hover_mobile']);
    require(['app/ui_animations/readmore_button']);
    require(['app/page_functionality/translate']);

});