$(document).ready(function(){


  $('#Hamburger').click(function(){
    $('.NavMobile').addClass('NavMobileVisible')
    console.log('Clicked')
    $('.CloseNavMobile').click(function(){
      $('.NavMobile').removeClass('NavMobileVisible')
    })
    $('.NavMobile .Items .NavItems li a').click(function(){
      $('.NavMobile').removeClass('NavMobileVisible')
    })
  })

  // $('.NavMobile .Items .NavItems li').click(function(){

  // })

    $('.landing-left').hover(function(){

        $(".landing-left-text").toggleClass("landing-left-text-shifted")
        $(".landing-left .WaveFront").toggleClass("WaveFront-shifted")
        $(".landing-left .WaveBack").toggleClass("WaveBack-shifted")
        $(".landing-left .Main").toggleClass("Main-shifted")
        $(".landing-left .Decor").toggleClass("Decor-shifted")
        $(this).toggleClass('landing-left-shifted')
        $('.landing-left .ReactJS').toggleClass('ReactJS-shifted')
        $('.landing-left .Kuber').toggleClass('Kuber-shifted')
        $('.landing-left .HTML5').toggleClass('HTML5-shifted')
        $('.landing-left .Github').toggleClass('Github-shifted')
        $('.landing-left .Table').toggleClass('Table-shifted')
        $('.landing-left .Logo').toggleClass('Logo-noshow')
        $('.landing-left .LogoWhite').toggleClass('LogoWhite-show')
    })

    $('.landing-right').hover(function(){
        $('.landing-right-text').toggleClass('landing-right-text-shifted')
        $('.landing-right .WaveFront').toggleClass('WaveFront-shifted')
        $('.landing-right .WaveBack').toggleClass('WaveBack-shifted')
        $('.landing-right .Main').toggleClass('Main-shifted')
        $('.landing-right .Decor').toggleClass('Decor-shifted')
        $('.AWS').toggleClass('AWS-shifted')
        $('.Docker').toggleClass('Docker-shifted')
        $('.Ansible').toggleClass('Ansible-shifted')
        $(this).toggleClass('landing-right-shifted')
    })



    
    let onlineCounter=false;
    $(".onlineCourses").click(function() {
            $(".MenuModal").fadeToggle(300, function(){
                onlineCounter=true;
            })
            $(".BGClick").addClass("showBGClick")
    })


    $(".BGClick").click(function() {
        $(".MenuModal").fadeOut(300)
        $(this).toggleClass("showBGClick")
    })


    console.log($(".BGClick"))







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
})


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

