
var hflag=1;
function sunMove(){
    var obj=document.getElementById("sundiv");
    var left=obj.style.left;
    left=eval(left.substring(0,left.length-2));
    left += 1 * hflag;
    if(left>840){
        hflag = -1;
    }
    if(left<350){
        hflag = 1;
    }
    obj.style.left = left + "px";

    setTimeout("sunMove()", 10)
}

var txt = "欢迎来到万宇轩的个人主页";
var count  = 0; //子字符串的长度
function scroll(){
    var temp = txt.substring(0, count);
    var obj = document.getElementById("wyx");
    obj.innerHTML = temp;
    count++;
    if(count > txt.length){
        count = 0;
    }
    setTimeout("scroll()", 600);
}