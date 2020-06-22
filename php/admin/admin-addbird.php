<?php
header("Content-Type:application/json");
require_once("../conn.php");
define('NEW_PATH','images/');
$name = $_POST['name'];
$mu = $_POST['mu'];
$ke = $_POST['ke'];
$text = $_POST['text'];
$imgage1 = $_POST['imgage1'];
$sql = "insert into `table_bird`(`name`, `mu`, `ke`,`text`,`Image`) value ('$name', '$mu', '$ke', '$text','$imgage1')";
if (mysqli_query($conn, $sql)) {
    echo 1;
} else {
    echo 2;
}

?>
