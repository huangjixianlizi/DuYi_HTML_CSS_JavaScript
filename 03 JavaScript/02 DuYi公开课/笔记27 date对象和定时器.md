#date对象

[JavaScript Date（日期）对象](http://www.w3school.com.cn/js/js_obj_date.asp)


#js定时器

- setInterval();
- clearInterval();
- setTimeout();
- clearTimeout();

全局对象window上的方法，内部函数this指向window


第一种：循环：

		setInterval(function () {
			console.log('a');
		},2000);   //两千毫秒一次


		清除：
		var i = 0;
		var timer = setInterval(function(){
			console.log(i++);
			if(i > 10){
				clearInterval(timer);
			}
		},10);

第二种：推迟一段时间执行一次：
		
		setTimeout(function(){
			console.log('a');
		},1000);

		清除：
		
		var timer = setTimeout(function(){
			console.log('a');
		},1000);
		clearTimeout(Timer);


注意：setInterval("func()",1000);

		srtInterval("console.log('a')",1000);
	

练习： 计时器，到三分钟停止。

		minutes：<input type="text" value="0" style="border:1px solid black;text-align: right;font-size: 20px;font-weight: bold;">
		seconds：<input type="text" value="0" style="border:1px solid black;text-align: right;font-size: 20px;font-weight: bold;">
		
		<script type="text/javascript">
			var minutesNode = document.getElementsByTagName('input')[0];
			var secondsNode = document.getElementsByTagName('input')[1];
			var minutes = 0,
				seconds = 0;
			var timer = setInterval(function(){
				seconds ++;
				console.log(seconds);
				if(seconds == 60){ 
					seconds = 0; 
					minutes ++;
				}
				secondsNode.value = seconds;
				minutesNode.value = minutes;
				if(minutes == 3){
					clearInterval(timer);
					}
			},1000);
		
		</script>