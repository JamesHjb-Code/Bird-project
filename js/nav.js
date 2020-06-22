$(function(){
    // nav收缩及展开
    $('.nav-item>a').on('click',function()
    {
        if (!$('.nav').hasClass('nav-mini'))
        {
            if ($(this).next().css('display') == "none")//触发点击事件
            {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);//上拉300毫秒内
                $(this).next('ul').slideDown(300);//下拉300毫秒内
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');//该元素删除nav-show
            }else
              {
                //收缩已展开
                $(this).next('ul').slideUp(300);//上拉300毫秒内
                $('.nav-item.nav-show').removeClass('nav-show');//该元素删除nav-show
            }
        }
    });
  // 二级菜单点击css样式
  $('#qwe').on('click','.nav-item>ul>li',function(){
    $('.nav-item>ul>li').css('background','none')
    $(this).css('background','#21dbef')//鼠标点击css颜色变化，该当前的主内容url
  })

    //nav-mini切换
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini'))//检查是否有查到元素
        {
            $('.nav-item.nav-show').removeClass('nav-show');//该元素中清除class为nav-show
            $('.nav-item').children('ul').removeAttr('style');//在ul元素中清除style
          $('.nav').addClass('nav-mini');//在nav元素中该添加元素
        }else
        {
            $('.nav').removeClass('nav-mini');//清除元素
        }
    });
});

