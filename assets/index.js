const titleItems = document.querySelectorAll(".titleItem");
const skillsContainer = document.querySelector(".skills__text__container");
const otherskillsContainer = document.querySelector(".otherskills__text__container");
const educationContainer = document.querySelector(".education__text__container");



function handleTitlesIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('titleVisible')
        observer.unobserve();
      } else {
        return
      }
    });
  }

function skillsContainerIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('skillsContainerVisible')
        observer.unobserve();
      } else {
        return
      }
    });
}

function otherskillsContainerIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('otherskillsContainerVisible')
        observer.unobserve();
      } else {
        return
      }
    });
}

function educationContainerIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('educationContainerVisible')
        observer.unobserve();
      } else {
        return
      }
    });
}


const titleObserver = new IntersectionObserver(handleTitlesIntersection);
titleItems.forEach(titleItem => {
    titleObserver.observe(titleItem)
});

const skillsContainerObserver = new IntersectionObserver(skillsContainerIntersection);
skillsContainerObserver.observe(skillsContainer)

const otherskillsContainerObserver = new IntersectionObserver(otherskillsContainerIntersection);
otherskillsContainerObserver.observe(otherskillsContainer)

const educationContainerObserver = new IntersectionObserver(educationContainerIntersection);
educationContainerObserver.observe(educationContainer)