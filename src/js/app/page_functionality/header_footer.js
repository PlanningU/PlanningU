//Creates the header, footer, as well as anything that relates to it

//any additions are subject to change, but as of now it consists of:
//a) The wechat modal
//b) The alert banner for the savvyuni promotion

define(function () {
    return {
        //Header and Footer - Takes one deferred variable per load() function to allow for code to be
        //executed after BOTH have finished loading web pages
        loadContent: function (def1, def2) {
            $("#footer").load("/pages/footer.html", function () {
                def2.resolve();
            });

            $("#header").load("/pages/header.html", function () {
                //The alert banner for SavvyUni
                $("#main-info").prepend($('<div class="alert-banner"><span class="alert-text" data-i18n="banner-text">Our Partner SavvyUni is hosting a giveaway</span><a id="link-to-lottery" href="/pages/partners/savvyuni.html" data-i18n="banner-link">Learn how to enter</a><span class="close-x">×</span></div>'));
                def1.resolve();

            });




        },

        //doAfter function performs what is to be done after the load() functions have run
        doAfter: function () {

            //When click the alert banner
            $('#main-info').on("click touch", "#link-to-lottery", function(){
                //Url variable for smooth autoscroll
                $(this).attr('href',"/pages/partners/savvyuni.html?promotion=true");
            })

            //Close the alert banner
            $('#main-info').on('click touch', '.close-x', function(){
                var element = document.getElementsByClassName("alert-banner")[0];
                element.parentNode.removeChild(element);
            })

            //Change "High School" link that functions only for a dropdown to a functioning link if it is on mobile
            if (window.matchMedia('(max-width: 1080px)').matches) {
                $("#header a[data-i18n='nav-school-classes']").attr("href", "/pages/subjects/home.html");

            } else {
                $("#header a[data-i18n='nav-school-classes']").attr("href", "javascript:void(0)");
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

        }
    }
});




