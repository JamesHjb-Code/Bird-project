
<?php
//添加处理界面  tianjia.php
include("DBDA.class.php");
$db=new DBDA();
$xinghao=$_POST["xinghao1"];
$cheming=$_POST["cheming1"];
$youhao=$_POST["youhao1"];
$dongli=$_POST["dongli1"];
$pailiang=$_POST["pailiang1"];
$jiage=$_POST["jiage1"];
$sql="insert into car(name,brand,oil,powers,price,exhaust) value('{$xinghao}','{$cheming}','{$youhao}','{$dongli}','{$pailiang}','{$jiage}');";
if($db->Query($sql,0))
{
    echo "111";
}else
{
    echo "222";
}
?>
