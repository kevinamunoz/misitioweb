
let idLupa = document.getElementById("idLupa");
let boxheader1 = document.getElementById("boxheader1");
let boxheader2 = document.getElementById("boxheader2");
let idexitexit = document.getElementById("x-exit");
idLupa.addEventListener("click",function(){
    boxheader1.classList.add("box-header-1-hidden");
    boxheader1.classList.remove("box-header-1");
    boxheader2.classList.remove("box-header-2-hidden");
    boxheader2.classList.add("box-header-2");
    
});
idexit.addEventListener("click",function(){
    boxheader1.classList.remove("box-header-1-hidden");
    boxheader1.classList.add("box-header-1");
    boxheader2.classList.add("box-header-2-hidden");
    boxheader2.classList.remove("box-header-2");
    


});

// form ana

let iconArrowLeft = document.getElementById("iconArrowLeft");
let iconArrowRight = document.getElementById("iconArrowRight");
let idSlider = document.getElementById("idSlider");
let boxBtn1 = document.getElementById("boxBtn1");
let boxBtn2 = document.getElementById("boxBtn2");
let boxBtn3 = document.getElementById("boxBtn3");
let boxBtn4 = document.getElementById("boxBtn4");

iconArrowLeft.addEventListener("click", function() {
    if (idSlider.classList.contains("slider-view-2")) {
        idSlider.classList.add("slider-view-1");
        idSlider.classList.remove("slider-view-2");
        boxBtn2.classList.remove("btn-select");
        boxBtn1.classList.add("btn-select");
    

    }
    else if (idSlider.classList.contains("slider-view-3")) {
        idSlider.classList.add("slider-view-2");
        idSlider.classList.remove("slider-view-3");
        boxBtn3.classList.remove("btn-select");
        boxBtn2.classList.add("btn-select");

        

    }
    else if (idSlider.classList.contains("slider-view-4")) {
        idSlider.classList.add("slider-view-3");
        idSlider.classList.remove("slider-view-4");
        boxBtn4.classList.remove("btn-select");
        boxBtn3.classList.add("btn-select");

      
    }
});

iconArrowRight.addEventListener("click", function() {
    if (idSlider.classList.contains("slider-view-1")) {
        idSlider.classList.add("slider-view-2");
        idSlider.classList.remove("slider-view-1");
        boxBtn1.classList.remove("btn-select");
        boxBtn2.classList.add("btn-select");
    }
    else if (idSlider.classList.contains("slider-view-2")) {
        idSlider.classList.add("slider-view-3");
        idSlider.classList.remove("slider-view-2");
        boxBtn2.classList.remove("btn-select");
        boxBtn3.classList.add("btn-select");
    }
    else if (idSlider.classList.contains("slider-view-3")) {
        idSlider.classList.add("slider-view-4");
        idSlider.classList.remove("slider-view-3");
        boxBtn3.classList.remove("btn-select");
        boxBtn4.classList.add("btn-select");
        

    }
});



// iconExit.addEventListener("click",function(){
//     formAna.classList.remove("form-ana");
//     formAna.classList.add("form-ana-hideen");

// });


// iconExit.addEventListener("click",function(){
//     formAna.classList.add("form-ana-hideen");
//     formAna.classList.remove("form-ana");

// });

let formFirst = document.getElementById("formFirst");
let contSecond = document.getElementById("contSecond");
let iconExit = document.getElementById("iconExit");
let formAna = document.getElementById("formAna");
let Avatar = document.getElementById("Avatar");

contSecond.addEventListener("click",function(){

    formAna.classList.remove("form-ana");
    formAna.classList.add("form-ana-visible");
    formFirst.classList.remove("form-first");
    formFirst.classList.add("form-first-hideen");

});

iconExit.addEventListener("click",function(){
    formAna.classList.remove("form-ana-visible");
    formAna.classList.add("form-ana");
    formFirst.classList.remove("form-first-hideen");
    formFirst.classList.add("form-first");
    

});





//contro


let button = document.getElementById("button");
let buttonX = document.getElementById("buttonX");
let containerSeacher = document.getElementById("containerSeacher");
let containerQuery = document.getElementById("containerQuery");
let container = document.getElementById("container");
let mainSearcher = document.getElementById("mainSearcher");


button.addEventListener("click",function(){
    containerQuery.classList.remove("main-searcher-query-hidden");
});
buttonX.addEventListener("click",function(){
    containerQuery.classList.add("main-searcher-query-hidden");
})


let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  const formBody = document.querySelector(".form-body");
  const iconArrowRight = document.querySelector(".icon-arrow-right");
  const iconArrowLeft = document.querySelector(".icon-arrow-left");
  const exitStyle = document.querySelector(".exit-style");

  iconArrowRight.addEventListener("click", () => {
    formBody.scrollLeft += 300;
  });

  iconArrowLeft.addEventListener("click", () => {
    formBody.scrollLeft -= 300;
  });

  exitStyle.addEventListener("click", () => {
    formBody.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const formBody = document.querySelector(".form-body");
  const toggleButton = document.getElementById("toggleForm");

  toggleButton.addEventListener("click", () => {
    formBody.classList.toggle("hidden");
  });
});


