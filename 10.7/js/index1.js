// // 选项卡
var menuList = document.querySelectorAll(".menu-list");
console.log(menuList);
var consList = document.querySelectorAll(".cons-list");
console.log(consList);
var consbox = document.querySelector(".cons");
// console.log(cons);
var menu = document.querySelector(".menu");
console.log(menu);


// 鼠标移入变背景色   字体颜色   显示右侧的内容

menu.onmouseout = function () {
	consbox.style.display = "none";
}	
menu.onmouseover = function () {
	consbox.style.display = "block";
}



for(var i=0;i<menuList.length;i++){
    menuList[i].index=i;
    menuList[i].onmouseover=function () {
        for(var j=0;j<menuList.length;j++){
            menuList[j].style.background="none";
            menuList[j].style.color="#fff";
            menuList[j].querySelector("a").style.color="#fff";
            consList[j].style.display="none"
        }
        this.style.background="#fff";
        this.style.color=this.getAttribute("color");
        this.querySelector("a").style.color=this.getAttribute("color");

        consList[this.index].style.display="block";
    }
}


// 轮播图
// 获取容器
var wheelWin = document.querySelector(".wheel-win");
// 获取所有的图片
var wheelItem = document.querySelectorAll(".wheel-box li");
// 获取背景
var container = document.querySelector(".container");
// 获取按钮
var wheelBtns = document.querySelectorAll(".wheel-btns li");

// 鼠标移入暂停
wheelWin.onmouseover = function () {
	clearInterval(t);
  }
  wheelWin.onmouseout = function () {
	t = setInterval(move,3000)
  }

var num =0;
function move() {
	num++;
	// 为什么减1
	if(num > wheelItem.length-1){
		num = 0;
	}
	for (let i = 0; i < wheelItem.length; i++) {
		// 切换图片
		wheelItem[i].style.opacity = 0;
		wheelItem[i].style.zIndex = 0;	
	}
	wheelItem[num].style.opacity = 1;
	wheelItem[num].style.zIndex = 1;
	// 循环哪个从哪个属性取颜色
	container.style.background = wheelItem[num].getAttribute("color")
	// 按钮颜色
	for (let i = 0; i < wheelBtns.length; i++) {
		wheelBtns[i].style.background = "rgba(0,0,0,0.3)"
	}
	wheelBtns[num].style.background = "#fff"
  }
  var t = setInterval(move,3000)

//   轮播按钮事件

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

function delay(time,callback) {
	wheelWin.t = setTimeout(function () {
		callback()
	},time)
}

// 返回键
var backTop = document.querySelector(".backTop");
backTop.onclick = function () {
	
  }

// 轮滑条
var search = document.querySelector(".search");

var floorNav = document.querySelector(".floor-nav");

var floorBtns=document.querySelectorAll(".floor-nav-list");
// floor-nav-list每个模块的距离
var floorCons=document.querySelectorAll(".floor-list");
// 导航内容

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
                floorBtns[j].style.background="none";
            }

            floorBtns[i].style.background=floorBtns[i].getAttribute("color");
        }
    }
}

