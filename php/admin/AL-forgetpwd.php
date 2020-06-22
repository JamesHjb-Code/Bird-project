<?php
header("Content-Type:application/json");
require_once("../conn.php");
$username = $_POST['username'];
$password2=$_POST['password2'];
$result = mysqli_query($conn,"select * from table_admin where username='$username'");
if($row=mysqli_fetch_array($result)){
    mysqli_query($conn,"update table_admin set password='$password2' where username='$username'");
    echo 1;//修改成功
}else{
    echo 2;//用户不存在
}
?>
