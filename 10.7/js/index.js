// 选项卡

var opts=document.querySelectorAll(".menu-list");


var cons=document.querySelectorAll(".cons-list");

var consBox=document.querySelector(".cons");

var menu=document.querySelector(".menu");


// 事件流导致的问题
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


/*
*
*   轮播图
* */

var  wheelItem=document.querySelectorAll(".wheel-box li");

var container=document.querySelector(".container");

var wheelWin=document.querySelector(".wheel-win");

var wheelBtns=document.querySelectorAll(".wheel-btns li");

var num=0;



wheelWin.onmouseover=function () {
   clearInterval(t);
}
wheelWin.onmouseout=function () {
    t=setInterval(move,3000)
}

function move() {
    num++;
    if(num>wheelItem.length-1){
        num=0;
    }
    for(var i=0;i<wheelItem.length;i++){
        wheelItem[i].style.opacity=0;
        wheelItem[i].style.zIndex=0;
    }

    // animate(wheelItem[num],{
    //     opacity:1
    // },1000,Tween.Linear)

    //  animate 优势：1. 回调函数，检测到动画的结束  2.精准的指定属性的动画与否

    //          劣势：1. 运行效率没有 transition 高  2. 如果浏览器失去焦点，画面是不更新


    //  transition 优势 1. 运行效率较高   2. 写法简单

    // 劣势：1. 检测到动画的结束比较复杂，并不能够精准的检测
    //      2. 不能够精准指定动画与否.
    
    wheelItem[num].style.zIndex=1;
    wheelItem[num].style.opacity=1;
    container.style.background=wheelItem[num].getAttribute("color");
    for(var i=0;i<wheelBtns.length;i++){
        wheelBtns[i].style.background="rgba(0,0,0,0.3)";
    }
    wheelBtns[num].style.background="rgb(255,255,255)";



}

var t=setInterval(move,3000);



// 轮播按钮的事件
for(var i=0;i<wheelBtns.length;i++){
    wheelBtns[i].index=i;
    wheelBtns[i].onmouseover=function () {
        var that=this;
        console.log(this);
       delay(100,function () {
           num=that.index;

           
           for(var j=0;j<wheelItem.length;j++){
               wheelItem[j].style.opacity=0;
               wheelItem[j].style.zIndex=0;
               wheelBtns[j].style.background="rgba(0,0,0,0.3)";
           }
           wheelItem[num].style.zIndex=1;
           wheelItem[num].style.opacity=1;
           container.style.background=wheelItem[num].getAttribute("color");
           wheelBtns[num].style.background="#fff";

       })

    }
    

    wheelBtns[i].onmouseout=function () {
        clearTimeout(wheelWin.t);
    }

}

function delay(time,callback) {

    wheelWin.t=setTimeout(function () {
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

var floorCons=document.querySelectorAll("#floor-list");

var backTop=document.querySelector("#back-top");
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
    console.log(floorBtns[i]);
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
                floorBtns[j].style.background="none";
            }

            floorBtns[i].style.background=floorBtns[i].getAttribute("color");
        }
    }
}


























