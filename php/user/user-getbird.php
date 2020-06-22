<?php
//php/Top_teams/getTop_teams.php
header("Content-Type:application/json");
require_once("../conn.php");
$sql="SELECT * FROM table_bird";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>
