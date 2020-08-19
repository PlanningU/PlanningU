//Translating the page between en and zh
//We do several things:
//1. Check is localStorage is supported
//2. If any the user has set a preferred language already (en/zh) via window.sessionStorage
//3. If not, go through the browser's default languages and check if there is a 'zh' - if so, the user most likely
//   speaks chinese, since non-chinese speakers would not have that language as a default language in their browser
//4. Run the translator.load() command to translate the page

define(function (require) {
    return {
        translate: function () {
            var t = require('app/page_functionality/translator');
            var Translator = new t.Translator();

            if (typeof Storage !== "undefined") { //localStorage and sessionStorage *is* supported

                if (localStorage.getItem("preferred_language") === null) {
                    for (let i = 0; i < navigator.languages.length; i++) {
                        if (navigator.languages[i].substring(0, 2) === "zh") {
                            Translator.load("zh");




                            document.getElementById("language-toggle-input").click();
                            var translate_to_zh = true;
                            break;
                        }
                    }
                    if (!translate_to_zh) {
                        Translator.load("en");
                    }
                } else {
                    Translator.load(localStorage.getItem("preferred_language"));
                    document.getElementById("language-toggle-input").checked = localStorage.getItem("preferred_language") === "zh";

                }

                $('#header').on('click touchstart', '#language-toggle-input', function () {
                    if ($('#language-toggle-input').prop('checked') === true) {
                        Translator.load("zh");
                        localStorage.setItem("preferred_language", "zh")
                    } else {
                        Translator.load("en");
                        localStorage.setItem("preferred_language", "en")
                    }
                });


            } else {   //localStorage and sessionStorage *is NOT* supported
                void (0);
            }
        }
    }
});




