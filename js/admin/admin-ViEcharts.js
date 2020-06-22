/**
 * Created by HJB on 2020/3/1.
 */
/*分页功能和显示数据加载*/
var page=1;
window.onload=function(){
  getData(page)
  function getData(page,totalPage){
    $.ajax({
      type: 'POST',
      url: '../../php/admin/admin-pageEcharts.php',
      data: {'page':page},
      dataType:'json',
      success:function(data){
        //通过json传递过来
        var totalPage =data[0].totalPage;//分页条数
        var count=data[0].count;//数据总条数据
        var pagesize=4;
        var num=data.length;
        var str="";
        for(var i=0;i<num;i++){
          str+="<tr><td style='width:54px;'>" + data[i].id +"</td><td style='width:102px;'>" + data[i].mu +"</td><td style='width:104px;color:red;font-weight: bold'>" + data[i].num + "</td><td style='width:100px;'>"+"<button class='btn btn-primary btn-xs' id='change' data-toggle='modal' data-target='myModal'>修改</button>"+"<button class='btn btn-danger btn-xs' id='del' style='margin-left: 5px'>删除</button>"+"</td></tr>";
        }
        var text = "共"+count+"条记录 分"+totalPage+"页 当前第"+page+"页";
        $(".msg table").html(str);
        $(".msg .text").html(text);
        var option="";
        for(var i=1;i<=totalPage;i++){
          option+='<option value='+i+'>'+i+'</option>'
        }
        $(".jump").html(option);
        if(page<1){
          page=1
        };
        if(page>totalPage+1){
          page=totalPage;
        }
      },
      error:function(){
        console.log("数据加载失败");
      }
    })
    return page;
    return totalPage;//根据数据库里面的总分页，作为返回值，下面作调用总分页的值
  }
  var totalPage=totalPage;
  $(".page .nextPage").click(function(){
    page++;
    if(page>totalPage){
      page=totalPage;
      getData(page)
    }else{
      getData(page)
    }
  })
  $(".prePage").click(function(){
    page--;
    if(page<1){
      page=1;
      getData(page)
    }else{
      getData(page)
    }
  })
}

//获取数据显示
var a = 0;
$(document).on("click","#change",function(){
  $('#myModal').modal()
  a = $(this).parents("tr").index() //全局a用来查找当前的下表
  $(this).parents("tr").find("td:not(:last-child)").each(function () {
    var s = $(this).text()
    // console.log(s);
    var b = $(this).index()
    if(b>0){
      $("#myModal .ss[data-index='"+b+"']").val(s)
    }else{
      $("#myModal .ss[data-index='"+b+"']").text(s)
    }
  })
})

//删除按钮
$(document).on("click","#del", function () {
  var _this = $(this)
  $.ajax({
    url:"../../php/admin/admin-delEcharts.php",
    type:"POST",
    data:{
      val:"del",
      id:_this.parents("tr").find("td:eq(0)").text()
    },
    success: function (res) {
      if(res=="1"){
        _this.parents("tr").remove()
      }else{
        alert("删除失败")
      }
    }
  })
  window.location.reload();//防止bug，自动刷新
})
//修改按钮后
$(document).on("click","#sign",function(){
  var data1 = $("#form").serialize()
  var t = $("#myModalLabel").text()
  $("#myModal").find("input").each(function () {
    var q = $(this).val()
    var s = $(this).data("index")
    //console.log(q);
    $("table>tbody").children("tr").eq(a).find("td").eq(s).text(q)//修改后更新表的数据
  })
  $.ajax({
    url:"../../php/admin/admin-changeEcharts.php?id="+t,
    type:"POST",
    data:data1,
    success:function(res){
    }
  })
  window.location.reload();//防止bug，自动刷新
})

//添加按钮
/*ajax函数,add*/
$("#tianjia").click(function(){
  var xm1 = document.getElementById("mu").value;/*输入框的鸟目*/
  var xm2 = document.getElementById("num").value;/*输入框的鸟科*/
  // console.log(xm1);
  // console.log(xm2);
  /*如果空的则弹出提示框*/
  if(xm1 == ''||xm2==''){
    var popup = new Popup({
      'type': 'submit',
      'title': '提示',
      'text': '必填输入框'
    })
    return false;
  } else {
    /*获取两个数据*/
    var sendData = {"mu": $("#mu").val(), "num": $("#num").val()}
    $.ajax({
      url: "../../php/admin/admin-addEcharts.php",
      type: "POST",
      data: sendData,
      success: function (data) {//添加成功
        if (data == 1) {
          var popup = new Popup({
            'type': 'submit',
            'title': '提示',
            'text': '添加成功'
          })
        } else if (data == 2) {
          var popup = new Popup({
            'type': 'submit',
            'title': '提示',
            'text': '发生错误'
          })
        }
      }
    })
  }
  window.location.reload();//防止bug，自动刷新
})
