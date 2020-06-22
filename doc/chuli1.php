
<?php
//把汽车表中的brand行改名字
include("DBDA.class.php");
$db=new DBDA();
$bb=$_POST["bb"];
$sql="select brand from car where brand='{$bb}'";
$atr=$db->StrQuery($sql);
echo $atr;
?>
