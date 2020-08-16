import Translator from "./translator.js";
var translator = new Translator();

window.onload = function() {

    if (getCookie("preferred_language") === '') {
        for (let i = 0; i < navigator.languages.length; i++) {
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
        document.getElementById("language-toggle-input").checked = getCookie("preferred_language") === "zh";
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
