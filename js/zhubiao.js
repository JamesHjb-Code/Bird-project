/**
 * Created by HJB on 2020/2/29.
 */
//框内移动显示坐标
 function cnvs_getCoordinates(e)
 {
   //不能用clientX, 用pageX为文档坐标,clientX表示浏览器界面坐标,会随滚动条改变
   x=e.pageX-e.target.offsetLeft;
   y=e.pageY-e.target.offsetTop;

 }
 function cnvs_clearCoordinates()//出框后不显示坐标
 {

 }


// console.log('=========')
window.onload = function(e)
{
  e = e || window.event;
  // startX, startY 为鼠标点击时初始坐标
  // diffX, diffY 为鼠标初始坐标与 box 左上角坐标之差，用于拖动
  var startX, startY, diffX, diffY;
  // 是否拖动，初始为 false
  var dragging = false;

  var coordiv = document.getElementById('coordiv');

  // 鼠标按下
  document.onmousedown = function(e)
  {
    startX = e.pageX;
    startY = e.pageY;

    // 如果鼠标在 box 上被按下,坐标判定防止在box之外
    if(startY<=coordiv.offsetTop+coordiv.offsetHeight && startY>=coordiv.offsetTop && startX>=coordiv.offsetLeft && startX<=coordiv.offsetLeft+coordiv.offsetWidth)
    {
      if(e.target.className.match(/box/))
      {
        // 允许拖动
        dragging = true;

        // 设置当前 box 的 id 为 moving_box
        if(document.getElementById("moving_box") !== null)
        {
          document.getElementById("moving_box").removeAttribute("id");
        }
        e.target.id = "moving_box";
        // 计算坐标差值
        diffX = startX - e.target.offsetLeft;
        diffY = startY - e.target.offsetTop;
      }
      else
      {
        // 在页面创建 box
        var active_box = document.createElement("div");//创建div元素
        active_box.id="active_box";
        active_box.className = "box";
        active_box.id= "active_box";
        active_box.style.top = startY + 'px';//获取上的坐标值
        active_box.style.left = startX + 'px';//获取左的坐标值
        active_box.setAttribute("ondrop","drop(event)");//指改变"ondrop"这个属性并指定值
        active_box.setAttribute("ondragover","allowDrop(event)");//根据上面一样的
        document.body.appendChild(active_box);//在动态页面中显示矩形
        active_box = null;
      }
    }

  };

  // 鼠标移动
  document.onmousemove = function(e)
  {
    if(e.pageY <= coordiv.offsetTop+coordiv.offsetHeight && e.pageY >= coordiv.offsetTop && e.pageX >= coordiv.offsetLeft && e.pageX <= coordiv.offsetLeft+coordiv.offsetWidth)
    {
      // 更新 box 尺寸
      if(document.getElementById("active_box") !== null)//如果document中有active_box,就改变box大小
      {
        var ab = document.getElementById("active_box");
        ab.style.width = e.pageX - startX + 'px';
        ab.style.height = e.pageY - startY + 'px';
      }

      // 移动，更新 box 坐标
      if(document.getElementById("moving_box") !== null && dragging)
      {
        var mb = document.getElementById("moving_box");
        var xy_div = document.getElementById(mb.style.left.substring(0,mb.style.left.length-2)+mb.style.top.substring(0,mb.style.top.length-2));
        var tmx = e.pageX - diffX;
        var tmy = e.pageY - diffY;
        if(tmx + mb.offsetWidth <= coordiv.offsetLeft+coordiv.offsetWidth && tmx >= coordiv.offsetLeft && tmy + mb.offsetHeight <= coordiv.offsetTop+coordiv.offsetHeight && tmy >= coordiv.offsetTop)
        {
          mb.style.top = e.pageY - diffY + 'px';//获取上方的坐标值
          mb.style.left = e.pageX - diffX + 'px';//获取左方的坐标值
          if(xy_div !== null)
          {
            var new_x = mb.style.left.substring(0, mb.style.left.length - 2);//比如取数字从开始的下标到结束的下标
            var new_y = mb.style.top.substring(0,mb.style.top.length - 2);//比如取数字从开始的下标到结束的下标
            xy_div.id = new_x+new_y;
            new_x-=coordiv.offsetLeft;//矩形的距离的左值px
            xy_div.innerText = new_x;
            var input_div = document.getElementById("xzhou1")//获取输入框的属性坐标的数据
            input_div.value=xy_div.innerHTML//在动态页面中输入框显示
          }
        }
      }
      // 移动1，更新 box 坐标
      if(document.getElementById("moving_box") !== null && dragging)
      {
        var mb = document.getElementById("moving_box");
        var xy_div1 = document.getElementById(mb.style.left.substring(0,mb.style.left.length-2)+mb.style.top.substring(0,mb.style.top.length-2));
        var tmx = e.pageX - diffX;
        var tmy = e.pageY - diffY;
        if(tmx + mb.offsetWidth <= coordiv.offsetLeft+coordiv.offsetWidth && tmx >= coordiv.offsetLeft && tmy + mb.offsetHeight <= coordiv.offsetTop+coordiv.offsetHeight && tmy >= coordiv.offsetTop)
        {
          mb.style.top = e.pageY - diffY + 'px';
          mb.style.left = e.pageX - diffX + 'px';
          if(xy_div1 !== null)
          {
            var new_x = mb.style.left.substring(0, mb.style.left.length - 2);
            var new_y = mb.style.top.substring(0,mb.style.top.length - 2);
            xy_div1.id = new_x+new_y;
            new_y-=coordiv.offsetTop;
            xy_div1.innerText =  new_y;
             var input_div = document.getElementById("yzhou1")
            input_div.value=xy_div1.innerHTML
          }
        }
      }
      // 移动2，更新 box 坐标
      if(document.getElementById("moving_box") !== null && dragging)
      {
        var mb = document.getElementById("moving_box");
        var xy_div2 = document.getElementById(mb.style.left.substring(0,mb.style.left.length-2)+mb.style.top.substring(0,mb.style.top.length-2));
        var tmx = e.pageX - diffX;
        var tmy = e.pageY - diffY;
        if(tmx + mb.offsetWidth <= coordiv.offsetLeft+coordiv.offsetWidth && tmx >= coordiv.offsetLeft && tmy + mb.offsetHeight <= coordiv.offsetTop+coordiv.offsetHeight && tmy >= coordiv.offsetTop)
        {
          mb.style.top = e.pageY - diffY + 'px';
          mb.style.left = e.pageX - diffX + 'px';
          if(xy_div2 !== null)
          {
            var new_x = mb.style.left.substring(0, mb.style.left.length - 2);
            var new_y = mb.style.top.substring(0,mb.style.top.length - 2);
            xy_div2.id = new_x+new_y;
            var new_r = parseInt(mb.style.width.substring(0,mb.style.width.length-2))+parseInt(new_x)-coordiv.offsetLeft;
            xy_div2.innerText =new_r;
             var input_div = document.getElementById("xzhou2")
             input_div.value=xy_div2.innerHTML
          }
        }
      }
      // 移动3，更新 box 坐标
      if(document.getElementById("moving_box") !== null && dragging)
      {
        var mb = document.getElementById("moving_box");
        var xy_div3 = document.getElementById(mb.style.left.substring(0,mb.style.left.length-2)+mb.style.top.substring(0,mb.style.top.length-2));
        var tmx = e.pageX - diffX;
        var tmy = e.pageY - diffY;
        if(tmx + mb.offsetWidth <= coordiv.offsetLeft+coordiv.offsetWidth && tmx >= coordiv.offsetLeft && tmy + mb.offsetHeight <= coordiv.offsetTop+coordiv.offsetHeight && tmy >= coordiv.offsetTop)
        {
          mb.style.top = e.pageY - diffY + 'px';
          mb.style.left = e.pageX - diffX + 'px';
          if(xy_div3 !== null)
          {
            var new_x = mb.style.left.substring(0, mb.style.left.length - 2);
            var new_y = mb.style.top.substring(0,mb.style.top.length - 2);
            xy_div.id = new_x+new_y;
            var new_b = parseInt(mb.style.height.substring(0,mb.style.height.length-2))+parseInt(new_y)-coordiv.offsetTop;
            xy_div3.innerText = new_b;
            var input_div = document.getElementById("yzhou2");
            input_div.value=xy_div3.innerHTML;
          }
        }
      }
    }
  };

  // 鼠标抬起
  document.onmouseup = function(e)
  {
    // 禁止拖动
    dragging = false;
    if(document.getElementById("active_box") !== null)
    {
      var ab = document.getElementById("active_box");
      ab.removeAttribute("id");
      // 如果长宽均小于 3px，移除 box
      if(ab.offsetWidth < 10 || ab.offsetHeight < 10)
      {
        document.body.removeChild(ab);
      }
      if(ab.offsetHeight >=10 && ab.offsetHeight >=10)
      {
        var xy_div = document.createElement("span");
        var xy_div1 = document.createElement("span");
        var xy_div2 = document.createElement("span");
        var xy_div3 = document.createElement("span");
        xy_div.id=startX.toString()+startY.toString();
        xy_div1.id=startX.toString()+startY.toString();
        xy_div2.id=startX.toString()+startY.toString();
        xy_div3.id=startX.toString()+startY.toString();
        document.body.appendChild(xy_div);
        document.body.appendChild(xy_div1);
        document.body.appendChild(xy_div2);
        document.body.appendChild(xy_div3);
     //xy_div.innerHTML = (startX-coordiv.offsetLeft) + "," + (startY-coordiv.offsetTop) + "," + (e.pageX-coordiv.offsetLeft) + "," + (e.pageY-coordiv.offsetTop);
       xy_div.innerHTML = (startX-coordiv.offsetLeft);
        xy_div1.innerHTML =(startY-coordiv.offsetTop);
        xy_div2.innerHTML = (e.pageX-coordiv.offsetLeft);
        xy_div3.innerHTML =(e.pageY-coordiv.offsetTop);
        var input_div = document.getElementById("xzhou1")
        var input_div1 = document.getElementById("yzhou1")
        var input_div2 = document.getElementById("xzhou2")
        var input_div3= document.getElementById("yzhou2")
         input_div.value=xy_div.innerHTML
         input_div1.value=xy_div1.innerHTML
         input_div2.value=xy_div2.innerHTML
         input_div3.value=xy_div3.innerHTML

      }
      return xzhou1;
      return yzhou1;
      return xzhou2;
      return yzhou2;
      alert(xzhou1);
    }
  };

  //双击鼠标(删除)
  document.ondblclick = function (e)
  {
    if(e.target.className.match(/box/))
    {
      /*当画矩形还没清除时则把画矩形消失*/
      if (document.getElementById("del_box") !== null)
      {
        /*把画矩形消失*/
        document.getElementById("del_box").removeAttribute("id");
      }
      e.target.id = "del_box";
      var ab = document.getElementById("del_box");
      /*根据输入框的值获取浏览器文档的宽高度*/
      var xy_div = document.getElementById(ab.style.left.substring(0,ab.style.left.length-2)+ab.style.top.substring(0,ab.style.top.length-2))
      /*当输入框的值还在显示则把那些输入框消失*/
      if(xy_div !== null)
      {
        /*输入框消失*/
        // xy_div.removeAttribute("xzhou1");
        document.getElementsByTagName("input")[0].removeAttribute("xy_div");
        document.body.removeChild(xy_div);
      }
      document.body.removeChild(ab);
    }
  }
};
