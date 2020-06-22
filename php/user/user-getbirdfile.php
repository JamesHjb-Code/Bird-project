<?php
//php/Top_teams/getTop_teams.php
header("Content-Type:application/json");
require_once("../conn.php");
$sql="select a.id,a.username,a.x1,a.y1,a.x2,a.y2,a.color,a.birdtop,a.birdbottom,a.state,b.birdname,b.img,a.time from table_labels as a,table_result as b where b.birdtop=a.birdtop and b.birdbottom=a.birdbottom";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>
