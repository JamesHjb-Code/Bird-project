
<?php
//计算数据总条数
include("DBDA.class.php");
$db = new DBDA();
$aa = $_POST["aa"];
$num = 10;
$sql = "select count(*) from car where name like '%{$aa}%'";
$zts = $db->StrQuery($sql);
echo ceil($zts/$num);
?>
