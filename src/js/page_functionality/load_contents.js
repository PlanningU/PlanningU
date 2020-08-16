$(document).ready(function () {

    $("head").append('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-175055937-1"></script>');
    $("head").append('<script async src="/src/js/google_analytics.js"></script>');
    //Favicons
    $("head").append('<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">');
    $("head").append('<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">');
    $("head").append('<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">');
    $("head").append('<link rel="manifest" href="/favicons/site.webmanifest">');
    $("head").append('<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5">');
    $("head").append('<meta name="msapplication-TileColor" content="#da532c">');
    $("head").append('<meta name="theme-color" content="#ffffff">');

    //Header and Footer
    $("#header").load("/pages/header.html");
    $("#footer").load("/pages/footer.html");

    //Sidebars, if required

    if (window.location.href.indexOf("subjects") > -1) {

        $("#sidebar-div").load("/pages/subjects/subjects_sidebar.html");
        $("body").append('<script src="/src/js/page_functionality/subjects_sidebar.js"></script>');

        var x = document.getElementById("header");
        x.className += "alongside-sidebar";
        x = document.getElementById("main-info");
        x.className += " alongside-sidebar";

    } else if (window.location.href.indexOf("applications") > -1) {

        $("#sidebar-div").load("/pages/applications/applications_sidebar.html");
        $("body").append('<script src="/src/js/page_functionality/subjects_sidebar.js"></script>');

        var x = document.getElementById("header");
        x.className += "alongside-sidebar";
        x = document.getElementById("main-info");
        x.className += " alongside-sidebar";
    }


    $("body").append('<script type="text/javascript" src="/src/js/page_functionality/cookie.js"></script>');
    $("body").append('<script src="/src/js/papaparse.min.js"></script> ');
    $("body").append('<script type="module" src="/src/js/page_functionality/translate.js"></script>');




});

$(window).on('load', function () {

    //Change "High School" link that functions only for a dropdown to a functioning link if it is on mobile
    if (window.matchMedia('(max-width: 1080px)').matches) {
        $("a[data-i18n='nav-school-classes']").attr("href", "/pages/subjects/home.html");

    } else {
        $("a[data-i18n='nav-school-classes']").attr("href", "javascript:void(0)");
    }

    //Popup for the wechat button
    var els = document.getElementsByClassName("wechat-modal-link");

    // Get the button that opens the modal
    Array.from(els).forEach((el) => {

        el.addEventListener("click", function () {
            var modal = document.getElementById("wechat-modal");
            var span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";
            span.onclick = function () {
                modal.style.display = "none";
            };
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        })
    });

});


