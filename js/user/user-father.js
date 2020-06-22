/**
 * Created by HJB on 2020/3/27.
 */
/* 点击按钮，下拉菜单在 显示/隐藏 之间切换 */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// 点击下拉菜单意外区域隐藏
window.onclick = function(event) {
  if (!event.target.matches('#dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*实际时间日期*/
var t = null;
t = setTimeout(time,1000);//开始执行
function time() {
  clearTimeout(t);//清除定时器
  dt = new Date();
  var y = dt.getYear() + 1900;
  var mm = dt.getMonth() + 1;
  var d = dt.getDate();
  var day = dt.getDay();
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("time").innerHTML =h + ":" + m ;
  document.getElementById("date").innerHTML=  y + "年" + mm + "月" + d + "日" +"";
  t = setTimeout(time, 1000);
}


//搜索-跳转页面
var tiaozhuan = function()
{
   document.location.href ='user-search.html?key=' + $("#key").val();
}
