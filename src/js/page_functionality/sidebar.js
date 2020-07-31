$(function () {
    $("#sidebar-div").load("/pages/subjects/subjects_sidebar.html");
});



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


