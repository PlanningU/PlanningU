var slides = document.getElementsByClassName("slide")
var slideIndex = 1;
plusSlides(0);
automatedSlides();
function plusSlides(n) {

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
}

function automatedSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1
    }else if (slideIndex < 1){
        slideIndex = slides.length;
    }


    slides[slideIndex -1].style.display = "block";
    setTimeout(automatedSlides, 3600); // Change image every 2 seconds
}
