<?php
$mu = $_POST["mu"];
$num = $_POST['num'];
$t = $_GET["id"];
require_once("../conn.php");
if(!$conn){
    echo "数据库连接失败";
}
$conn->set_charset("utf8");
$sql = "update table_echarts set mu='$mu',num='$num' where id=$t";
$conn->query($sql);
//echo $sql;
if($conn->query($sql)){
    echo "修改成功";
}else{
    echo "修改失败";
}
?>
