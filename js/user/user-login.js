/**
 * Created by HJB on 2020/2/11.
 */
/*$('#confirmDescConfirmIconWarning').click(function() {
  if(document.getElementById("User").value==""||document.getElementById("Password").value=="") {
  $.sendConfirm({
    hideHeader: true,
    withIcon: 'withIconWarning',
    desc: '没有输入用户名或密码',
    button: {
      confirm: '确定',
      cancel: null,
    },
  });
}
});*/

$(()=>{
  $("#btn").click(()=>{
    var user = document.getElementById("username").value;
    var pwd= document.getElementById("password").value;
    if(user==''){
      var popup = new Popup({
        'type': 'submit',
        'title': '提示',
        'text': '用户名不能为空'
      })
    }
    else if(pwd==''){
      var popup = new Popup({
        'type': 'submit',
        'title': '提示',
        'text': '密码不能为空'
      })
    }
    //发ajax请求，提交用户名和密码
    $.post(
      "../../php/user/user-login.php",
      //规定连同请求发送到服务器的数据
      {
        uname:$("#username").val(),
        upwd:$("#password").val()
      }
    ).then(data=>{
      if(data.ok==1){
        window.location.href = '../../html/user/user-father.html';
        //跳回原页面，referrer 属性可返回载入当前文档的文档的 URL
      }else{
        var popup = new Popup({
          'type': 'submit',
          'title': '提示',
          'text': '用户名或密码错误'
        })
      }
    });
  });
});



