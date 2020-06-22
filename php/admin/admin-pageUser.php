<?php
require_once("../conn.php");
$page=$_POST['page']; //获取前台传过来的页码
$pageSize=6;  //设置每页显示的行数
$start=($page-1)*6; //从第几条开始取记录
mysqli_query($conn,"set names 'utf8'");
$result=$conn->query("select * from table_user ORDER BY time DESC limit {$start},{$pageSize} ");
$count=$conn->query("select id from table_user")->num_rows;//记录总条数
$totalPage=ceil($count/$pageSize);//count就是获取总条记录，pageSize就是总分页的记录，除以并上舍为最接近的整数

while($row=mysqli_fetch_array($result)){
    $datas[] = array("id"=>$row['id'],"username"=>$row['username'],"password"=>$row['password'],"email"=>$row['email'],"count"=>$count,"totalPage"=>$totalPage);
}
echo json_encode($datas);
mysqli_close($conn);
?>
