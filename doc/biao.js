$(document).ready(function(){
  page = 1;
  jiazai();
  LoadXinXi();
  $("#chaxun").keyup(function(){      /*这个事件要放到document里边*/
    jiazai();
    LoadXinXi();
  })
})


function jiazai()
{
  var aa=$("#chaxun").val();
  $.ajax({
    type:"post",
    url:"chuli.php",
    async:false,
    data:{aa:aa,page:page},
    dataType:"text",
    success:function(data)
    {
      var str="";
      var hang=data.split("|");
      for(var i=0;i<hang.length;i++)
      {
        var lie=hang[i].split("^");
        var bb=lie[2]; /* 取brand表中的类型名,把输出的数据改掉----------*/
        $.ajax({
          type:"post",
          url:"chuli1.php",
          async:false,
          data:{bb:bb},
          dataType:"text",
          success:function(d){
            bb=d;
          }
        });
        /*--------------------------------*/
        str+="<tr><td>"+lie[1]+"</td><td>"+bb+"</td><td>"+lie[3]+"</td><td>"+lie[4]+"</td><td>"+lie[5]+"</td><td>"+lie[6]+"</td><td><button class='shanchu' bs='"+lie[0]+"'>删除</button> <button class='xiugai' data-toggle='modal' data-target='#myModal' xg='"+lie[0]+"'>修改</button></td></tr>";
        /*给删除按钮添加一个bs属性,用来下边点击是获取*/
      }
      $("#neirong").html(str);

      /*换行变色处理------------------*/
      $("tr:even").addClass("even");
      $("tr:odd").addClass("odd");
      /*----------------------------*/

      /*----添加数据------------------------------------------------------------------------*/
      $("#tianjia").click(function(){
        var jiastr="型号：<input type='text' id='xinghao1'><br><br>车名：<input type='text' id='cheming1'><br><br>油耗：<input type='text' id='youhao1'><br><br>动力：<input type='text' id='dongli1'><br><br>排量：<input type='text' id='pailiang1'><br><br>价格：<input type='text' id='jiage1'>";

        $("#tianjiajiemian").html(jiastr);
        $(".tianjiabaocun").click(function(){

          var xinghao1=$("#xinghao1").val();
          var cheming1=$("#cheming1").val();
          var youhao1=$("#youhao1").val();
          var dongli1=$("#dongli1").val();
          var pailiang1=$("#pailiang1").val();
          var jiage1=$("#jiage1").val();
          $.ajax({
            type:"post",
            url:"tianjia.php",
            async:false,
            data:{xinghao1:xinghao1,cheming1:cheming1,youhao1:youhao1,dongli1:dongli1,pailiang1:pailiang1,jiage1:jiage1},
            dataType:"text",
            success:function(ddd)
            {
              if(ddd=="111")
              {

              }else
              {
                alert("添加成功");
                jiazai();

              }
            }
          })
        })

      })





      /*----------------------------------------------------------------------------------*/
      /*删除处理---------------------------------------------------------------------------------*/
      $(".shanchu").click(function(){
        var bs=$(this).attr("bs");

        if(confirm("确定删除么")){     /* 弹出确定删除框,确定删除,取消不删除*/
          $.ajax({
            type:"post",
            url:"shanchu.php",
            async:true,
            data:{bs:bs},
            dataType:"text",
            success:function(da)
            {
              if(da=="ok")
              {
                jiazai();
              }
              else
              {
                alert("删除失败");
              }
            }

          })

        }
      })

      /*-----------------------删除处理结束-----------------------------------*/


      /*修改----------------------------------------------------------------------------*/
      $(".xiugai").click(function(){
        var xg=$(this).attr("xg");
        var str1="";
        $.ajax({
          type:"post",
          url:"xiugai.php",
          async:false,
          data:{xg:xg},
          dataType:"text",
          success:function(xiugai)
          {
            lie=xiugai.split("^");
            var bb=lie[2];
            $.ajax({
              type:"post",
              url:"chuli1.php",
              async:false,
              data:{bb:bb},
              dataType:"text",
              success:function(d){
                bb=d;
              }
            })
            /* 设置一个隐藏的文本,用来保存code值,以便下边取到*/
            str1="<input type='hidden' id='canshu' value='"+lie[0]+"'>型号：<input type='text' id='xinghao' value='"+lie[1]+"'><br><br>车名：<input type='text' id='cheming'  value='"+bb+"'><br><br>油耗：<input type='text' id='youhao'  value='"+lie[3]+"'><br><br>动力：<input type='text' id='dongli'  value='"+lie[4]+"'><br><br>排量：<input type='text' id='pailiang'  value='"+lie[5]+"'><br><br>价格：<input type='text' id='jiage'  value='"+lie[6]+"'>";
            $("#xiugaijiemian").html(str1);    /*给弹出框添加文本框*/
            $("#baocun").click(function(){
              var code=$("#canshu").val();
              var xinghao=$("#xinghao").val();
              var cheming=$("#cheming").val();
              var youhao=$("#youhao").val();
              var dongli=$("#dongli").val();
              var pailiang=$("#pailiang").val();
              var jiage=$("#jiage").val();
              $.ajax({
                type:"post",
                url:"xiugaihou.php",
                async:true,
                data:{code:code,xinghao:xinghao,cheming:cheming,youhao:youhao,dongli:dongli,pailiang:pailiang,jiage:jiage},
                dataType:"text",
                success:function(dd)
                {
                  if(dd=="111")
                  {
                    console.log("111");
                    jiazai();
                  }else
                  {
                    alert("修改失败");
                  }
                }
              })
            })

          }
        })
      })
      /*------------------------修改救赎---------------------------------------------------------------*/
    }
  })
};
/*------------------------------------------------*/
function LoadXinXi()
{
  var str = "";
  var minys = 1;
  var maxys = 1;
  var aa=$("#chaxun").val();

  //查总页数
  $.ajax({
    async:false,
    url:"zongshu.php",
    data:{aa:aa},
    type:"POST",
    dataType:"TEXT",
    success: function(d){
      maxys = d;
    }
  });

  str += "<li><a>总共："+maxys+"页</a></li> ";
  str += "<li id='prev'><a>上一页</a></li>";

  for(var i=page-2;i<page+3;i++)
  {
    if(i>=minys && i<=maxys)
    {
      if(i==page)
      {
        str += "<li class='dangqian' bs='"+i+"'><a>"+i+"</a></li> &nbsp;";
      }
      else
      {
        str += "<li class='list' bs='"+i+"'><a>"+i+"</a></li> &nbsp;";
      }

    }
  }

  str += "<li id='next'><a>下一页</a></li>";

  $(".fenye").html(str);

  //给上一页添加点击事件
  $("#prev").click(function(){
    page = page-1;
    if(page<1)
    {
      page=1;
    }
    jiazai(); //加载数据
    LoadXinXi(); //加载分页信息
  })
  //给下一页加点击事件
  $("#next").click(function(){
    page = page+1;
    if(page>maxys)
    {
      page=maxys;
    }
    jiazai(); //加载数据
    LoadXinXi(); //加载分页信息
  })
  //给中间的列表加事件
  $(".list").click(function(){
    page = parseInt($(this).attr("bs"));
    jiazai(); //加载数据
    LoadXinXi(); //加载分页信息
  })
}
