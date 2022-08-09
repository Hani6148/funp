const links  = document.querySelectorAll(".project__img");
const cards  = document.querySelectorAll(".project__card");

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobileNav");
const closeMark = document.querySelector(".mobileNav__closeMark");
const pImage = document.querySelectorAll(".project__img__link");



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


for(i=0;i<pImage.length;i++){
  pImage[i].onclick = function(e){
    if(e.target.classList.value.includes("show")){
      e.target.classList.remove("project__img__detail__show")
      if(e.target.classList.value.includes("p1")){
        document.querySelectorAll(".project__img__detail__link__p1")[0].classList.remove("title__img__detail__tofront");
        document.querySelectorAll(".project__img__detail__link__p1")[1].classList.remove("title__img__detail__tofront");
        document.querySelector(".project__img__detail__title__p1").classList.remove("title__img__detail__tofront");
  
      }
      if(e.target.classList.value.includes("p2")){
        document.querySelectorAll(".project__img__detail__link__p2")[0].classList.remove("title__img__detail__tofront");
        document.querySelectorAll(".project__img__detail__link__p2")[1].classList.remove("title__img__detail__tofront");
        document.querySelector(".project__img__detail__title__p2").classList.remove("title__img__detail__tofront");
  
      }
      if(e.target.classList.value.includes("p3")){
        document.querySelectorAll(".project__img__detail__link__p3")[0].classList.remove("title__img__detail__tofront");
        document.querySelectorAll(".project__img__detail__link__p3")[1].classList.remove("title__img__detail__tofront");
        document.querySelector(".project__img__detail__title__p3").classList.remove("title__img__detail__tofront");
  
      }
      if(e.target.classList.value.includes("p4")){
        document.querySelectorAll(".project__img__detail__link__p4")[0].classList.remove("title__img__detail__tofront");
        document.querySelectorAll(".project__img__detail__link__p4")[1].classList.remove("title__img__detail__tofront");
        document.querySelector(".project__img__detail__title__p4").classList.remove("title__img__detail__tofront");
  
      }
    }
    else{
      e.target.classList.add("project__img__detail__show")
      if(e.target.classList.value.includes("p1")){
        document.querySelectorAll(".project__img__detail__link__p1")[0].classList.add("title__img__detail__tofront");
        document.querySelectorAll(".project__img__detail__link__p1")[1].classList.add("title__img__detail__tofront");
        document.querySelector(".project__img__detail__title__p1").classList.add("title__img__detail__tofront");
      }
      if(e.target.classList.value.includes("p2")){
        document.querySelectorAll(".project__img__detail__link__p2")[0].classList.add("title__img__detail__tofront");
        document.querySelectorAll(".project__img__detail__link__p2")[1].classList.add("title__img__detail__tofront");
        document.querySelector(".project__img__detail__title__p2").classList.add("title__img__detail__tofront");
      }
      if(e.target.classList.value.includes("p3")){
        document.querySelectorAll(".project__img__detail__link__p3")[0].classList.add("title__img__detail__tofront");
        document.querySelectorAll(".project__img__detail__link__p3")[1].classList.add("title__img__detail__tofront");
        document.querySelector(".project__img__detail__title__p3").classList.add("title__img__detail__tofront");
      }
      if(e.target.classList.value.includes("p4")){
        document.querySelectorAll(".project__img__detail__link__p4")[0].classList.add("title__img__detail__tofront");
        document.querySelectorAll(".project__img__detail__link__p4")[1].classList.add("title__img__detail__tofront");
        document.querySelector(".project__img__detail__title__p4").classList.add("title__img__detail__tofront");
      }
    }
}

}
