<?php
include("DBDA.class.php");
$db=new DBDA();
$bs=$_POST["bs"];

$sql="delete from car where code='{$bs}'";
if($db->query($sql,0))
{
    echo "ok";
}else
{
    echo "no";
}

?>
