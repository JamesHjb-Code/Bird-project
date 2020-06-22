<?php
require_once("../conn.php");
$page=$_POST['page']; //获取前台传过来的页码
$pageSize=4;  //设置每页显示的条数
$start=($page-1)*4; //从第几条开始取记录
mysqli_query($conn,"set names 'utf8'");
$result=$conn->query("select * from table_echarts limit {$start},{$pageSize} ");

$count=$conn->query("select id from table_echarts")->num_rows;//记录总条数
$totalPage=ceil($count/$pageSize);//页码数

while($row=mysqli_fetch_array($result)){
    $datas[] = array("id"=>$row['id'],"mu"=>$row['mu'],"num"=>$row['num'],"count"=>$count,"totalPage"=>$totalPage);
}
echo json_encode($datas);
mysqli_close($conn);
?>
