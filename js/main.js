// Slider on the seventh section
        var slideIndex = 0;
        showSlides();

        function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "flex";  
        setTimeout(showSlides, 5000); // Change image every 2 seconds
        }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction2() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

// The end of the slider

// Scroll to the top buttom
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
// The end of the scroll to the top button


// Hamburger menu function
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
// The end of the hamburger menu function

// Slider with images

function sliderImg1(){
    var s1 = document.getElementById("slider1");
    var s2 = document.getElementById("slider2");
    var s3 = document.getElementById("slider3");
    var m1 = document.getElementById("menuItem1");
    var m2 = document.getElementById("menuItem2");
    var m3 = document.getElementById("menuItem3");
    m1.classList.add("activeMenu");
    m2.classList.remove("activeMenu");
    m3.classList.remove("activeMenu");
    s1.style.display = "flex";
    s2.style.display = "none";
    s3.style.display = "none";  
}
function sliderImg2(){
    var m1 = document.getElementById("menuItem1");
    var m2 = document.getElementById("menuItem2");
    var m3 = document.getElementById("menuItem3");
    var s1 = document.getElementById("slider1");
    var s2 = document.getElementById("slider2");
    var s3 = document.getElementById("slider3");
    m2.classList.add("activeMenu");
    m1.classList.remove("activeMenu");
    m3.classList.remove("activeMenu");
    s2.style.display = "flex";
    s1.style.display = "none";
    s3.style.display = "none";  
}
function sliderImg3(){
    var m1 = document.getElementById("menuItem1");
    var m2 = document.getElementById("menuItem2");
    var m3 = document.getElementById("menuItem3");
    var s1 = document.getElementById("slider1");
    var s2 = document.getElementById("slider2");
    var s3 = document.getElementById("slider3");
    m3.classList.add("activeMenu");
    m1.classList.remove("activeMenu");
    m2.classList.remove("activeMenu");
    s3.style.display = "flex";
    s2.style.display = "none";
    s1.style.display = "none";  
}








// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtnM");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
var modal2 = document.getElementById("myModal");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtnM2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}


// Get the modal
var modal3 = document.getElementById("myModal");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtnM3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal3.style.display = "none";
  }
}

$(window).on("load", function () {

    $(".loader").fadeOut(3000);
  
    $(".main-section").fadeIn(3000);
  
  });