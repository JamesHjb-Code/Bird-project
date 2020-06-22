<?php
$bird_music = $_POST["bird_music"];
$bird_add = $_POST['bird_add'];
$bird_Query = $_POST['bird_Query'];
$t = $_GET["id"];
require_once("../conn.php");
if(!$conn){
    echo "数据库连接失败";
}
$conn->set_charset("utf8");
$sql = "update table_user set bird_music='$bird_music',bird_add='$bird_add',bird_Query='$bird_Query' where id=$t";
$conn->query($sql);
//echo $sql;
if($conn->query($sql)){
    echo "修改成功";
}else{
    echo "修改失败";
}
?>
