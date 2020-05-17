const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".intro")

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add('nav-scrolled')
        }
    })
})

sectionOneObserver.observe(sectionOne)