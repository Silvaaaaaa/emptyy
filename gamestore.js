let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu");

   menuIcon.addEventListener("click" , function(){
        menuIcon.classList.toggle("move");
        menu.classList.toggle("active")
        notifigation.classList.remove("active")
    })
// show notifigation 
let notifigation = document.querySelector(".notification")
let bellicon = document.querySelector("#notification-icon")

bellicon.addEventListener("click" , function(){
    notifigation.classList.toggle("active")
})
// swipper **********
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
     delay:5000 ,
     disableOnInteraction:false ,
    },
    breakpoints: { 
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
 
// scroll bar 
window.onscroll = function(){
    let winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight -  document.documentElement.clientHeight ;
    let scrolled = (winscroll / height) * 100 ; 
    document.querySelector(".scroll-bar").style.width = scrolled + "%";
   
}
