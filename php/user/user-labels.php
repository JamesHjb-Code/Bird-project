<?php
header("Content-Type:application/json");
require_once("../conn.php");
$username = $_POST['username'];
$xzhou1 = $_POST['xzhou1'];
$yzhou1 = $_POST['yzhou1'];
$xzhou2 = $_POST['xzhou2'];
$yzhou2 = $_POST['yzhou2'];
$color = $_POST['color'];
$birdtop = $_POST['birdtop'];
$birdbottom = $_POST['birdbottom'];
$sql = "insert into `table_labels`(`username`,`x1`, `y1`, `x2`,`y2`,`color`,`birdtop`,`birdbottom`) value ('$username','$xzhou1','$yzhou1','$xzhou2','$yzhou2','$color','$birdtop','$birdbottom')";
if (mysqli_query($conn, $sql)) {
    echo 1;
} else {
    echo 2;
}

?>
