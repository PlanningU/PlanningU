import Translator from "./translator.js";
var translator = new Translator();


/*$('#header').on('click', 'button.dropdown-item.btn.btn-lang.language-toggle', function () {
  //  console.log($(this).attr('id'));
    translator.load($(this).attr('id'));

});*/




if (getCookie("preferred_language") === '') {
   for (var i in navigator.languages){

       if (navigator.languages[i].substring(0,2)==="zh"){
           translator.load("zh");
           document.getElementById("language-toggle-input").click();
           break;
       }
   }
}else{
    translator.load(getCookie("preferred_language"));
    if (getCookie("preferred_language")==="zh"){
        document.getElementById("language-toggle-input").checked = true;

    }else{
        document.getElementById("language-toggle-input").checked = false;
    }
}

$('#header').on('click', 'input', function () {

    if ($('input').prop('checked')===true) {
        translator.load("zh");
        setCookie("preferred_language", "zh", 100)
    }
    else {
        translator.load("en");
        setCookie("preferred_language", "en", 100)
    }

});
