<?php
header("Content-Type:application/json");
require_once("../conn.php");
$password1 = $_POST['password1'];
$password3=$_POST['password3'];
$result = mysqli_query($conn,"select * from table_admin where password='$password1'");
if($row=mysqli_fetch_array($result)){
    mysqli_query($conn,"update table_admin set password='$password3' where password='$password1'");
    echo 1;//修改成功
}else{
    echo 2;//原密码不存在
}
?>
