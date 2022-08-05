const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobileNav");
const closeMark = document.querySelector(".mobileNav__closeMark");


navToggle.onclick = function(){
    mobileNav.classList.add("mobileNav__show")
  }
  
  closeMark.onclick = function(){
    mobileNav.classList.remove("mobileNav__show")
  }