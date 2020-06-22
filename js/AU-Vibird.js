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
      url: '../../php/pageBird.php',
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
          str+="<tr><td style='width: 40px;'>" + data[i].id +"</td><td style='width: 40px;'>" + data[i].name +"</td><td style='width:40px;'>" + data[i].mu + "</td><td style='width:35px;'>" + data[i].ke +"</td><td style='width:130px;'>"+"<img src="+data[i].Image+" width='140px' height='95px'>"+"</td><td style='width: 110px;'>"+data[i].text+"</td><td style='width: 40px;'>"+data[i].type+"</td><td style='width: 60px;'>"+"<button class='btn btn-primary btn-xs' id='change' data-toggle='modal' data-target='myModal'>修改</button>"+"<button class='btn btn-danger btn-xs' id='del' style='margin-left: 5px'>删除</button>"+"</td></tr>";
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
  $(".page .firstPage").click(function(){
    getData(1);
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
  $(".lastPage").on("click",function(){
    getData(7);
  })
}


//当在模态框中获取数据的表格
var a = 0;
$(document).on("click","#change",function(){
  $('#myModal').modal()
  a = $(this).parents("tr").index() //全局a用来查找当前的下表
  $(this).parents("tr").find("td:not(:last-child)").each(function () {
    var s = $(this).text()
     console.log(s);
    var b = $(this).index()
    //console.log(b);
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
    url:"../php/delBird.php",
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
    url:"../php/changeBird.php?id="+t,
    type:"POST",
    data:data1,
    success:function(res){
    }
  })
  window.location.reload();//防止bug，自动刷新
})
