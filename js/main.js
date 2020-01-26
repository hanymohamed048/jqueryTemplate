$(function () {
  $('header').height($(window).height());
  $(window).resize(function(){
    $('header').height($(window).height());
    $('header h2').each(function(){
    $('header h2').css('marginTop',($(window).height()-$('header h2').height())/2);
    $('header h2').css('marginLeft',($(window).width()-$('header h2').width())/2);
  });
  });
  window.onscroll= function (){
      
      if ( window.pageYOffset >= 270 ) {
       $('.toTop').slideDown(1000);
      }
      else{
        $('.toTop').slideUp();
      }
};
$('.toTop').click(function(){
   $('html, body').animate({ 
      scrollTop:$('#home').offset().top

    },1000);

});
  $('nav li a').click(function(){
     $(this).parent().addClass('active').siblings().removeClass('active');
  });
  $('header h2').each(function(){
    $(this).css('marginTop',($(window).height()-$('header h2').height())/2);
    $(this).css('marginLeft',($(window).width()-$('header h2').width())/2);
  });
  $('nav li a').click(function(){
     $('html, body').animate({ 
      scrollTop:$('#'+ $(this).data('value')).offset().top

    },1000);
      console.log($(this).offset());
  });
  $('.our-images > div').mouseenter(function(){
    $(this).children('.overlay').slideDown(1000);

  });
  $('.our-images > div').mouseleave(function(){
    $('.overlay').slideUp(500);

  });
  (function autoSlider(){
      $('.slider .active').each(function(){
        if(!$(this).is(':last-child'))
        {
          $(this).delay(3000).slideUp(1000,function(){

             $(this).removeClass('active').next().addClass('active').slideDown();
             autoSlider()
          });
        }
        else
        {
          $(this).delay(3000).slideUp(1000,function(){

             $(this).removeClass('active');
             $('.slider div').eq(0).addClass('active').slideDown();
             autoSlider()
          });

        }

      });

  }());

  $('.row > div').mouseenter(function(){
    $(this).children('.over ,.row span').fadeIn(1000);

  });
  $('.row > div').mouseleave(function(){
    $('.over,.row span').fadeOut(500);

  });
  $('.our-projects ul li').click(function(){
    var x=$(this).attr('id');
    $(this).parent().parent().siblings(' .gallary').hide();
     $(this).siblings('li').removeClass('active');
     $(this).addClass('active');
     $('#'+ x +'-content').slideDown(2000);

  });
  var c=0;
  var z= document.getElementById('begining');
  var y="Welcome in my website";
  window.onload= function(){
        var x=setInterval(function(){
        z.textContent=z.textContent + y[c];
        c++;
          if(c>=y.length)
            clearInterval(x);

        },200);

  };
  
  $("html").niceScroll({
    cursorcolor:"#1abc9c",
    cursorwidth:'10px',
    cursorheight:'70px',
    cursorborder:'none'

  }); 

});

