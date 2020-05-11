let onlineCounter=false;
$(".onlineCourses").on("click", function() {
    if(!onlineCounter){
        $(".MenuModal").fadeIn(300, function(){
            onlineCounter=true;
        })
    }
    else{
        $(".MenuModal").fadeOut(200, function(){
            onlineCounter=false;
        })
    }

})




$(".CurriculumLink").click(function() {
    $(this).next().toggleClass("Open")
    $(this).children(".accRotate").toggleClass("Rotate")
})

const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".introSS")

const sectionOneOptions = {
    rootMargin : "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add('nav-scrolled')
            console.log(nav.classList)
        }
        else{
            nav.classList.remove('nav-scrolled')
        }
    })
}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)