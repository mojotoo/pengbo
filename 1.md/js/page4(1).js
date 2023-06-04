$(document).ready(function(){undefined
    // 侧边导航栏设置在固定位置的栏变底色，字体变色
    // $(".nav2 li").first().addClass("current1");
    $('.nav2 a').click(function(e) {
        e.preventDefault();    
        $('.nav2 li').removeClass("current1");
        $(this).parent().addClass("current1");
    });

    // 比赛场地的tab标签展示两个比赛场地
    $('.tabs a').click(function(e) {
        e.preventDefault();    
        $('.tabs li').removeClass("current2").removeClass("hoverItem");
        $(this).parent().addClass("current2");
        $("#content div").removeClass("show");
        $('#' + $(this).attr('title')).addClass('show');
    });
    $('.tabs a').hover(function(){
       if(!$(this).parent().hasClass("current2")){
            $(this).parent().addClass("hoverItem");
        }
        },function(){
            $(this).parent().removeClass("hoverItem");
    });
});