<?php
require_once('../conn.php'); //连接数据库
//查询数据
mysqli_query($conn,"set names 'utf8'");
$result=$conn->query("select * from table_echarts");
while ($row = mysqli_fetch_array($result)) {
    $arr[] = array(
        'mu' => $row['mu'],
        'num' => $row['num']
    );
}
echo json_encode($arr); //输出json格式数据
?>
