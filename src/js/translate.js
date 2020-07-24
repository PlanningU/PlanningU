import Translator from "./translator.js";

var translator = new Translator();
/*
$(document).on('click', 'button.btn.btn-primary.language-toggle', function(){
    const language_buttons = document.querySelectorAll('button.btn.btn-primary.language-toggle');
    language_buttons.forEach(btn => {
        console.log("hello");
        btn.addEventListener('click', function (evt) {
            translator.load(evt.target.id);
            console.log("hello");
        });
    });
});
*/


    $('#header').on('click', 'button.btn.btn-primary.language-toggle', function () {
        console.log($(this).attr('id'));
        translator.load($(this).attr('id'));

    });

