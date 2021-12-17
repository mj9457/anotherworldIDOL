/*var slideIndex = 0;
showSlides();

function currentSlide() {
    showSlides(slideIndex = n);
}

function nextBtn() {
    showSildesBtn();
 }

function showSlides() {    
    showSildesBtn()
   // setTimeout(showSlides, 4500); // Change image every 4.5 seconds
}

function showSildesBtn() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) { // 0~슬라이드 길이만큼 , slide를 숨김
        slides[i].style.display = "none";  
     }

     slideIndex++; // 슬라이드 위치를 1씩 증가
     
     if (slideIndex < 1) {slideIndex = slides.length}

     if (slideIndex > slides.length) {slideIndex = 1}  // 만약 슬라이드 인덱스가 길이를 넘어버리면 다시 1로 초기화
    
     for (i = 0; i < dots.length; i++) { // 똑같이 dot의 클래스네임에 active를 추가
         dots[i].className = dots[i].className.replace(" active", "");
     }

     slides[slideIndex-1].style.display = "flex";  // 슬라이드보다 1작은값의 위치에 있는걸 표시
     dots[slideIndex-1].className += " active";
}*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
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
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}
