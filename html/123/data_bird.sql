-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-03-07 18:07:37
-- 服务器版本： 8.0.12
-- PHP 版本： 5.6.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `data_bird`
--

-- --------------------------------------------------------

--
-- 表的结构 `car`
--

CREATE TABLE `car` (
  `code` int(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `brand` varchar(150) NOT NULL,
  `oil` varchar(100) NOT NULL,
  `powers` varchar(100) NOT NULL,
  `exhaust` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `car`
--

INSERT INTO `car` (`code`, `name`, `brand`, `oil`, `powers`, `exhaust`, `price`) VALUES
(2, '宝马', '宝马A8', '23.1', '42', '23.1', '42.1'),
(27, '撒旦', '请求', '123', '23', '23', '213'),
(7, '黑马', '黑马ASD', '23.1', '523.1', '23', '23.1'),
(26, '撒旦', '请求', '123', '23', '23', '213'),
(9, '丰田', '风塔SD', '53.2', '11.2', '123', '76.3'),
(10, '东风', '东风AS', '23.1', '64.2', '87.3', '76.4'),
(11, 'SDS ', 'SD ', '23 ', '54', '766', '656'),
(22, '丰田', '是的', '23.12', '12.3', '231', '24.1'),
(24, '撒旦', '撒旦', '123', '23', '23', '213'),
(25, '撒旦', '撒旦', '123', '23', '23', '213');

-- --------------------------------------------------------

--
-- 表的结构 `table_admin`
--

CREATE TABLE `table_admin` (
  `id` int(10) NOT NULL,
  `username` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `table_admin`
--

INSERT INTO `table_admin` (`id`, `username`, `password`, `email`) VALUES
(1, 'admin', 'admin', '423231232@qq.com'),
(2, 'admin1', 'bbbb', '872312332@qq.com');

-- --------------------------------------------------------

--
-- 表的结构 `table_bird`
--

CREATE TABLE `table_bird` (
  `id` int(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `mu` varchar(150) NOT NULL,
  `ke` varchar(150) NOT NULL,
  `Image` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `table_bird`
--

INSERT INTO `table_bird` (`id`, `name`, `mu`, `ke`, `Image`) VALUES
(1, '小天鹅', '雁形目', '鸭科', 'img/bird_ify/yanxing/yake/xiaotiane.jpg'),
(2, '豆雁', '雁形目', '鸭科', 'img/bird_ify/yanxing/yake/douyan.jpg'),
(3, '黑雁', '雁形目', '鸭科', 'img/bird_ify/yanxing/yake/heiyan.jpg'),
(4, '雪雁', '雁形目', '鸭科', 'img/bird_ify/yanxing/yake/xueyan.jpg'),
(5, '双角犀鸟', '犀鸟目', '犀鸟科', 'img/bird_ify/xiniao/xiniao/shuangjiaoxiniao.jpg'),
(6, '戴胜', '犀鸟目', '戴胜科', 'img/bird_ify/xiniao/daisheng/daisheng.jpg'),
(7, '金黄鹂', '雀形目', '黄鹂科', 'img/bird_ify/quexing/huangli/jinhuangli.jpg'),
(8, '朱鹂', '雀形目', '黄鹂科', 'img/bird_ify/quexing/huangli/zhuli.jpg'),
(9, '地山雀', '雀形目', '山雀科', 'img/bird_ify/quexing/shanque/dishanque.jpg'),
(10, '喜鹊', '雀形目', '鸦科', 'img/bird_ify/quexing/ya/xique.jpg'),
(11, '云雀', '雀形目', '百灵科', 'img/bird_ify/quexing/bailing/yunque.jpg'),
(12, '毛腿夜鹰', '夜鹰目', '夜鹰科', 'img/bird_ify/quexing/bailing/yeying.jpg'),
(13, '棕雨燕', '夜鹰目', '雨燕科', 'img/bird_ify/yeying/yuyan/zongyuyan.jpg'),
(14, '褐鲣鸟', '鲣鸟目', '鲣鸟科', 'img/bird_ify/jianniao/jianniao/xiejian.jpg'),
(15, '海鸬鹚', '鲣鸟目', '鸬鹚科', 'img/bird_ify/jianniao/junjianniao/baibanjunjian.jpg'),
(16, '海鸬鹚', '鲣鸟目', '鸬鹚科', 'img/bird_ify/jianniao/luci/hailuci.jpg'),
(26, '阿萨德', '请问', '下次再', 'C:fakepath3.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `table_user`
--

CREATE TABLE `table_user` (
  `id` int(10) NOT NULL,
  `username` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `table_user`
--

INSERT INTO `table_user` (`id`, `username`, `password`, `email`) VALUES
(2, 'user1', 'huang', '2173232323@qq.com'),
(3, 'qweq', 'qqqq', '346734233@qq.com'),
(4, 'rtew', 'wwww', '467232232@qq.com'),
(7, 'aaa', 'eeee', '457454544@163.com'),
(8, 'bbbb', 'rrrr', '56475545@163.com'),
(10, 'pppp', '1234', '907310116@qq.com');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `pwd` varchar(150) NOT NULL,
  `avaPhoto` varchar(150) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转储表的索引
--

--
-- 表的索引 `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`code`);

--
-- 表的索引 `table_admin`
--
ALTER TABLE `table_admin`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `table_bird`
--
ALTER TABLE `table_bird`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `table_user`
--
ALTER TABLE `table_user`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `car`
--
ALTER TABLE `car`
  MODIFY `code` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- 使用表AUTO_INCREMENT `table_admin`
--
ALTER TABLE `table_admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `table_bird`
--
ALTER TABLE `table_bird`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- 使用表AUTO_INCREMENT `table_user`
--
ALTER TABLE `table_user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
