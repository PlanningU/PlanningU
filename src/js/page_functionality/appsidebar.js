loadApplicationSideBar();

function loadApplicationSideBar() {
    $("#sidebar-div").load("/pages/applications/applications-sidebar.html");

//This prevents the header from being fixed on mobile on application and high school pages
    var x = document.getElementById("header");
    x.className += "alongside-sidebar";

    x = document.getElementById("main-info");
    x.className += " alongside-sidebar";
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


