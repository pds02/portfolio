$(function(){

    var display = $("#topBannerWrap").css('display')
    if(display ==  'none'){
        $('#header').css({minHeight:80})
    }else{
        $('#header').css({minHeight:130})
    }

    /* 1.링크차단 */
    $('a').click(function(){
        return false;
    })


    //2. sub 메뉴가 내려오도록 설정\
    $('.box_bg').hide()
    $('.list_dep2 > li').mouseover(function(){
        $(this).find('.box_bg').stop().slideDown(200)
        $('.list_dep2 > li').removeClass('active')
        $(this).addClass('active')

    })
    $('.list_dep2 > li').mouseout(function(){
        $(this).find('.box_bg').stop().slideUp(200)
        $('.list_dep2 > li').removeClass('active')
    })

    //3.오늘이창을 열지 않음
    $('#btnTodayClose').click(function(){
        closeWin()
        $('#header').css({minHeight: 80})
        
    })

    //4.스크롤시 메뉴가 작아지는 효과
    $(window).scroll(function(){
    var win_top = $(window).scrollTop()
    display = $("#topBannerWrap").css('display') //display,none

    if(win_top <= 40){
        if(display == 'none'){ //탑배너가 없을때
            $('.header').removeClass('small')
            $('#header').css({minHeight:80})
        }else{ //탑배너가 있을때
            $('.header').removeClass('small')
            $('#header').css({minHeight:130})
        }
    }else{
        if(display == 'none'){ //탑배너가 없을때
            $('.header').addClass('small') //50
            $('#header').css({minHeight:50})
        }else{ //탑배너가 있을때
            $('.header').addClass('small') //
            $('#header').css({minHeight:100})
        }


    }
    /* if(win_top <= 40){
        $('.header').removeClass('small')
        $('#header').css({minHeight:130})
    }else{
        $('.header').addClass('small')
        $('#header').css({minHeight:100})
    } */
    })


    /* 5. 메인 슬라이드(장면전환) */
    var main_n = 0
    var rolling = setInterval(main_v,3000)
    // 자동롤링
    function main_v(){
        $('.next_btn').click()
    }


    //다음버튼 클릭했을때
    $('.next_btn').click(function(){
        main_n++
        if(main_n == 8){
            $('.swiper_wrapper').css({left:0})
            main_n = 1
        }
        $('.swiper_slide').css({opacity:0}).eq(main_n).css({opacity:1})
        $('.swiper_wrapper').stop().animate({left:-1194*main_n})

        if(main_n == 7){
            $('.pignation li').removeClass('on')
            $('.pignation li').eq(0).addClass('on')
        }else {
            $('.pignation li').removeClass('on')
            $('.pignation li').eq(main_n).addClass('on')
        }
        clearInterval(rolling)
        rolling = setInterval(main_v,3000)
    })

    //이전버튼 클릭했을때
    $('.prev_btn').click(function(){
        main_n--
        if(main_n == -1){
            $('.swiper_wrapper').css({left:-1197*7})
            main_n = 6
        }
        $('.swiper_slide').css({opacity:0}).eq(main_n).css({opacity:1})
        $('.swiper_wrapper').stop().animate({left:-1194*main_n})
        $('.pignation li').removeClass('on')
        $('.pignation li').eq(main_n).addClass('on')

        clearInterval(rolling)
        rolling = setInterval(main_v,3000)
    })


    //pignaiton 클릭 했을때
    $('.pignation li').click(function(){
        main_n = $(this).index()
        //console.log(main_n)
        if($(this).hasClass('on') == false){ //on클래스가 없으면 모두 투명 해당하는 li만 투명도1
            $('.swiper_slide').css({opacity:0}).eq(main_n).css({opacity:1})
            $('.swiper_wrapper').stop().animate({left:-1194 * main_n})
        }
        $('.pignation li').removeClass('on')
        $(this).addClass('on')

        clearInterval(rolling)
        rolling = setInterval(main_v,3000)

    })

    //일시정지 버튼 클릭시
    $('.auto_btn').click(function(){
        if($(this).hasClass('play') == false){ //play클래스가 없으면 
            clearInterval(rolling)//멈추고
            $(this).addClass('play')//paly클래스 추가
        }else{  //play가 있으면
            rolling = setInterval(main_v,3000)//자동실행
            $(this).removeClass('play')//play클래스 제거
        }
    })



})