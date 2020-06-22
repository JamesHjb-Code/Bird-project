<?php

$upFile = $_FILES['file'];

/**
* 创建文件夹函数,用于创建保存文件的文件夹
* @param str $dirPath 文件夹名称
* @return str $dirPath 文件夹名称
*/
function creaDir($dirPath){
 $curPath = dirname(__FILE__);
 $path = $curPath.'\\'.$dirPath;
 if (is_dir($path) || mkdir($path,0777,true)) {
  return $dirPath;
 }
}
//判断文件是否为空或者出错
if ($upFile['error']==0 && !empty($upFile)) {
 $dirpath = creaDir('upload');
 $filename = $_FILES['file']['name'];
 $queryPath = './'.$dirpath.'/'.$filename;
 //move_uploaded_file将浏览器缓存file转移到服务器文件夹
 if(move_uploaded_file($_FILES['file']['tmp_name'],$queryPath)){
  echo $queryPath;
 }
}
 ?>
