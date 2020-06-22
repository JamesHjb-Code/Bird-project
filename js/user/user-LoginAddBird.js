/**
 * Created by HJB on 2020/3/27.
 */
/*ajax函数提交*/
$("#btn").click(function(){
  var xm1 = document.getElementById("username").value;
  if(xm1 == ''){
    var popup = new Popup({
      'type': 'submit',
      'title': '提示',
      'text': '必填输入框不为空'
    })
    return false;
  } else {
    var sendData = {
      "username": $("#username").val(),
    }
    $.ajax({
      url: "../../php/user/user-LoginAddBird.php",
      type: "POST",
      data: sendData,
      success: function (data) {//成功
        if (data == 1) {
          //权限允许访问URL
          window.location.href="../../html/user/user-addbird.html";
        } else if (data == 2) {
          //权限不允许访问URL
          window.location.href="../../html/user/user-Norights1.html";
        }
      }
    })
  }
})
