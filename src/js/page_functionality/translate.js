import Translator from "./translator.js";

var translator = new Translator();


/*$('#header').on('click', 'button.dropdown-item.btn.btn-lang.language-toggle', function () {
  //  console.log($(this).attr('id'));
    translator.load($(this).attr('id'));

});*/

$('#header').on('click', 'input', function () {

    if ($('input').prop('checked')===true) {
        translator.load("zh");
    }
    else {
        translator.load("en");
    }

});
