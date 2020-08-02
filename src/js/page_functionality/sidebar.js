loadSideBar();

function loadSideBar() {
    $("#sidebar-div").load("/pages/subjects/subjects_sidebar.html");


}

$(document).ready(function () {
    try {
        document.getElementById(getCookie('current_course')).className += " show";

    } catch (typeError) {
        void (0);
    }

});


$('#sidebar-div').on('click', '.sidebar-item ul li a', function () {
    setCookie("current_course", $(this).parents(':eq(1)').attr('id'), 10)
    // document.cookie = "current_course= " + $(this).parents(':eq(1)').attr('id');

});
$('#header').on('click', 'a', function () {
    try {
        deleteCookie("current_course");
    } catch (typeError) {
        void (0);
    }

})

$('#sidebar-div').on('click', '.sidebar-item > a', function () {
    try {
        deleteCookie("current_course");
    } catch (typeError) {
        void (0);
    }
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


window.onload = (event) => {
    var x = document.getElementById("nav-bar");
    x.className += " alongside-sidebar"
    x = document.getElementById("main-info");
    x.className += " alongside-sidebar"
};


function expandSideBar() {
    var x = document.getElementById("sidebar");
    if (x.className === "sidebar-nav") {
        x.className += " responsive";
    } else {
        x.className = "sidebar-nav";
    }
}


