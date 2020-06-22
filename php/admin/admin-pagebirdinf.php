<?php
require_once("../conn.php");
$page=$_POST['page']; //获取前台传过来的页码
$pageSize=6;  //设置每页显示的行数
$start=($page-1)*6; //从第几条开始取记录
mysqli_query($conn,"set names 'utf8'");
$result=$conn->query("select a.id,a.username,a.x1,a.y1,a.x2,a.y2,a.color,a.birdtop,a.birdbottom,a.state,b.birdname,b.img,a.time from table_labels as a,table_result as b where b.birdtop=a.birdtop and b.birdbottom=a.birdbottom ORDER BY time DESC limit {$start},{$pageSize} ");
$count=$conn->query("select id from table_labels")->num_rows;//记录总条数
$totalPage=ceil($count/$pageSize);//count就是获取总条记录，pageSize就是总分页的记录，除以并上舍为最接近的整数

while($row=mysqli_fetch_array($result)){
    $datas[] = array("id"=>$row['id'],"username"=>$row['username'],"x1"=>$row['x1'],"y1"=>$row['y1'],"x2"=>$row['x2'],"y2"=>$row['y2'],"color"=>$row['color'],"birdtop"=>$row['birdtop'],"birdbottom"=>$row['birdbottom'],"birdname"=>$row['birdname'],"img"=>$row['img'],"state"=>$row['state'],"count"=>$count,"totalPage"=>$totalPage);
}
echo json_encode($datas);
mysqli_close($conn);
?>
