var lunbotu = document.getElementById("lunbotu");
img = lunbotu.firstChild;
img_src =["image/小米816.png", "image/RedmiNote7.png", "image/小米MIX2S.png", "image/32小米电视4C.png", "image/性能怪兽.png"];
var i = 0;
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var dian = [d1, d2, d3, d4, d5];
var xiazai = document.getElementById("xiazai");
var APP = document.getElementById("APP");
var shaoma = document.getElementById("shaoma");

function prev_image() {
    dian[i].innerHTML = "&#xe609;";
    if (i===0) i=4;
    else i--;
    img.src = img_src[i];
    dian[i].innerHTML = "&#xe7f3;";

}
function next_image() {
    dian[i].innerHTML = "&#xe609;";
    if (i===4) i=0;
    else i++;
    img.src = img_src[i];
    dian[i].innerHTML = "&#xe7f3;";
}

// 下载app悬停事件
xiazai.onmouseover = function () {
  xiazai.className = "topbar-download active";
};
xiazai.onmouseout = function () {
  xiazai.className = "topbar-download";
};

// 手机APP悬停事件
APP.onmouseover = function () {
  shaoma.style.display = "block";
};
APP.onmouseout = function () {
  shaoma.style.display = "none";
};

// 轮播图按钮事件
prev.onclick = prev_image;
next.onclick = next_image;

// 圆点悬停点击事件
d1.onmouseover = function () {
    d1.innerHTML = "&#xe7f3;";
};
d1.onmouseout = function () {
    if(i!==0) d1.innerHTML = "&#xe609;";
};
d1.onclick = function (){
    dian[i].innerHTML = "&#xe609;";
    i = 0;
    img.src = img_src[i];
    dian[i].innerHTML = "&#xe7f3;";
};

d2.onmouseover = function () {
    d2.innerHTML = "&#xe7f3;";
};
d2.onmouseout = function () {
    if(i!==1) d2.innerHTML = "&#xe609;";
};
d2.onclick = function (){
    dian[i].innerHTML = "&#xe609;";
    i = 1;
    img.src = img_src[i];
    dian[i].innerHTML = "&#xe7f3;";
};

d3.onmouseover = function () {
    d3.innerHTML = "&#xe7f3;";
};
d3.onmouseout = function () {
    if(i!==2) d3.innerHTML = "&#xe609;";
};
d3.onclick = function (){
    dian[i].innerHTML = "&#xe609;";
    i = 2;
    img.src = img_src[i];
    dian[i].innerHTML = "&#xe7f3;";
};

d4.onmouseover = function () {
    d4.innerHTML = "&#xe7f3;";
};
d4.onmouseout = function () {
    if(i!==3) d4.innerHTML = "&#xe609;";
};
d4.onclick = function (){
    dian[i].innerHTML = "&#xe609;";
    i = 3;
    img.src = img_src[i];
    dian[i].innerHTML = "&#xe7f3;";
};

d5.onmouseover = function () {
    d5.innerHTML = "&#xe7f3;";
};
d5.onmouseout = function () {
    if(i!==4) d5.innerHTML = "&#xe609;";
};
d5.onclick = function (){
    dian[i].innerHTML = "&#xe609;";
    i = 4;
    img.src = img_src[i];
    dian[i].innerHTML = "&#xe7f3;";
};

// 当网页向下滑动 200px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("ding").style.display = "block";
    } else {
        document.getElementById("ding").style.display = "none";
    }
}

// 搜索框事件
document.getElementById("search").onfocus = function() {
    document.getElementsByClassName("search-hot-words")[0].style.display = "none";
    document.getElementById("search").style.borderColor = "#ff6700";
    document.getElementById("submit").style.borderColor = "#ff6700";
};
document.getElementById("search").onblur = function() {
    document.getElementsByClassName("search-hot-words")[0].style.display = "block";
    document.getElementById("search").style.borderColor = "";
    document.getElementById("submit").style.borderColor = "";
};

var auto = setInterval(next_image, 5000);

// 轮播图悬停事件
lunbotu.onmouseover = function () {
    clearInterval(auto);
};
lunbotu.onmouseout = function () {
    auto = setInterval(next_image, 5000);
};