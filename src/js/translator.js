"use strict"

class Translator {
    constructor() {
        this._lang - this.getLanguage();
        this._elements = document.querySelectorAll("[data-i18n]");

    }

    getLanguage() {
        var lang = navigator.languages ? navigator.languages[0] : navigator.language;//Just in case older browsers don't support one of the two functions here
        return lang.substr(0, 2);
    }

    translate(translation){
        this._elements.forEach((element) => {
            var keys = element.dataset.i18n.split(".");
            var text = keys.reduce((obj,i) => obj[i], translation);

            if (text){
                element.innerHTML = text;
            }
        })
    }

    load(lang = null) {
        if (lang) {
            this._lang = lang;

        }

        fetch(`../i18n/${this._lang}.json`)
            .then((res) => res.json())
            .then((translation) => {
                this.translate(translation);
            })
            .catch(() => {
                console.error(`Could not load ${this._lang}.json.`)
            });


    }

}

export default Translator;
