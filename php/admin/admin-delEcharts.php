<?php
$del = $_POST["id"];
require_once("../conn.php");
if(!$conn){
    echo "数据库连接失败";
}
$conn->set_charset("utf8");
$sql = "delete from table_echarts where id=$del";
$conn->query($sql);
if($conn->query($sql)){
    echo 1;
}else{
    echo 2;
}
?>
