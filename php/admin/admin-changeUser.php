<?php
$username = $_POST["username"];
$password = $_POST['password'];
$email = $_POST['email'];
$t = $_GET["id"];
require_once("../conn.php");
if(!$conn){
    echo "数据库连接失败";
}
$conn->set_charset("utf8");
$sql = "update table_user set username='$username',password='$password',email='$email' where id=$t";
$conn->query($sql);
//echo $sql;
if($conn->query($sql)){
    echo "修改成功";
}else{
    echo "修改失败";
}
?>
