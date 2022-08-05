const links  = document.querySelectorAll(".project__img");
const cards  = document.querySelectorAll(".project__card");

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobileNav");
const closeMark = document.querySelector(".mobileNav__closeMark");

const linkObserver = new IntersectionObserver(handleLinkIntersection);
links.forEach(linkItem => {
    linkObserver.observe(linkItem)
});

const cardObserver = new IntersectionObserver(handleCardIntersection);
cards.forEach(cardItem => {
    cardObserver.observe(cardItem)
});

function handleLinkIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("projectImgVisible")
        linkObserver.unobserve();
      } else {
        return
      }
    });
}


function handleCardIntersection(entries) {
    console.log("lakjhlaaa")
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("projectCardVisible")
        cardObserver.unobserve();
      } else {
        return
      }
    });
}


navToggle.onclick = function(){
  mobileNav.classList.add("mobileNav__show")
}

closeMark.onclick = function(){
  mobileNav.classList.remove("mobileNav__show")
}