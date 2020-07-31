$(function () {
    $("#sidebar-div").load("/pages/subjects/subjects_sidebar.html");
});

function expandSideBar() {
    var x = document.getElementById("sidebar");
    if (x.className === "sidebar-nav") {
        x.className += " responsive";
    } else {
        x.className = "sidebar-nav";
    }
}