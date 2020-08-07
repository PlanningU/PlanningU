loadHeaderFooter();

function loadHeaderFooter() {
    $("#header").load("/pages/header.html");
    $("#footer").load("/pages/footer.html");

    $("body").append('<script type="text/javascript" src="/src/js/page_functionality/cookie.js"></script>');
    $("body").append('<script src="/src/js/papaparse.min.js"></script> ');
    $("body").append('<script type="module" src="/src/js/page_functionality/translate.js"></script> ');

}







