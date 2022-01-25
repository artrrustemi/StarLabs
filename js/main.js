var slideIndex = 1;
// showSlides();
function plusSlides(n) {

    console.log('blaaaaaaaa',n);
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += "active";

    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    var mybutton = document.getElementById("myBtn");

    window.onscroll = function() {
    scrollFunction2()
    };

    function scrollFunction2() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction2() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.marginTop = "-10px";
        document.getElementById("navbar").style.transition = "0.1s ease";
    } else {
        // document.getElementById("navbar").style.marginTop = "15px";
        document.getElementById("navbar").style.transition = "0.2s ease";
    }
    }

    function myFunction3() {
        var x = document.getElementById('hamburger-menu');
        var y = document.getElementById('x');
          if (x.style.display === 'none') {
              x.style.display = 'block';
              y.style.display = 'none';
          } else {
              x.style.display = 'none';
              y.style.display = 'block';
          }
        
            if(document.getElementById("navbar").className == "navbar")
                document.getElementById("navbar").className = "navbarR"
                
            else
                document.getElementById("navbar").className = "navbar";
      }
