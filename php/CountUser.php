<?php
require_once("conn.php");
$page=$_POST['page']; //获取前台传过来的页码
$pageSize=6;  //设置每页显示的条数
$start=($page-1)*6; //从第1条开始取记录
mysqli_query($conn,"set names 'utf8'");
$result=$conn->query("select * from table_user limit {$start},{$pageSize}");
$count=$conn->query("select id from table_user")->num_rows;//记录总条数
while($row=mysqli_fetch_array($result)){
    $datas[] = array("count"=>$count);
}
echo json_encode($datas);
mysqli_close($conn);
?>
