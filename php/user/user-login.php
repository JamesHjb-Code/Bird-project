<?php
header("Content-Type:application/json");
require_once("../conn.php");
//获取用户名和密码
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
//查询数据库中用户表的数据，并返回提示信息
if($uname && $upwd){
    $sql="SELECT * FROM table_user WHERE username='$uname' and binary password='$upwd'";
    //密码区分大小写，加binary
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if($row!=null){
    //如果存在相应的用户名和密码1111
        session_start();
        //PHP session 变量用于存储有关用户会话的信息，或更改用户会话的设置
        //把用户信息存储到 PHP session 中之前，首先必须启动会话
        $_SESSION["uid"]=$row[0];
        //获取uid
        //存储和取回session变量的正确方法是使用$_SESSION变量
        echo json_encode(["ok"=>1]);
        //登录成功返回的提示信息
    }else
        echo json_encode(["ok"=>0]);
        //登录失败返回的提示信息
}
