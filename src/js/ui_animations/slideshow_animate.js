var slides = document.getElementsByClassName("slide")
var slideIndex = 1;
plusSlides(0);

function plusSlides(n) {
    console.log("hi");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex += n;
    if (slideIndex > slides.length){
        slideIndex = 1
    }else if (slideIndex < 1){
        slideIndex = slides.length;
    }

    slides[slideIndex -1].style.display = "block";
}
