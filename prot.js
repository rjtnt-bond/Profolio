

$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('nav').addClass('sticky');
        }
    
        else{
         $('nav').removeClass('sticky');   
        }
       

    
          
});





 //navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');

   });

// typing animation script
 var typed = new Typed(".typing",{
    strings:["Youtuber","Developer","Blogger","Designer","Programmer","Freelancer","Photographer"],
    typeSpeed:130,
    backSpeed:80,
    loop:true
 })

 var typed = new Typed(".typing-2",{
    strings:["Youtuber","Developer","Blogger","Designer","Programmer","Freelancer","Photographer"],
    typeSpeed:130,
    backSpeed:80,
    loop:true
 })
//   owl-carousel script
$(".carousel").owlCarousel({
    margin: 20,
    loop:true,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
            nav: false

        },

        600: {
            items: 2,
            nav: false

        },

        1000:{
            items: 3,
            nav: false

        }
    }
})
});
