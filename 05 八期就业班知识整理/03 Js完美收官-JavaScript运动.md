 #一个简单的匀速运动


	<div style="width: 50px;height: 50px;position: absolute;left: 0px;top: 0px;background-color: green;"></div>   <!-- left = 600px; -->
	<span style="position: absolute;left:300px;top: 0px;width: 1px;height: 50px;background-color: #000;"></span>
	<button style="margin-top: 100px;">点击</button>
    <script type="text/javascript">
    	var oDiv = document.getElementsByTagName("div")[0];
    	var oBtn = document.getElementsByTagName("button")[0];
    	oBtn.onclick = function() {
    		startMove(oDiv);
    	}
    	var timer = null;
    	function startMove (obj) {
    		clearInterval(timer);
	    	var iSpeed;
	    	if(obj.offsetLeft > 300){
	    		iSpeed = -8;
	    	}else{
	    		iSpeed = 8;
	    	}
    		timer = setInterval(function () {
				//取绝对值
    			if(Math.abs(300 - obj.offsetLeft) < Math.abs(iSpeed)){
					clearInterval(timer);
					obj.style.left = '300px';
    			}else{
    				obj.style.left = obj.offsetLeft + iSpeed + "px";
    			}
    		},30)
    	}
    </script>


##一个简单的缓冲运动

	<div style="width: 50px;height: 50px;position: absolute;left: 0px;top: 0px;background-color: green;"></div><!-- left = 600px; -->
	<span style="position: absolute;left:300px;top: 0px;width: 1px;height: 50px;background-color: #000;"></span>
	<button style="margin-top: 100px;">点击</button>
    <script type="text/javascript">
    	var oDiv = document.getElementsByTagName("div")[0];
    	var oBtn = document.getElementsByTagName("button")[0];
    	oBtn.onclick = function() {
    		startMove(oDiv);
    	}
    	var timer = null;
    	function startMove (obj) {
    		clearInterval(timer);
	    	var iSpeed;
    		timer = setInterval(function () {
    			iSpeed = (300 - obj.offsetLeft) / 7;
				// 向上取整和向下取整
    			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    			if (obj.offsetLeft === 300){
    				clearInterval(timer);
    			}else{
    				obj.style.left = obj.offsetLeft + iSpeed + "px";	
    			}
    		},30)
    	}
    </script>


#一个简易的侧边弹出隐藏栏

	<div class="wrapper" style="position: absolute;left: -400px;top: 300px;width: 400px; height: 80px;background-color: lightgreen;">
		<div class="show" style="position: absolute;right:-40px;top:0px;width: 40px; height: 80px; background-color: yellow;"></div>
	</div>

    <script type="text/javascript">
    	var oDivWrapper = document.getElementsByTagName('div')[0];

    	oDivWrapper.onmouseenter = function () {
    		startMove(this , 0);
    	}
    	oDivWrapper.onmouseleave = function () {
    		startMove(this , -400);
    	}

    	var timer = null;
    	function startMove (obj , target) {
    		clearInterval(timer);
	    	var iSpeed;
    		timer = setInterval(function () {
    			iSpeed = (target - obj.offsetLeft) / 7;
    			// 向上取整和向下取整
    			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    			if (obj.offsetLeft === target){
    				clearInterval(timer);
    			}else{
    				obj.style.left = obj.offsetLeft + iSpeed + "px";	
    			}
    		},30)
    	}
    </script>

##一个颜色缓冲渐变的运动

	<div style="width: 100px;height: 100px;opacity: 0.9;background-color: red;"></div>

    <script type="text/javascript">
    	var oDiv = document.getElementsByTagName('div')[0];

    	function getStyle(elem, prop){
			if(window.getComputedStyle) {
				return window.getComputedStyle(elem, null)[prop];
			}else{
				return elem.currentStyle[prop];
			}
		}
		oDiv.onclick = function () {
			startMove(this , 0.2 * 100);  //放大一百倍操作，防止div闪烁
		}
    	var timer = null;
    	function startMove (obj, target) {
    		clearInterval(timer);
    		var iSpeed,
    			iCur;
    		timer = setInterval(function () {
    			iCur = parseFloat(getStyle(obj , 'opacity')) * 100;  //放大一百倍操作，防止div闪烁
    			iSpeed = (target - iCur) / 7;  //渐变效果
    			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    			if(iCur == target){
    				clearInterval(timer);
    			}else{
     				obj.style.opacity = (iCur + iSpeed) / 100;  //最后还原一百倍实现效果   				
    			}
    		},30)
    	}
    </script>

#多个侧边块相同的扩展缓冲运动（互不影响）

	<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 50px;"></div>
	<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 50px;"></div>
	<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 50px;"></div>
	<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 50px;"></div>

    <script type="text/javascript">

    	var oDivArray = document.getElementsByTagName('div');
    	for(var i = 0 ; i < oDivArray.length; i++){
    		oDivArray[i].onmouseenter = function () {
    			startMove(this, 400);
    		}
    		oDivArray[i].onmouseleave = function () {
    			startMove(this, 100);
    		}
    	}
    	var timer = null;
    	function startMove (obj , target) {
    		clearInterval(obj.timer);
	    	var iSpeed;
    		obj.timer = setInterval(function () {   //obj.timer给每个div绑定定时器，使得他们互不影响
    			iSpeed = (target - obj.offsetWidth) / 7;
    			// 向上取整和向下取整
    			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    			if (obj.offsetWidth === target){
    				clearInterval(obj.timer);
    			}else{
    				obj.style.width = obj.offsetWidth + iSpeed + "px";	
    			}
    		},30)
    	}

    </script>


#多物体不同属性缓冲运动

	<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 50px;opacity: 1;border: 1px solid #000;"></div>
	<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 50px;opacity: 1;border: 1px solid #000;"></div>
	<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 50px;opacity: 1;border: 1px solid #000;"></div>
	<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 50px;opacity: 1;border: 1px solid #000;"></div>

    <script type="text/javascript">

    	var oDivArray = document.getElementsByTagName('div');
    	
    	oDivArray[0].onclick = function () {
    		startMove(this, 400, 'width')
    	}
    	oDivArray[1].onclick = function () {
    		startMove(this, 400, 'height')
    	}
    	oDivArray[2].onclick = function () {
    		startMove(this, 50, 'opacity')
    	}
    	oDivArray[3].onclick = function () {
    		startMove(this, 50, 'borderWidth')
    	}
    	function getStyle(elem, prop){
			if(window.getComputedStyle) {
				return window.getComputedStyle(elem, null)[prop];
			}else{
				return elem.currentStyle[prop];
			}
		}
		var timer = null;
    	function startMove (obj , target , attr) {
    		clearInterval(obj.timer);
	    	var iSpeed,
	    		iCur;
    		obj.timer = setInterval(function () {
			if(attr == 'opacity'){
				iCur = parseFloat(getStyle(obj , attr)) * 100;  //透明度的计算是特例 需要放大一百倍进行中间缓冲
			}else{
				iCur = parseInt(getStyle(obj , attr));
			}
			iSpeed = (target - iCur) / 7;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(iCur === target){
				clearInterval(obj.timer);
			}else{
				if(attr == 'opacity'){
					obj.style.opacity = (iCur + iSpeed) / 100;
				}else{
					obj.style[attr] = iCur + iSpeed + 'px';
				}
			}

    		},30);
    	}


    </script>

***
***

#多物体多值链式运动


    <div class="top" style="width: 100px;height: 100px;background-color: red;position:absolute;top: 100px;opacity: 1;"></div>
    <div class="bottom" style="width: 100px;height: 100px;background-color: red;position:absolute;top: 300px;opacity: 1;"></div>
    <script type="text/javascript">
    var oDivArray = document.getElementsByTagName('div');
    var timer = null;

    var targetObj = {
        width: 400,
        height: 400,
        opacity: 50,
        left: 300,
        top: 200
    }

    oDivArray[0].onclick = function() {
        startMove(this, targetObj, function (){
        	startMove(oDivArray[1], targetObj);
        });
    }

    function getStyle(elem, prop) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(elem, null)[prop];
        } else {
            return elem.currentStyle[prop];
        }
    }

    function startMove(obj, json , callback) {
        clearInterval(obj.timer);
        var iSpeed,
            iCur;
        obj.timer = setInterval(function() {
        	var bStop = true;
            for (var attr in json) {
                if (attr == 'opacity') {
                    iCur = parseFloat(getStyle(obj, attr)) * 100;
                } else {
                    iCur = parseInt(getStyle(obj, attr));
                }
                iSpeed = (json[attr] - iCur) / 7;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if ( attr == 'opacity') {
                	obj.style.opacity = (iSpeed + iCur) / 100;
                }else{
                	obj.style[attr] = iSpeed + iCur + 'px';
                }
                if(iCur != json[attr]){
                	bStop = false;
                }
            }
            if(bStop){
            	clearInterval(obj.timer);
            	typeof callback == 'function' ? callback() : '';
            }
        }, 30)
    }
    </script>


#多物体多值链式运动框架 ！！！！！！！



    function startMove(obj, json , callback) {
        clearInterval(obj.timer);
		var timer = null;
        var iSpeed,
            iCur;
        obj.timer = setInterval(function() {
        	var bStop = true;
            for (var attr in json) {
                if (attr == 'opacity') {
                    iCur = parseFloat(getStyle(obj, attr)) * 100;
                } else {
                    iCur = parseInt(getStyle(obj, attr));
                }
                iSpeed = (json[attr] - iCur) / 7;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if ( attr == 'opacity') {
                	obj.style.opacity = (iSpeed + iCur) / 100;
                }else{
                	obj.style[attr] = iSpeed + iCur + 'px';
                }
                if(iCur != json[attr]){
                	bStop = false;
                }
            }
            if(bStop){
            	clearInterval(obj.timer);
            	typeof callback == 'function' ? callback() : '';
            }
        }, 30)
    }


#一个简单的小球弹性运动
	
	 	<div style="width: 100px; height: 100px; position: absolute;left: 0px;top: 0px;background-color: red;border-radius: 50%;"></div>
	 	<span style="width: 1px; height: 100px;background-color: #ccc;position: absolute;left: 350px;top:0px;"></span>
		<script type="text/javascript">
	
			var oDiv = document.getElementsByTagName('div')[0];
			oDiv.onclick = function () {
				startMove(this);
			}
			function startMove (obj) {
				clearInterval(obj.timer);
				var iSpeed = 40,
					a = 0,
					u = 0.8,
					timer = null;
				obj.timer = setInterval(function () {
					a = (300 - obj.offsetLeft) / 8;
					iSpeed = iSpeed + a ;
					iSpeed = iSpeed * u;
					if(Math.abs(iSpeed) < 1 && Math.abs(300 - obj.offsetLeft) < 1) {
						console.log('over');
						clearInterval(obj.timer);
					}else{
						obj.style.left = obj.offsetLeft + iSpeed +'px';					
					}
				},30)
			}
		</script>

#一个简单酷炫的背景弹性运动的导航栏

		<style type="text/css">
			ul{
				position: relative;
				width: 600px;
				height: 80px;
				margin: 100px auto 0;
					list-style: none;
			}
			ul .nav {
				width: 148px;
				height: 78px;
				border: 1px solid #000;
				color: #f00;
				line-height: 78px;
				text-align: center;
				float: left;
			}
	
			ul .bg{
				position: absolute;
				left: 0px;
				top: 0px;
				width: 150px;
				height: 80px;
				background-color: #f40;
				opacity: 0.5;
				}
		</style>

#

	 	<ul>
	 		<li class="nav">ES6</li>
	 		<li class="nav">Webpack</li>
	 		<li class="nav">Vue</li>
	 		<li class="nav">Node</li>
	 		<li class = 'bg'></li>
	 	</ul>
		<script type="text/javascript">
	
			var oLiArray = Array.prototype.slice.call(document.getElementsByClassName('nav'),0);
			var oBg = document.getElementsByClassName('bg')[0];
	
			oLiArray.forEach(function (ele , index) {
				ele.onmouseenter = function () {
					var newLeft = this.offsetLeft;
					startMove(oBg , newLeft);
				}
			});
			function startMove (obj , target) {
				clearInterval(obj.timer);
				var iSpeed = 40,
					a = 0,
					u = 0.8,
					timer = null;
				obj.timer = setInterval(function () {
					a = (target - obj.offsetLeft) / 8;
					iSpeed = iSpeed + a ;
					iSpeed = iSpeed * u;
					if(Math.abs(iSpeed) <= 1 && Math.abs(target - obj.offsetLeft) <= 1) {
						console.log('over');
						clearInterval(obj.timer);
						obj.style.left = target + 'px';
					}else{
						obj.style.left = obj.offsetLeft + iSpeed +'px';					
					}
				},30)
			}
		</script>


#一个简单的页面碰撞运动
	
		<style type="text/css">
			div {
				position: absolute;
				left: 0px;
				top: 0px;
				width: 100px;
				height: 100px;
				background-color: #f40;
			}
		</style>

#

	 	<div></div>
		<script type="text/javascript">
			var oDiv = document.getElementsByTagName('div')[0];
			oDiv.onclick = function () {
				startMove(this);
			}
	
			function startMove(obj){
				clearInterval(obj.timer);
				var timer = null,
					iSpeedX = 6,
					iSpeedY = 8;
				obj.timer = setInterval(function () {
					var newLeft = obj.offsetLeft + iSpeedX;
					var newTop = obj.offsetTop + iSpeedY;
					if(newTop >= document.documentElement.clientHeight - obj.offsetHeight ){
						iSpeedY *= -1; 
						newTop = document.documentElement.clientHeight - obj.offsetHeight ;
					}
					if(newTop <= 0){
						iSpeedY *= -1; 
						newTop = 0;
					}
					if(newLeft >= document.documentElement.clientWidth - obj.offsetWidth){
						iSpeedX *= -1; 
						newLeft = document.documentElement.clientWidth - obj.offsetWidth ;
					}
					if(newLeft <= 0){
						iSpeedX *= -1; 
						newLeft = 0;
					}
					obj.style.left = newLeft + 'px';
					obj.style.top = newTop + 'px';
				},30)
			}
	
		</script>


#一个简单的模拟重力场的运动
	
		<style type="text/css">
			div {
				position: absolute;
				left: 0px;
				top: 0px;
				width: 100px;
				height: 100px;
				background-color: #f40;
			}
		</style>

#

	 	<div></div>
		<script type="text/javascript">
			var oDiv = document.getElementsByTagName('div')[0];
			oDiv.onclick = function () {
				startMove(this);
			}
	
			function startMove(obj){
				clearInterval(obj.timer);
				var timer = null,
					iSpeedX = 6,
					iSpeedY = 8,
					g = 6;
				obj.timer = setInterval(function () {
					iSpeedY += g;
					var newLeft = obj.offsetLeft + iSpeedX;
					var newTop = obj.offsetTop + iSpeedY;
					if(newTop >= document.documentElement.clientHeight - obj.offsetHeight ){
						iSpeedY *= -1; 
						iSpeedY *= 0.8;
						iSpeedX *= 0.8;
						newTop = document.documentElement.clientHeight - obj.offsetHeight ;
					}
					if(newTop <= 0){
						iSpeedY *= -1; 
						iSpeedY *= 0.8;
						iSpeedX *= 0.8;
						newTop = 0;
					}
					if(newLeft >= document.documentElement.clientWidth - obj.offsetWidth){
						iSpeedX *= -1; 
						iSpeedY *= 0.8;
						iSpeedX *= 0.8;
						newLeft = document.documentElement.clientWidth - obj.offsetWidth ;
					}
					if(newLeft <= 0){
						iSpeedX *= -1; 
						iSpeedY *= 0.8;
						iSpeedX *= 0.8;
						newLeft = 0;
					}
					if(Math.abs(iSpeedX) < 1){
						iSpeedX = 0;
					}
					if(Math.abs(iSpeedY) < 1){
						iSpeedY = 0;
					}
					if(iSpeedX == 0 && iSpeedY == 0 && newTop == document.documentElement.clientHeight - obj.offsetHeight){
						clearInterval(obj.timer);
						console.log('over');
					}
					obj.style.left = newLeft + 'px';
					obj.style.top = newTop + 'px';
				},30)
			}
	
		</script>

#无限次拖拽方块并丢出的运动

		<style type="text/css">
			div {
				position: absolute;
				left: 0px;
				top: 0px;
				width: 100px;
				height: 100px;
				background-color: #f40;
			}
		</style>

#

		<div></div>
		<script type="text/javascript">
			var oDiv = document.getElementsByTagName('div')[0],
				 lastX = oDiv.offsetLeft,
				 lastY = oDiv.offsetTop;
	
			oDiv.onmousedown = function (e) {
				clearInterval(this.timer); //空中抓取出错预防
				var event = e || window.event,
					disX = e.clientX - this.offsetLeft,
					disY = e.clientY - this.offsetTop,
					that = this,
					iSpeedX = 0,
					iSpeedY = 0;
				document.onmousemove = function(e) {
					var newLeft = e.clientX - disX,
						newTop = e.clientY - disY;
					iSpeedX = newLeft - lastX;
					iSpeedY = newTop - lastY;
					//更新坐标
					lastX = newLeft;
					lastY = newTop;  
					//拖拽运动
					that.style.left = newLeft + 'px';
					that.style.top = newTop + 'px';
				}
				document.onmouseup = function(e) {
					document.onmousemove = null;
					document.onmouseup = null;
					startMove(that);
				}
			}
	
			function startMove(obj){
				clearInterval(obj.timer);
				var timer = null,
					iSpeedX = 8,
					iSpeedY = 8,
					g = 6;
				obj.timer = setInterval(function () {
					iSpeedY += g;
					var newLeft = obj.offsetLeft + iSpeedX;
					var newTop = obj.offsetTop + iSpeedY;
					if(newTop >= document.documentElement.clientHeight - obj.offsetHeight ){
						iSpeedY *= -1; 
						iSpeedY *= 0.8;
						iSpeedX *= 0.8;
						newTop = document.documentElement.clientHeight - obj.offsetHeight ;
					}
					if(newTop <= 0){
						iSpeedY *= -1; 
						iSpeedY *= 0.8;
						iSpeedX *= 0.8;
						newTop = 0;
					}
					if(newLeft >= document.documentElement.clientWidth - obj.offsetWidth){
						iSpeedX *= -1; 
						iSpeedY *= 0.8;
						iSpeedX *= 0.8;
						newLeft = document.documentElement.clientWidth - obj.offsetWidth ;
					}
					if(newLeft <= 0){
						iSpeedX *= -1; 
						iSpeedY *= 0.8;
						iSpeedX *= 0.8;
						newLeft = 0;
					}
					if(Math.abs(iSpeedX) < 1){
						iSpeedX = 0;
					}
					if(Math.abs(iSpeedY) < 1){
						iSpeedY = 0;
					}
					if(iSpeedX == 0 && iSpeedY == 0 && newTop == document.documentElement.clientHeight - obj.offsetHeight){
						clearInterval(obj.timer);
						console.log('over');
					}
					obj.style.left = newLeft + 'px';
					obj.style.top = newTop + 'px';
				},30)
			}
	
		</script>