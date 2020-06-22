/**
 * Created by HJB on 2020/2/11.
 */
/*获取总条数据记录*/
var page=1;
window.onload=function() {
  /*鸟类数据接口*/
  getData(page)
  function getData(page) {
    $.ajax({
      type: 'POST',
      url: '../../php/CountBird.php',
      data: {'page': page},
      dataType: 'json',
      success: function (data) {
        //通过json传递过来
        var count = data[0].count;//数据总条数据
        var text1 = "<div class='font-box'><div class='fontSum'><span>"+count+"</span></div> <div class='fontSt'><span>鸟类图片</span></div></div><div class='icon-box'> <i class='fa fa-file-photo-o'></i></div>";
        var text2 = "<div class='font-box'><div class='fontSum'><span>"+count+"</span></div> <div class='fontSt'><span>鸟类数量</span> </div> </div> <div class='icon-box'> <i class='fa fa-database'></i></div>";
        $(".Bottom-box1").html(text1);
        $(".Bottom-box2").html(text2);
      },
      error: function () {
        console.log("数据加载失败");
      }
    })
  }
  /*用户人数数据接口*/
  getData1(page)
  function getData1(page) {
    $.ajax({
      type: 'POST',
      url: '../../php/CountUser.php',
      data: {'page': page},
      dataType: 'json',
      success: function (data) {
        //通过json传递过来
        var count = data[0].count;//数据总条数据
        var text1 = "<div class='font-box'><div class='fontSum'><span>"+count+"</span></div> <div class='fontSt'><span>用户人数</span></div></div><div class='icon-box'><i class='fa fa-users'></i></div>";
        $(".Bottom-box3").html(text1);
      },
      error: function () {
        console.log("数据加载失败");
      }
    })
  }
  /*鸟叫数量数据接口*/
  getData2(page)
  function getData2(page){
    $.ajax({
      type: 'POST',
      url: '../../php/CountMu.php',
      data: {'page': page},
      dataType: 'json',
      success: function (data) {
        //通过json传递过来
        var count = data[0].count;//数据总条数据
        var text1 = "<div class='font-box'><div class='fontSum'><span>"+count+"</span></div> <div class='fontSt'><span>鸟目分类</span></div></div><div class='icon-box'><i class='fa fa fa-pie-chart'></i></div>";
        $(".Bottom-box4").html(text1);
      },
      error: function () {
        console.log("数据加载失败");
      }
    })
  }
}

