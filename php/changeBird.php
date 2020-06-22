<?php
$name = $_POST["name"];
$mu = $_POST['mu'];
$ke = $_POST['ke'];
$text = $_POST['text'];
$type = $_POST['type'];
$t = $_GET["id"];
require_once("conn.php");
if(!$conn){
    echo "数据库连接失败";
}
$conn->set_charset("utf8");
$sql = "update table_bird set name='$name',mu='$mu',ke='$ke',text='$text',type='$type' where id=$t";
$conn->query($sql);
//echo $sql;
if($conn->query($sql)){
    echo "修改成功";
}else{
    echo "修改失败";
}
?>
