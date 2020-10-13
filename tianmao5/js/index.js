
var opts=document.querySelectorAll(".menu-list");
var cons=document.querySelectorAll(".cons-list");
var consBox=document.querySelector(".cons");
var menu=document.querySelector(".menu");
menu.onmouseout=function () {
    consBox.style.display="none"
}
menu.onmouseover=function () {
    consBox.style.display="block"
}
for(var i=0;i<opts.length;i++){
    opts[i].index=i;
    opts[i].onmouseover=function () {
        for(var j=0;j<opts.length;j++){
            opts[j].style.background="none";
            opts[j].style.color="#fff";
            opts[j].querySelector("a").style.color="#fff";
            cons[j].style.display="none"
        }
        this.style.background="#fff";
        this.style.color=this.getAttribute("color");
        this.querySelector("a").style.color=this.getAttribute("color");

        cons[this.index].style.display="block";
    }
}
var  lbItem=document.querySelectorAll(".lb-imgs li");
var content=document.querySelector(".content");
var lbWin=document.querySelector(".lb-win");
var lbBtns=document.querySelectorAll(".lb-btns li");
var num=0;
lbWin.onmouseover=function () {
   clearInterval(t);
}
lbWin.onmouseout=function () {
    t=setInterval(move,3000)
}
function move() {
    num++;
    if(num>lbItem.length-1){
        num=0;
    }
    for(var i=0;i<lbItem.length;i++){
        lbItem[i].style.opacity=0;
        lbItem[i].style.zIndex=0;
    }
    lbItem[num].style.zIndex=1;
    lbItem[num].style.opacity=1;
    content.style.background=lbItem[num].getAttribute("color");

    for(var i=0;i<lbBtns.length;i++){
        lbBtns[i].style.background="rgba(0,0,0,0.3)";
    }
    lbBtns[num].style.background="rgb(255,255,255)";
}
var t=setInterval(move,3000);
for(var i=0;i<lbBtns.length;i++){
    lbBtns[i].index=i;
    lbBtns[i].onmouseover=function () {
        var that=this;
       delay(100,function () {
           num=that.index;
           for(var j=0;j<lbItem.length;j++){
               lbItem[j].style.opacity=0;
               lbItem[j].style.zIndex=0;
               lbBtns[j].style.background="rgba(0,0,0,0.3)";
           }
           lbItem[num].style.zIndex=1;
           lbItem[num].style.opacity=1;
           content.style.background=lbItem[num].getAttribute("color");
           lbBtns[num].style.background="#fff";

       })

    }

    lbBtns[i].onmouseout=function () {
        clearTimeout(lbWin.t);
    }

}

function delay(time,callback) {

    lbWin.t=setTimeout(function () {
        callback();
    },time)
}



/*
*   轮动条效果
* */

var search=document.querySelector(".search");
var floorNav=document.querySelector(".floor-nav");

//楼层按钮以及楼层内容的对象集合

var floorBtns=document.querySelectorAll(".floor-nav-list");
var floorCons=document.querySelectorAll(".floor-list");
console.log(floorCons);


var backTop=document.querySelector(".back-top");
backTop.onclick=function () {
    animate(document.documentElement,{
        scrollTop:0
    },1000,Tween.Linear)
}
// 记录每一个楼层的top值

for(var i=0;i<floorBtns.length;i++){
    floorBtns[i].top=floorCons[i].offsetTop;
    floorBtns[i].height=floorCons[i].offsetHeight;
    floorBtns[i].onclick=function () {

        animate(document.documentElement,{
            scrollTop:this.top
        },1000,Tween.Linear)

    }
}



window.onscroll=function () {
    var st=document.documentElement.scrollTop;

    //  搜索框
    if(st<400){
        search.style.top="-50px";
    }else{
        search.style.top=0;
    }

    // 处理侧边导航
    if(st<500){
        floorNav.style.opacity=0;
        floorNav.style.transform="scale(0,0)";
    }else{
        floorNav.style.opacity=1;
        floorNav.style.transform="scale(1,1)";
    }

    // 侧边导航的背景

    for(var i=0;i<floorBtns.length;i++){
        if(st>=floorBtns[i].top&&st<floorBtns[i].top+floorBtns[i].height){

            for(var j=0;j<floorBtns.length;j++){
                floorBtns[j].style.background="gray";
            }
            floorBtns[i].style.background=floorBtns[i].getAttribute("color");
        }
    }
}


























