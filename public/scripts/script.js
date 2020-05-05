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

// $('.link').click(function(e) {
//     e.preventDefault();
//     $("answer").addClass('answer-open')
// });

// $(".link").click(function(){
//     $(this).addClass("accOpen")
// })

$(".CurriculumLink").click(function() {
    $(this).next().toggleClass("Open")
})