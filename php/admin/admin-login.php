<?php
//data/user/login.php
header("Content-Type:application/json");
require_once("../conn.php");
//获取用户名和密码
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];

//查询数据库中用户表的数据，并返回提示信息
if($uname && $upwd){
    $sql="SELECT * FROM table_admin WHERE username='$uname' and binary password='$upwd'";
    //密码区分大小写，加binary
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if($row!=null){
        session_start();
        //把用户信息存储到 PHP session 中之前，首先必须启动会话
        $_SESSION["uid"]=$row[0];
        //获取uid
        echo json_encode(["ok"=>1]);
    }else
        echo json_encode(["ok"=>0]);
}
