var slideIndex = [1, 1, 1, 1, 1];
var slideId = ["au-revoir", "dogtooth", "lolita", "nymphomaniac", "witch"]
showSlides(0, 0);
showSlides(0, 1);
showSlides(0, 2);
showSlides(0, 3);
showSlides(0, 4);

function showSlides(n, no) {
  var x = document.getElementsByClassName(slideId[no]);
  slideIndex[no] = (((slideIndex[no] - 1 + n) % x.length) + x.length) % x.length + 1;
  for (let i = 0; i < x.length; ++i){
    if (i === slideIndex[no] - 1){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }
}