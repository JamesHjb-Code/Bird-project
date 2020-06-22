/**
 * Created by HJB on 2020/3/6.
 */
function check(){
  var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //正则表达式
  var obj = document.getElementById("email"); //要验证的对象
  if(!reg.test(obj.value)){ //正则验证不通过，格式不对
    var popup = new Popup({
      'type': 'submit',
      'title': '提示',
      'text': '邮箱格式不对'
    })
    return false;
  }else{
    var popup = new Popup({
      'type': 'submit',
      'title': '提示',
      'text': '邮箱格式正确'
    })
    return true;
  }
}
$("#sign").click(function(){
    var xm1 = document.getElementById("username").value;
    var xm2 = document.getElementById("password").value;
    var xm3 = document.getElementById("email").value;
    if(xm1 == '' || xm2 == '' ||  xm3 == '' ){
      var popup = new Popup({
        'type': 'submit',
        'title': '提示',
        'text': '必填输入框不为空'
      })
      return false;

    }
  var sendData = {"username":$("#username").val(),"password":$("#password").val(),"email":$("#email").val()}//获取用户名、密码和邮箱。
  $.ajax({
    url:"../../php/user/user-register.php",
    type:"POST",
    data:sendData,
    success:function(data){
      if(data==1){
        var popup = new Popup({
          'type': 'submit',
          'title': '提示',
          'text': '用户名存在，不能重复'
      })
      }else if(data==2){//注册成功，跳转到用户登录
        window.location.href = '../../html/user/user-login.html';
      }
    }
  })
})
