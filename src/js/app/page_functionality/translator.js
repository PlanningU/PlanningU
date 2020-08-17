"use strict"

define(function (require) {
    var parse_json = require('app/page_functionality/parse_json');
    return {

        Translator: class {
            constructor() {
                this._lang - this.getLanguage();
                this._elements = document.querySelectorAll("[data-i18n]");
            }

            getLanguage() {
                var lang = navigator.languages ? navigator.languages[0] : navigator.language;//Just in case older browsers don't support one of the two functions here
                return lang.substr(0, 2);
            }

            translate(translation) {
                this._elements.forEach((element) => {
                    var r = 2;

                    if (this._lang == "en") {
                        r = 1;
                    }
                    element.innerHTML = translation[r][translation[0].indexOf(element.getAttribute("data-i18n"))];
                })
            }

            load(lang = null) {
                if (lang) {
                    this._lang = lang;

                }
                parse_json.loadItems('/pages/translations/en.csv')
                    .then(translation => {
                        this.translate(translation);
                    })

            }


        }
    }

});


