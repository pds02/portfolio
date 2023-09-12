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


})