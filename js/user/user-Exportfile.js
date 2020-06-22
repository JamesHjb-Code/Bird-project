/**
 * Created by HJB on 2020/3/11.
 */
/*查询标注信息*/
$(()=>{
  $.get("../../php/user/user-getbirdfile.php").then(resData=>{
    console.log(1);
    var html="";
    for(var i=0;i<resData.length;i++) {
      var a = resData[i];
      console.log(a.name);
      if (a.state=='通过')
      {
        html += `
			<tr>
			     <td style="width: 50px">${a.id}</td>
           <td style="width: 150px">${a.username}</td>
           <td style="width: 100px">${a.x1}</td>
           <td  style="width: 100px">${a.y1}</td>
           <td  style="width: 100px">${a.x2}</td>
           <td  style="width: 100px">${a.y2}</td>
           <td   style="width: 200px">${a.color}</td>
           <td   style="width: 200px">${a.birdtop}</td>
           <td   style="width: 200px">${a.birdbottom}</td>
           <td   style="width:200px"><span style="color: red"><strong>${a.birdname}</strong></span></td>
           <td   style="width: 134px"><img src="${a.img}" style="width:132px;height: 50px"></td>
           <td   style="width: 235px">${a.time}</td>
      </tr>
			`;
      }
      else{
        html += `
			<tr>
			     <td style="width: 50px">${a.id}</td>
           <td style="width: 150px">${a.username}</td>
           <td style="width: 100px">${a.x1}</td>
           <td  style="width: 100px">${a.y1}</td>
           <td  style="width: 100px">${a.x2}</td>
           <td  style="width: 100px">${a.y2}</td>
           <td   style="width: 200px"></td>
           <td   style="width: 200px"></td>
           <td   style="width: 200px"></td>
           <td   style="width:200px;color:red;"><strong>审核中</strong></td>
           <td   style="width: 134px"></td>
           <td   style="width: 235px"></td>
      </tr>
			`;
      }
    }
    $(".table-res").html(html);
  })
});

/*导出CSV文件*/
function JSONToCsv(){
  // 要导出的json数据，这部分数据可以来自ajax请求
  $.ajax({
    type:"GET",
    url: "../../php/user/user-getbirdfile.php",
    dataType:"json",
    success:function(data){
      console.log(data)
      //列标题，逗号隔开
      let str = `ID,用户名,X1,Y1,X2,Y2,颜色,鸟头,鸟尾,审核状态,推荐名称,图片URL,时间\n`;
      //增加\t为了不让表格显示科学计数法或者其他格式
      for(let i = 0; i < data.length; i++){
        for(let item in data[i]){
          str+=`${data[i][item] + '\t'},`;
        }
        str+='\n';
      }
      //encodeURIComponent解决中文乱码， \ufeff是 ""
      let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
      //通过创建a标签实现
      let link = document.createElement("a");
      link.href = uri;
      //对下载的文件命名
      link.download =  "标注信息.csv";
      document.body.appendChild(link);
      link.click();//按钮的对象
      document.body.removeChild(link);
    }
  })
}
