
             //  menu
const menuBtn = document.querySelector("#menu-btn");
const close = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

                //  Show Menu
menuBtn.addEventListener("click", (eo) => {
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  close.style.display = "inline-block";
});
                 //  hidden Menu
const closeNav = () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  close.style.display = "none";
}                 
close.addEventListener("click", closeNav) 


    //  cose nav menu when menu a menu item is clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll("nav ul li a").forEach(navItem => {
     navItem.addEventListener("click", () => {
      closeNav();
     })
  })
}    

                    // change navbar style on Scroll
  window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
  });


  

                      //  swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
              // responsive
const swiperr = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 40
    },
        1263: {
      slidesPerView: 3,
    },
        1024: {
      slidesPerView: 2,
    }
  }
})