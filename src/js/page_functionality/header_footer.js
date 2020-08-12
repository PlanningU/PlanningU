loadHeaderFooter();

function loadHeaderFooter() {
    $("#header").load("/pages/header.html");
    $("#footer").load("/pages/footer.html");

    $("body").append('<script type="text/javascript" src="/src/js/page_functionality/cookie.js"></script>');
    $("body").append('<script src="/src/js/papaparse.min.js"></script> ');
    $("body").append('<script type="module" src="/src/js/page_functionality/translate.js"></script>');
    $("head").append('<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">');
    $("head").append('<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">');
    $("head").append('<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">');
    $("head").append('<link rel="manifest" href="/favicons/site.webmanifest">');
    $("head").append('<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5">');
    $("head").append('<meta name="msapplication-TileColor" content="#da532c">');
    $("head").append('<meta name="theme-color" content="#ffffff">');
}