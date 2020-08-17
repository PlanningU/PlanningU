



    //Header and Footer
    $("#header").load("/pages/header.html");
    $("#footer").load("/pages/footer.html");

    //Sidebars, if required

    if (window.location.href.indexOf("subjects") > -1) {

        $("#sidebar-div").load("/pages/subjects/subjects_sidebar.html");
        $("body").append('<script src="/src/js/app/page_functionality/sidebar.js"></script>');

        var x = document.getElementById("header");
        x.className += "alongside-sidebar";
        x = document.getElementById("main-info");
        x.className += " alongside-sidebar";

    } else if (window.location.href.indexOf("applications") > -1) {

        $("#sidebar-div").load("/pages/applications/applications_sidebar.html");
        $("body").append('<script src="/src/js/app/page_functionality/sidebar.js"></script>');

        var x = document.getElementById("header");
        x.className += "alongside-sidebar";
        x = document.getElementById("main-info");
        x.className += " alongside-sidebar";
    }



    $("body").append('<script type="text/javascript" src="/src/js/app/page_functionality/cookie.js"></script>');
    $("body").append('<script src="/src/js/libs/papaparse.min.js"></script>');
    $("body").append('<script type="module" src="/src/js/app/page_functionality/translate.js"></script>');








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




