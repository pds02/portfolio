$(function(){

  /* swiper */
    $('a.gallery').colorbox();

    var swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        direction: getDirection(),
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          resize: function () {
            swiper.changeDirection(getDirection());
          },
        },
      });
  
      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  
        return direction;
      }

      /* 탭메뉴 */
      $('.tab_cont .web').hide().eq(0).show()

      $('.tab_btn ul li a').click(function(){
          var tab_n = $(this).parent().index()
          $('.tab_cont .web').hide()
          $('.tab_cont .web').eq(tab_n).show()
          $('.tab_btn ul li').removeClass('on')
          $(this).parent().addClass('on')
          console.log(tab_n)

          return false
      })

            
        $('.nav li a').click(function(){
            var n = $(this).parent().index() 
            var offset = $('.page').eq(n).offset().top
            $('html,body').stop().animate({scrollTop:offset})
        }) 


})
