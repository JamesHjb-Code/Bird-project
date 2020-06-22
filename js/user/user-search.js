/**
 * Created by HJB on 2020/3/8.
 */

//搜索-跳转页面
var tiaozhuan = function()
{
  document.location.href ='user-search.html?key=' + $("#key").val();
}

/*ajax函数获取php*/
$(function(){
  var loc = location.href;
  var n1 = loc.length;//地址的总长度
  var n2 = loc.indexOf("=");//取得=号的位置
  var inputVal = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
  $.ajax({
    type:"GET",
    url:"../../php/user/user-search.php?key=" + inputVal,
    dataType:"json",
    success:function(data){
      $(function(){
        var con="";
        $.each(data,function(i,data){
          if (data.result == "0") {
            con+="<div class='right-text1'><span>请输入关键词...</span></div>";
          }
          else if(data.result == "1"){
            con+="<div class='right-text1'><span>对不起，没有您要的关键词！</span></div>";
          }
          else{
            con+="<div class='right-text'><div class='right-Img'><div class='right-ImgSm'><img src='"+data.Image+"' width='100%' height='100%'></div></div><div class='right-TextBo'><div class='right-TextSm'><div class='right-name'><span class='right-name1'>"+data.name+"</span></div><div class='right-muke'><span>"+data.mu+"——</span><span>"+data.ke+"</span></div><div class='right-Neirong'>外貌特征：<span>"+data.text+"</span></div></div></div></div>";
          }
          $(".right-LRtext").html(con);
        });

      })
      return false;
    }
  })
})
