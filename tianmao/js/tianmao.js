// 轮播图
var imgNum= document.querySelectorAll(".wheel-box li").length
// 获取盒
var box = document.querySelector(".wheel-box");
// 获取container
var container = document.querySelector('.container')
// 获取图片上的颜色
var wheelNum = document.querySelectorAll(".wheel-box li")   
// 轮播图按钮
var wheelBtns = document.querySelectorAll(".slider-nav li");

var num = 0;
function move() {
    num++;
    if(num == wheelNum.length){
        num = 0;
    }
    animate(box,{
        left:-num*1230
    },400,Tween.Liner)      
    container.style.background = wheelNum[num].getAttribute("color")
    // 按钮颜色
    for (let i = 0; i < wheelBtns.length; i++) {
        wheelBtns[i].style.background = "white" 
    }
    wheelBtns[num].style.background = "red"
}
var t = setInterval(move,3000)
var wheelWin = document.querySelector(".wheel-win");

wheelWin.onmouseover = function () {
    clearInterval(t);
  }
  wheelWin.onmouseout = function () {
    t = setInterval(move,3000)
  }

  for (var i = 0; i < wheelBtns.length; i++) {
    wheelBtns[i].index = i;
    wheelBtns[i].onmouseover = function () {
        var that = this;
    delay(100,function () {
        num = that.index
        for (var j = 0; j < wheelItem.length; j++) {
                wheelItem[j].style.opacity = 0;
                wheelItem[j].style.zIndex = 0;
                wheelBtns[j].style.background = "rgba(0,0,0,0.3)";
        }
        wheelItem[num].style.opacity = 1;
        wheelItem[num].style.zIndex = 1;
        wheelBtns[num].style.background = "#fff";
        container.style.background = wheelItem.getAttribute("color");
      })
    }

    wheelBtns[i].onmouseout = function () {
        clearInterval(wheelWin.t)
      }

}

// menu 变化
var box1 = document.querySelectorAll(".slider-nav li");
var a = document.querySelectorAll(".nav-con li")
var num = 0;
for (let i = 0; i < a.length; i++) {
    a[i].onmouseover=function(){
    for (var j = 0; j < a.length; j++) {
        a[j].style.background="none";
        a[i].style.background="red";
    }
    }
}
//  鼠标移入 轮播图点


// 侧边栏
var dh = document.querySelector(".dh")
var searchTop = document.querySelector(".search-top");
var cathetNav = document.querySelector(".cathet-nav");
 window.onscroll = function () {

    // 搜索框
    var st = document.documentElement.scrollTop;
    if(st < 500){
        searchTop.style.top = "-50px"
        
    }else{
        searchTop.style.top = 0;
    }
    
    // 侧边栏
    if(st < 800){
        cathetNav.style.opacity = 0;
        cathetNav.style.transform = "scale(0,0)"    
    }else{  
        cathetNav.style.opacity = 1;
        cathetNav.style.transform = "scale(1,1)"
    }

 }

// 轮播按钮的事件
