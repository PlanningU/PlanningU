define(function () {
    //Header and Footer
    $("#header").load("/pages/header.html");
    $("#footer").load("/pages/footer.html", function () {
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

    });



});