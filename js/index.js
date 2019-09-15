// 当网页向下滑动 200px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("ding").style.display = "block";
    } else {
        document.getElementById("ding").style.display = "none";
    }
}

// 手机APP悬停事件
var APP = document.getElementById("APP");
var shaoma = document.getElementById("shaoma");
APP.onmouseover = function () {
  shaoma.style.display = "block";
};
APP.onmouseout = function () {
  shaoma.style.display = "none";
};
