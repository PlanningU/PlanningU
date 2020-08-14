"use strict"
import {loadItems} from "./parse_json.js";

class Translator {
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

            if(this._lang == "en"){
                r = 1;
            }
            element.innerHTML = translation[r][translation[0].indexOf(element.getAttribute("data-i18n"))];
            /*var keys = element.dataset.i18n.split(".");
            //console.log(keys);
            var text = keys.reduce((obj, i) => obj[i], translation);
            console.log(text + "hi");

            if (text) {
                element.innerHTML = text;
            }*/
        })
    }

    load(lang = null) {
        if (lang) {
            this._lang = lang;

        }
        loadItems('/pages/translations/en.csv')
            .then(translation =>{
                this.translate(translation);
            })
        /*fetch(`/pages/translations/en.csv`)
            .then((raw) => raw.text())
            .then((data) => Papa.parse(data))
            .then((translation) => {
                this.translate(translation.data);
            });*/
    }

    /* jQuery.get(`/pages/translations/${this._lang}.csv`, function(data) {
         Papa.parse(data, {
             complete: function(data) {
                 this.translate(translation);
             }
         });
     });*/
    /* fetch(`/pages/translations/${this._lang}.json`)
         .then((res) => res.json())
         .then((translation) => {
             this.translate(translation);
         })
         .catch(() => {
             console.error(`Could not load ${this._lang}.json.`)
         });*/


}


export default Translator;
