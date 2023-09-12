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


    //2. sub 메뉴가 내려오도록 설정
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
        $('.visualBanner .next_btn').click()
    }


    //다음버튼 클릭했을때
    $('.visualBanner .next_btn').click(function(){
        main_n++
        if(main_n == 8){
            $('.visualBanner .swiper_wrapper').css({left:0})
            main_n = 1
        }
        $('.visualBanner .swiper_slide').css({opacity:0}).eq(main_n).css({opacity:1})
        $('.visualBanner .swiper_wrapper').stop().animate({left:-1194*main_n})

        if(main_n == 7){
            $('.visualBanner .pignation li').removeClass('on')
            $('.visualBanner .pignation li').eq(0).addClass('on')
        }else {
            $('.visualBanner .pignation li').removeClass('on')
            $('.visualBanner .pignation li').eq(main_n).addClass('on')
        }
        clearInterval(rolling)
        rolling = setInterval(main_v,3000)
    })

    //이전버튼 클릭했을때
    $('.visualBanner .prev_btn').click(function(){
        main_n--
        if(main_n == -1){
            $('.visualBanner .swiper_wrapper').css({left:-1197*7})
            main_n = 6
        }
        $('.visualBanner .swiper_slide').css({opacity:0}).eq(main_n).css({opacity:1})
        $('.visualBanner .swiper_wrapper').stop().animate({left:-1194*main_n})
        $('.visualBanner .pignation li').removeClass('on')
        $('.visualBanner .pignation li').eq(main_n).addClass('on')

        clearInterval(rolling)
        rolling = setInterval(main_v,3000)
    })


    //pignaiton 클릭 했을때
    $('.visualBanner .pignation li').click(function(){
        main_n = $(this).index()
        //console.log(main_n)
        if($(this).hasClass('on') == false){ //on클래스가 없으면 모두 투명 해당하는 li만 투명도1
            $('.visualBanner .swiper_slide').css({opacity:0}).eq(main_n).css({opacity:1})
            $('.visualBanner .swiper_wrapper').stop().animate({left:-1194 * main_n})
        }
        $('.visualBanner .pignation li').removeClass('on')
        $(this).addClass('on')

        clearInterval(rolling)
        rolling = setInterval(main_v,3000)

    })

    //일시정지 버튼 클릭시
    $('.visualBanner .auto_btn').click(function(){
        if($(this).hasClass('play') == false){ //play클래스가 없으면 
            clearInterval(rolling)//멈추고
            $(this).addClass('play')//paly클래스 추가
        }else{  //play가 있으면
            rolling = setInterval(main_v,3000)//자동실행
            $(this).removeClass('play')//play클래스 제거
        }
    })

    /* 로그인 tab */
    $('.login_tab_content > div').hide().eq(0).show()
    $('.box_login_tab li a').click(function(){
        var tab_n = $(this).parent().index()
        $('.login_tab_content > div').hide().eq(tab_n).show()

        $('.box_login_tab li').removeClass('active')
        $(this).parent().addClass('active')
    })

    /* app_store 슬라이드 */
    var app_store_n = 0

    rolling2 = setInterval(app_slider,3000)
    function app_slider(){
        app_store_n++
        if(app_store_n == 5){
            $('.app_store .swiper_wrapper').css({left:0})
            app_store_n = 1
        }
        $('.app_store .swiper_wrapper').animate({left:-280*app_store_n})

        if(app_store_n == 4){
            $('.app_store .pignation li').removeClass('on')
            $('.app_store .pignation li').eq(0).addClass('on')
        }else{
            $('.app_store .pignation li').removeClass('on')
            $('.app_store .pignation li').eq(app_store_n).addClass('on')
        }
    }

    $('.app_store .pignation li').click(function(){
        app_store_n = $(this).index()
        $('.app_store .swiper_wrapper').animate({left:-280*app_store_n})

        $('.app_store .pignation li').removeClass('on')
        $(this).addClass('on')

        clearInterval(rolling2)
        rolling2 = setInterval(app_slider,3000)
    })

    $('.app_store .auto_btn').click(function(){
        if($(this).hasClass('play') == false){ //play클래스가 없으면 (일시정지버튼이 있다면)
            clearInterval(rolling2)//롤링을 멈추고 
            $(this).addClass('play')//play 클래스 추가

        }else{ // play 클래스가 있다면
            rolling2 = setInterval(app_slider,3000) //다시 롤링을 시작하고
            $(this).removeClass('play') //play 클래스 제거
        }
    })

    /* main_login 이동 */
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop()
        if(scrollTop <= 450){ //450까지 이동했을 때 스크롤 된 값만큼 이동
            $('.right_content').animate({top:scrollTop},0.02)
            console.log(scrollTop)
        }else{
            $('.rigth_content').css({top:450})
        }
    })

})