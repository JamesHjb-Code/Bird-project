<?php
header("Content-Type:application/json");
require_once("../conn.php");
$username = $_POST['username'];
$password = $_POST['password'];
$email= $_POST['email'];
$result = mysqli_query($conn,"select * from table_user where username='$username'");
if($row=mysqli_fetch_array($result)){
    echo 1;//"用户存在不能注册"
}else{
    mysqli_query($conn,"insert into `table_user` (`username`,`password`,`email`) values ('$username','$password','$email')");
    echo 2;//注册成功
}
?>
