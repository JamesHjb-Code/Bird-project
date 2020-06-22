<?php
$color = $_POST["color"];
$birdtop = $_POST['birdtop'];
$birdbottom = $_POST['birdbottom'];
$state = $_POST['state'];
$t = $_GET["id"];
require_once("../conn.php");
if(!$conn){
    echo "数据库连接失败";
}
$conn->set_charset("utf8");
$sql = "update table_labels set color='$color',birdtop='$birdtop',birdbottom='$birdbottom',state='$state' where id=$t";
$conn->query($sql);
//echo $sql;
if($conn->query($sql)){
    echo "修改成功";
}else{
    echo "修改失败";
}
?>
