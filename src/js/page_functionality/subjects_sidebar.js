$(document).ready(function () {
    try {
        document.getElementById(getCookie('current_course')).className += " show";

    } catch (typeError) {
        void (0);
    }

});


$('#sidebar-div').on('click', '.sidebar-item ul li a', function () {
    setCookie("current_course", $(this).parents(':eq(1)').attr('id'), 10)

});

$('#sidebar-div').on('click', '.sidebar-item > a', function () {
    try {
        deleteCookie("current_course");
    } catch (typeError) {
        void (0);
    }
});

$('#header').on('click', 'a', function () {
    try {
        deleteCookie("current_course");
    } catch (typeError) {
        void (0);
    }

})


function expandSideBar() {
    var x = document.getElementById("sidebar");
    if (x.className === "sidebar-nav") {
        x.className += " responsive";
    } else {
        x.className = "sidebar-nav";
    }
}


