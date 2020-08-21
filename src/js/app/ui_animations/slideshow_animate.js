//TO animate the slideshow on the home page
define(function(require){
    var slides = document.getElementsByClassName("slide")
    var slideIndex = 1;
    var interval = setInterval(function(){plusSlides(1)}, 5600);
    plusSlides(0);


    function plusSlides(n) {
        clearInterval(interval);
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex += n;
        if (slideIndex > slides.length){
            slideIndex = 1;
        }else if (slideIndex < 1){
            slideIndex = slides.length;
        }
        slides[slideIndex -1].style.display = "block";

        setTimeout(interval = setInterval(function(){plusSlides(1)}, 5600), 5600);
    }

})



