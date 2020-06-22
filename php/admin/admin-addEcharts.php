<?php
header("Content-Type:application/json");
require_once("../conn.php");
$mu = $_POST['mu'];
$num = $_POST['num'];
$sql = "insert into `table_echarts`(`mu`, `num`) value ('$mu', '$num')";
if (mysqli_query($conn, $sql)) {
    echo 1;
} else {
    echo 2;
}
?>
