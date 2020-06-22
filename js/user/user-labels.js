/**
 * Created by HJB on 2020/3/8.
 */

/*提交*/
/*ajax函数,add*/
$("#btn").click(function(){
  var xm1 = document.getElementById("xzhou1").value;
  var xm2 = document.getElementById("yzhou1").value;
  var xm3 = document.getElementById("xzhou2").value;
  var xm4 = document.getElementById("yzhou2").value;
  var xm5 = document.getElementById("username").value;
  var xm6 = document.getElementById("color").value;
  var xm7 = document.getElementById("birdtop").value;
  var xm8 = document.getElementById("birdbottom").value;
  if(xm1 == ''||xm2==''||xm3==''||xm4==''||xm5==''||xm6==''||xm7==''||xm8==''){
    var popup = new Popup({
      'type': 'submit',
      'title': '提示',
      'text': '必填输入框不为空'
    })
    return false;
  } else {
    var sendData = {
      "xzhou1": $("#xzhou1").val(),
      "yzhou1": $("#yzhou1").val(),
      "xzhou2":$("#xzhou2").val(),
      "yzhou2":$("#yzhou2").val(),
      "username":$("#username").val(),
      "color":$("#color").val(),
      "birdtop":$("#birdtop").val(),
      "birdbottom":$("#birdbottom").val(),

    }
    $.ajax({
      url: "../../php/user/user-labels.php",
      type: "POST",
      data: sendData,
      success: function (data) {//添加成功
        if (data == 1) {
          var popup = new Popup({
            'type': 'submit',
            'title': '提示',
            'text': '提交成功'

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
})
/*上一张，下一张按钮及切换图片*/
var imgArr=new Array("../../img/bird_labels/baiguanzaomei.jpg","../../img/bird_labels/beizhuque.jpg","../../img/bird_labels/heizhenwangweng.jpg","../../img/bird_labels/hongmeihuaque.jpg","../../img/bird_labels/lanehongweiqu.jpg","../../img/bird_labels/lvnizhuomuniao.jpg","../../img/bird_labels/lvtouya.jpg","../../img/bird_labels/niubeilu.jpg","../../img/bird_labels/sanzhicuiniao.jpg","../../img/bird_labels/taipingniao.jpg");
var i=0;
/*下一张*/
function next(){
  i++;
  if(i==imgArr.length){
    i=0;
  }
  document.getElementById("Arrayimg").src=imgArr[i];
}
/*上一张*/
function last(){
  i--;
  if(i<0){
    i=imgArr.length-1;
  }
  document.getElementById("Arrayimg").src=imgArr[i];
}
