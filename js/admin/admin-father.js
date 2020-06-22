/**
 * Created by HJB on 2020/3/27.
 */
/* 点击按钮，下拉菜单在 显示/隐藏 之间切换 */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// 点击下拉菜单意外区域隐藏
window.onclick = function(event) {
  if (!event.target.matches('#dropbtn'))//触发点击事件
  {
    var dropdowns = document.getElementsByClassName("dropdown-content");//class属性
    var i;
    for (i = 0; i < dropdowns.length; i++)
    {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show'))  //可见的状态下显示列表的内容
      {
        openDropdown.classList.remove('show');//如果在显示的状态下则隐藏列表的内容，也就是删除列表的内容。
      }
    }
  }
}

/*实际时间日期*/
var t = null;
t = setTimeout(time,1000);//开始执行
function time() {
  clearTimeout(t);//清除定时器
  TIME = new Date();//获取实时时间
  var y = TIME.getYear() + 1900;//获取年
  var mm = TIME.getMonth() + 1;//获取月
  var d = TIME.getDate();//获取日
  var day = TIME.getDay();//获取星期几
  var h = TIME.getHours();//获取小时
  var m = TIME.getMinutes();//获取分
  var s = TIME.getSeconds();//获取秒

  //补文字为0，比如小于10的话，则补0，比如早上8点，则08
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  document.getElementById("time").innerHTML =h + ":" + m ;//在动态页面中显示小时和分
  document.getElementById("date").innerHTML=  y + "年" + mm + "月" + d + "日" +"";//在动态页面中显示实时日期
  t = setTimeout(time, 1000);//自动刷新每一秒
}
