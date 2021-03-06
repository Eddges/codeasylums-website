$(function(){
    $('.timeline-nav').slick({
       slidesToShow: 9,
       slidesToScroll: 1,
       asNavFor: '.timeline-slider',
       centerMode: false,
       focusOnSelect: false,
        mobileFirst: true,
       arrows: false,
       infinite:true,
        responsive: [
            {
           breakpoint: 768,
           settings: {
             slidesToShow: 8,
            }
           },
          {
           breakpoint: 0,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 2,
           }
         }
      ]
   });
   
    $('.timeline-slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       asNavFor: '.timeline-nav',     
       centerMode: false,     
       cssEase: 'ease',
        edgeFriction: 0.5,
        mobileFirst: true,
        speed: 500,
        focusOnSelect : false,
        responsive: [
          {
           breakpoint: 0,
           settings: {
               centerMode: false
           }
         },
            {
           breakpoint: 768,
           settings: {
               centerMode: true
           }
         }
      ]
   });
  
 });