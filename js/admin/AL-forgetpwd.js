/**
 * Created by HJB on 2020/3/6.
 */

$("#Next").click(function(){
  var xm2 = document.getElementById("username").value;
  var xm3 = document.getElementById("password1").value;
  var xm4 = document.getElementById("password2").value;
  if(xm2 == ''||xm3==''||xm4==''){
    var popup = new Popup({
      'type': 'submit',
      'title': '提示',
      'text': '必填输入框不为空'
    })
    return false;
  }
  else if(xm3!=xm4){
    var popup = new Popup({
      'type': 'submit',
      'title': '提示',
      'text': '两次输入密码不一致'
    })
    return false;
  }else {
    var sendData = {"username": $("#username").val(), "password2": $("#password2").val()}
    $.ajax({
      url: "../../php/admin/AL-forgetpwd.php",
      type: "POST",
      data: sendData,
      success: function (data) {//用户存在成功跳转到重置密码
        if (data == 1) {
          window.location.href = '../../html/admin/admin-login.html';
        } else if (data == 2) {
          var popup = new Popup({
            'type': 'submit',
            'title': '提示',
            'text': '原密码错误'
          })
        }
      }
    })
  }
})
