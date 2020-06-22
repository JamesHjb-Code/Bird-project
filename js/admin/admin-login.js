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
      "../../php/admin/admin-login.php",
      //连同请求发送到服务器的数据
      {
        uname:$("#username").val(),
        upwd:$("#password").val()
      }
    ).then(data=>{
      if(data.ok==1){
        window.location.href = '../../html/admin/admin-father.html';
        //跳回原页面，referrer 属性可返回载入当前文档的文档的 URL
      }else {
        var popup = new Popup({
          'type': 'submit', // 弹窗类型
          'title': '错误',// 标题
          'text': '用户名或密码错误或不能为空'//内容
        })
      }
    });
  });
});

/*/!*登录判断*!/
$(function(){
  $("#btn").on('click',function(){
    var $username = $("#username").val();
    var $pass = $("#pass").val();
    if($username=='' || $pass==''){

      return false;
    }else{
      var datas={
        username:$username,
        pass:$pass
      };
      $.ajax({
        url:'postlogin.php',
        type:'post',
        dataType:'json',
        data:datas,
        success:function(result){
          if(result=='nameerror'){
            //弹出框
            $.sendConfirm({
              hideHeader: true,
              withIcon: 'withIconWarning',
              desc: '用户名不存在',
              button: {
                confirm: '确定',
                cancel: null,
              },
            });
          }else if(result=="passerror"){
            alert("密码错误");
          }else{
            window.location.href = '../html/admin-index.html';//登录成功跳转
          }
        },
        error:function(){
          alert('false');
        }
      })
    }return false;
  })
})*/


