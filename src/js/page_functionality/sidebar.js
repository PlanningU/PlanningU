var scale = 'scale(1)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
document.body.style.msTransform =   scale;       // IE 9
document.body.style.transform = scale;
$(function () {
    $("#sidebar-div").load("/pages/subjects/subjects_sidebar.html");
});