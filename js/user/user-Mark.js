/**
 * Created by HJB on 2020/3/4.
 */
/*标注信息1*/
$(document).ready(function(){
  $('.pin').easypinShow({
    data: '{"demo_image_1":{"1":{"name":"海鸬鹚","description":"繁殖期有白色细羽。背、胸、腹部黑色，有绿色金属反光。腰两侧有大形白色斑纹。 ","coords":{"lat":"600","long":"247"}},"canvas":{"width":"1000","height":"625"},"2":{"name":"海鸬鹚","description":"鉴别特征体羽主要为黑色，头颈部带紫色光泽，其他部分带绿色光泽 ","coords":{"lat":"545","long":"153"}},"canvas":{"width":"1000","height":"625"},"3":{"name":"海鸬鹚","description":"尾部羽毛为黑色。","coords":{"lat":"800","long":"440"}},"canvas":{"width":"1000","height":"625"}}}',
    responsive: false,/*用于移动的Reponsive画布,为假*/
    variables: {
      firstname: function(canvas_id, pin_id, data) {
        //console.log(canvas_id, pin_id, data);
        return data;
      },
      surname: function(canvas_id, pin_id, data) {
        //console.log(canvas_id, pin_id, data);
        return data;
      }
    },
    popover: {/*设置回调所有模板变量*/
      show: false,
      animate: true
    },
    each: function(index, data) {
      return data;
    },
    error: function(e) {
      console.log(e);
    },
    success: function() {
      console.log('başarılı');
    }
  });
});
/*标注信息2*/
$(document).ready(function(){
  $('.pin2').easypinShow({
    data: '{"demo_image_2":{"1":{"name":"海番鸭","description":"通体黑色，有紫色光泽，有些羽毛的边缘带淡棕色，胸部中央及腹部两侧羽毛白色 ","coords":{"lat":"400","long":"310"}},"canvas":{"width":"1000","height":"625"},"2":{"name":"海番鸭","description":"生态栖息于沿海海滩、内陆河流和湖泊等水域中。可潜入深水捕食。以贝类及绿色植物为食。","coords":{"lat":"650","long":"160"}},"canvas":{"width":"1000","height":"625"},"3":{"name":"海番鸭","description":"额、头顶、喉与前颈棕黑色。","coords":{"lat":"580","long":"310"}},"canvas":{"width":"1000","height":"625"},"4":{"name":"海番鸭","description":"脚色浅。","coords":{"lat":"280","long":"510"}},"canvas":{"width":"1000","height":"625"}}}',
    responsive: false,
    variables: {
      firstname: function(canvas_id, pin_id, data) {
        //console.log(canvas_id, pin_id, data);
        return data;
      },
      surname: function(canvas_id, pin_id, data) {
        //console.log(canvas_id, pin_id, data);
        return data;
      }
    },
    popover: {
      show: false,
      animate: true
    },
    each: function(index, data) {
      return data;
    },
    error: function(e) {
      console.log(e);
    },
    success: function() {
      console.log('başarılı');
    }
  });
});
/*标注信息3*/
$(document).ready(function(){
  $('.pin3').easypinShow({
    data: '{"demo_image_3":{"1":{"name":"星头啄木鸟","description":"体形小，体长约155mm。头顶深灰，后枕黑色，宽阔的白色眉纹从眼后延伸至枕侧;上体具黑白相间的横斑;下体浅棕黄色。","coords":{"lat":"480","long":"330"}},"canvas":{"width":"1000","height":"625"},"2":{"name":"星头啄木鸟","description":"脚灰黑色或淡绿褐色。","coords":{"lat":"370","long":"380"}},"canvas":{"width":"1000","height":"625"},"3":{"name":"星头啄木鸟","description":"嘴铅灰色或铅褐色。","coords":{"lat":"390","long":"145"}},"canvas":{"width":"1000","height":"625"},"4":{"name":"星头啄木鸟","description":"针阔叶混交林和针叶林中，常单独或成对活动，主要以昆虫为食，偶尔也吃植物果实和种子。","coords":{"lat":"170","long":"300"}},"canvas":{"width":"1000","height":"625"}}}',
    responsive: false,
    variables: {
      firstname: function(canvas_id, pin_id, data) {
        //console.log(canvas_id, pin_id, data);
        return data;
      },
      surname: function(canvas_id, pin_id, data) {
        //console.log(canvas_id, pin_id, data);
        return data;
      }
    },
    popover: {
      show: false,
      animate: true
    },
    each: function(index, data) {
      return data;
    },
    error: function(e) {
      console.log(e);
    },
    success: function() {
      console.log('başarılı');
    }
  });
});
/*标注信息4*/
$(document).ready(function(){
  $('.pin4').easypinShow({
      data: '{"demo_image_4":{"1":{"name":"针尾鸭","description":"体形与家鸭相似，但雄鸟中央尾羽特别延长.上体大都黑褐色。满杂黄白色斑纹;下体大都白色，杂以淡褐色横斑;翅上无翼镜。","coords":{"lat":"580","long":"330"}},"canvas":{"width":"1000","height":"625"},"2":{"name":"针尾鸭","description":"头顶和头侧棕黄而密杂黑褐色纵纹;后颈褐色而杂以黑色斑点。","coords":{"lat":"420","long":"250"}},"canvas":{"width":"1000","height":"625"},"3":{"name":"针尾鸭","description":"在开阔的沿海地带，如空旷的海湾、海港等地常能够见到数百只的集群。","coords":{"lat":"680","long":"120"}},"canvas":{"width":"1000","height":"625"},"4":{"name":"针尾鸭","description":"嘴巴为黑色并加上红色。","coords":{"lat":"300","long":"270"}},"canvas":{"width":"1000","height":"625"}}}',
    responsive: false,
    variables: {
      firstname: function(canvas_id, pin_id, data) {
        //console.log(canvas_id, pin_id, data);
        return data;
      },
      surname: function(canvas_id, pin_id, data) {
        //console.log(canvas_id, pin_id, data);
        return data;
      }
    },
    popover: {
      show: false,
      animate: true
    },
    each: function(index, data) {
      return data;
    },
    error: function(e) {
      console.log(e);
    },
    success: function() {
      console.log('başarılı');
    }
  });
});
