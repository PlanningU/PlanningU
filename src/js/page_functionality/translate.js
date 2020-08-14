import Translator from "./translator.js";
var translator = new Translator();


/*$('#header').on('click', 'button.dropdown-item.btn.btn-lang.language-toggle', function () {
  //  console.log($(this).attr('id'));
    translator.load($(this).attr('id'));

});*/



window.onload = function() {

    if (getCookie("preferred_language") === '') {
        for (var i in navigator.languages) {

            if (navigator.languages[i].substring(0, 2) === "zh") {
                translator.load("zh");
                document.getElementById("language-toggle-input").click();
                var translate_to_zh = true;
                break;
            }
        }
        if (!translate_to_zh) {
            translator.load("en");
        }
    } else {
        translator.load(getCookie("preferred_language"));
        if (getCookie("preferred_language") === "zh") {
            document.getElementById("language-toggle-input").checked = true;

        } else {
            document.getElementById("language-toggle-input").checked = false;
        }
    }
};

$('#header').on('click', '#language-toggle-input', function () {

    if ($('#language-toggle-input').prop('checked')===true) {
        translator.load("zh");
        setCookie("preferred_language", "zh", 100)
    }
    else {
        translator.load("en");
        setCookie("preferred_language", "en", 100)
    }

});
