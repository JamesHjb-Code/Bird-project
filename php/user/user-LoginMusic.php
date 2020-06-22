<?php
$host = 'localhost';//数据库地址
$user = 'root';//数据库用户名
$password = 'root';//密码
$database = 'data_bird';//数据库

$mysql = new Mysqli($host,$user,$password,$database);//连接数据库
if ($mysql->connect_errno) {//连接数据库失败
    echo "Connect failed: ". $mysql->connect_error;exit();
}
@$uname=$_REQUEST["username"];//获取用户名
$result = $mysql->query("SELECT * FROM table_user where username='$uname' and bird_music = '允许'");//查询是否有符合条件的数据
    if($result->num_rows>0){ //有相同数据
        echo 1;
    }else{//无相同数据
        echo 2;
    }
?>
