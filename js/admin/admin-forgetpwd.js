/**
 * Created by HJB on 2020/3/2.
 */
/**
 * Created by HJB on 2020/2/11.
 */
/*密码框*/
$("#upbtn").click(function(){
  var xm2 = document.getElementById("password1").value;//原密码
  var xm3 = document.getElementById("password2").value;
  var xm4 = document.getElementById("password3").value;
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
    var sendData = {"password1": $("#password1").val(), "password3": $("#password3").val()}
    $.ajax({
      url: "../../php/admin/admin-forgetpwd.php",
      type: "POST",
      data: sendData,
      success: function (data) {//修改密码
        if (data == 1) {
          {
            var popup = new Popup({
              'type': 'submit',
              'title': '提示',
              'text': '修改密码成功'
            })
          }
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
