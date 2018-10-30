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