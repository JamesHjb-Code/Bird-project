
<?php
//修改前给弹出框中文本框添加原始内容
include("DBDA.class.php");
$db=new DBDA();
$xg=$_POST["xg"];
$sql="select * from car where code='{$xg}'";
echo $db->StrQuery($sql);

?>
