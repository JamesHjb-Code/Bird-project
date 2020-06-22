
<?php
//关键字查询和分页     chuli.php
include("DBDA.class.php");
$db=new DBDA();
$aa=$_POST["aa"];
$page = $_POST["page"];
$num = 10;
$tiao = ($page-1)*$num;
$tj="";
if(!empty($aa))
{
    $tj=" name like '%{$aa}%' ";
}else
{
    $tj=" 1=1 ";
}
$sql="select * from car where ".$tj." limit {$tiao},{$num}";
$attr=$db->StrQuery($sql);
$attr1=str_replace($aa, "<span style='color:red'>{$aa}</span>", $attr);
echo $attr1;
?>
