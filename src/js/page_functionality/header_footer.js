var scale = 'scale(1)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
document.body.style.msTransform =   scale;       // IE 9
document.body.style.transform = scale;

$(function () {
    $("#header").load("/pages/header.html");
    $("#footer").load("/pages/footer.html");
});


$(window).on('load', function () {
    console.log("hi");
    document.getElementById("main-info").style.marginTop = "56px"; //
});






