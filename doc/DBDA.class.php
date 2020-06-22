<?php
class DBDA
{
    public $host="localhost";
    public $uid="root";
    public $pwd="root";
    public $dbname="data_bird";

    //成员方法
    public function Query($sql,$type=1)
    {
        $db = new MySQLi($this->host,$this->uid,$this->pwd,$this->dbname);
        $r = $db->query($sql);

        if ($type==1)
        {
            return $r->fetch_all();
        }

        else
        {
            return $r;
        }
    }



//返回字符串的方法
    public function StrQuery($sql,$type=1)
    {
        $db = new MySQLi($this->host,$this->uid,$this->pwd,$this->dbname);
        $r = $db->query($sql);

        if($type==1)
        {
            $attr = $r->fetch_all();
            $str = "";
            foreach($attr as $v)
            {
                $str .= implode("^",$v)."|";
            }

            return substr($str,0,strlen($str)-1);

        }
        else
        {
            return $r;
        }
    }


    //返回JSON
    function JSONQuery($sql,$type=1)

    {
        $db = new MySQLi($this->host,$this->uid,$this->pwd,$this->dbname);
        $r = $db->query($sql);

        if ($type==1)
        {
            return json_encode ($r->fetch_all(MYSQLI_ASSOC));//返回关联数组  fet_all 慎用 放在服务器上有问题 要求配置
        }

        else
        {
            return $r;
        }
    }
}
?>
