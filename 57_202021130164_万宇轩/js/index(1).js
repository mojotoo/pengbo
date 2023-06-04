$(document).ready(function () {
    /*下拉菜单动画*/
    $(".nav>li").mouseenter(function () {
        var $sub = $(this).children(".sub");
        $sub.slideDown(800);
    })
    $(".nav>li").mouseleave(function () {
        var $sub = $(this).children(".sub");
        $sub.slideUp(800);
    })

    
    /* 轮播图平行滑动 */
    var len = $(".slider-pic").length; //获取焦点图个数
    var index = 0;
    var picTimer;
    //左右箭头切换
    $('.right').click(function () {
        $("#banner ul").animate({marginLeft:"-1200px"},600, function () {
            $("#banner ul>li").eq(0).appendTo($("#banner ul"));
            $("#banner ul").css('marginLeft','0px');
        });
    });
    $('.left').click(function () {
        $("#banner ul").css('marginLeft','-1200px');
        $("#banner ul>li").eq(2).prependTo($("#banner ul"));
        $("#banner ul").animate({marginLeft:"0px"},600);
    }); 
    /*自动播放设置*/
    function showPicsRight(index){
        $("#banner ul").animate({marginLeft:"-1200px"},600, function () {
            $("#banner ul>li").eq(index).appendTo($("#banner ul"));
            $("#banner ul").css('marginLeft','0px');
        });
    }
    function abc() {   
        showPicsRight(index);
        index++;
        if(len*index == len) {index = 0;}
        }
    picTimer = setInterval(function(){abc()},3000);//此3000代表自动播放的间隔，单位：毫秒
    
    //光标悬停停止自动播放
    $("#banner").on('mouseenter',function(){
        clearInterval(picTimer);
    }).on('mouseleave', function(){
        picTimer=setInterval(function(){abc()},3000) ;//重新启动
    });
    /*隐藏箭头*/
    //隐藏向前、向后翻按钮 
    $('.left,.right').hide(); 
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
    //hover事件模拟鼠标悬停，鼠标悬停时，触发第一个函数；离开时，触发第二个函数；
    $('#box').hover(function() { 
        $('.left,.right').show(); 
    }, function() { 
        $('.left,.right').hide(); 
    }); 
    //新闻标题跟随图片移动


    /* 回到顶部箭头 */
    $(".ah").hide()
    // 屏幕滚动超出400px，显示回到顶部
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 400) {
        $(".ah").fadeIn('slow');
        } else {
        $(".ah").fadeOut('slow');
        }
    });
    // 点击回到顶部，页面回到顶部
    $(".ah").click(function() {
        $('body, html').animate({scrollTop: 0}, 600);
    });
})