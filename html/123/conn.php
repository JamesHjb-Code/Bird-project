<?php
/*root是Mysql数据库系统的用户名，密码是空，数据库名称是text，端口号是3306*/
$conn=mysqli_connect("127.0.0.1","root","root","data_bird",3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
?>
