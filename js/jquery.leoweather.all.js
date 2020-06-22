(function($) {
	$.fn.leoweather = function(opts) {
		var defaults = {
			city: '',
		};
		var options = $.extend(defaults, opts);
		return this.each(function() {
			if(!options.appid||!options.appsecret){
				$(this).html('未配置AppId或AppSecret，请 <a href="https://www.tianqiapi.com/user/user-login.php" target="_blank">点击这里</a> ');
				return false;
			}
			var obj = $(this),
			weather = new Array(),
			format = options.format,
			url = 'https://www.tianqiapi.com/api/?version=v1&appid='+options.appid+'&appsecret='+options.appsecret+'&city=' + options.city,
			model = format.match(/\{.*?\}/g),
			action = new Array();
			for (var i = 0; model.length > i; i++) {
				action[i] = model[i].replace(/{/g, '').replace(/}/g, '');
			};
			var valid = action.toString();
			$.ajax({
				url: url,
				dataType: "json",
				success: function(w) {
					weather['city'] = w.city;
					weather['data'] = w.data;
					setTimer();
				// console.log(weather); //二次修改请自己删除注释，查看API返回数据
				}
			});
			function getContent(type){
				if(type == '城市'){
					return weather.city;
				}
				var day = /\+(\d).*?/g.exec(type);
				if(day != null) {
					day = parseInt(day[1]);
					if(day > 6){
						day = 0;
					}
				} else {
					day = 0;
				}
				if(/日期.*?/g.exec(type) !== null){
					if(/人性化日期.*?/g.exec(type) !== null){
						return weather.data[day].day;
					}
					return weather.data[day].date;
				}
				if(/天气.*?/g.exec(type) !== null){
					return weather.data[day].wea;
				}
				if(/图标.*?/g.exec(type) !== null){
					return weather.data[day].wea_img;
				}
				if(/当前气温.*?/g.exec(type) !== null){
					return weather.data[day].tem;
				}
				if(/最高气温.*?/g.exec(type) !== null){
					return weather.data[day].tem1;
				}
				if(/最低气温.*?/g.exec(type) !== null){
					return weather.data[day].tem2;
				}
			}
			function setTimer() {
				var timer = 100;
				for (var i = 0; action.length > i; i++) {
					str = format.replace(/\{(.*?)\}/g, function(a, b) {
						var fun = b.replace(/{/g, '').replace(/}/g, '');
						return getContent(fun);
					})
				};
				obj.html(str);
				var ClockTimer = setInterval(update, timer)
			}
			function update(){
/*/!*				$('.weather_YY',obj).html(YY);*!/
				$('.weather_MM',obj).html(MM);
				$('.weather_DD',obj).html(DD);
				$('.weather_hh',obj).html(hh);
				$('.weather_mm',obj).html(mm);
				$('.weather_ss',obj).html(ss);
				$('.weather_ww',obj).html(ww);
				$('.weather_xx',obj).html(xx)*/
			}
		});
	};
})(jQuery);
