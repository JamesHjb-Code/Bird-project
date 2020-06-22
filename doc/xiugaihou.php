<?php
$code=$_POST["code"];
$xinghao=$_POST["xinghao"];
$cheming=$_POST["cheming"];
$youhao=$_POST["youhao"];
$dongli=$_POST["dongli"];
$pailiang=$_POST["pailiang"];
$jiage=$_POST["jiage"];
include("DBDA.class.php");
$db=new DBDA();
$sql="update car set name='{$xinghao}',brand='{$cheming}',oil='{$youhao}',powers='{$dongli}',exhaust='{$pailiang}',price='{$jiage}' where code='{$code}'";

 if($db->query($sql,0))
{
    echo "111";
}else
{
    echo "222";
}
?>
