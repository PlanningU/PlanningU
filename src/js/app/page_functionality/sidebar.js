//Keeps the dropdown of the current link opened in either the high school courses or uni pages
//If you don't understand, open the dropdown in MCV4U, select a link, and you'll see the dropdown is still open - that's
//what this does
//You might notice that I use sessionStorage instead of localStorage as seen in the translate.js file
//This is because I am not storing anything important that needs to be kept on the computer - session only

define(function (require) {

        window.Popper = require('popper');
        require(["bootstrap"]);

        return {
            loadContent: function (def1) {

                if (window.location.href.indexOf("subjects") > -1) {
                    $("#sidebar-div").load("/pages/subjects/subjects_sidebar.html", function () {
                        def1.resolve();
                    });
                } else if (window.location.href.indexOf("applications") > -1) {
                    $("#sidebar-div").load("/pages/applications/applications_sidebar.html", function () {
                        def1.resolve();
                    });
                }


            },

            doAfter: function () {

                var x = document.getElementById("header");
                x.className += "alongside-sidebar";
                x = document.getElementById("main-info");
                x.className += " alongside-sidebar";


                try {
                    document.getElementById(sessionStorage.getItem("current_course")).className += " show";
                } catch (typeError) {
                    void (0);
                }


                $('#sidebar-div').on('click touchstart', '.sidebar-item ul li a', function () {
                    sessionStorage.setItem("current_course", $(this).parents(':eq(1)').attr('id'));

                });

                $('#sidebar-div').on('click touchstart', '.sidebar-item > a', function () {
                    try {
                        sessionStorage.removeItem("current_course");
                    } catch (typeError) {
                        void (0);
                    }
                });

                $('#header').on('click touchstart', 'a', function () {
                    try {
                        sessionStorage.removeItem("current_course");
                    } catch (typeError) {
                        void (0);
                    }

                })


                $('#sidebar-div').on("click", '#sidebar-dropdown-arrow', function () {

                    var x = document.getElementById("sidebar");
                    if (x.className === "sidebar-nav") {
                        x.className += " responsive";
                    } else {
                        x.className = "sidebar-nav";
                    }
                });
            }
        }


    }
)
