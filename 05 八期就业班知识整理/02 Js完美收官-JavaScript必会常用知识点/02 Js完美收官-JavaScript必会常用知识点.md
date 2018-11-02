#JavaScript收官

##浏览器组成

####浏览器基本主要组成：

- 用户界面
- 浏览器引擎
- 渲染引擎
- 网络
- UI后端
- Js引擎
- 数据存储

![](https://i.imgur.com/va2F49R.png)

####主流浏览器及其内核

	浏览器                     内核


	IE                        trident
	
	Firefox                   Gecko
	
	Google Chrome             Webkit/blink
	 
	Safari                    Webkit
	
	Opera                     presto


####访问网页过程：

- url-->ip
- tcp
- html  css  img
- js 时间线
- 渲染过程 --> 渲染引擎
- tcp 四次挥手

####页面展示过程

![](https://i.imgur.com/baNVRHx.png)


##渲染引擎 渲染模式

####什么是渲染？渲染引擎？渲染过程？

渲染： 在电脑绘图中指用软件从模型生成图像的过程

渲染引擎： 其职责就是渲染，即在浏览器窗口中显示所请求的内容

渲染过程： 解析html从而构建DOM树-->CSS Rule树-->构建Render树-->布局Render树-->绘制Render树

####生成Render Tree过程

![](https://i.imgur.com/JqNZTmu.png)

####渲染模式的历史意义

![](https://i.imgur.com/s3GcIhH.png)

##Label标签

####百度示例：

![](https://i.imgur.com/P0G4iOL.png)

输入框左边的文字都是在label标签里，当我们点击文字式，也可以选定相对的右边的输入框

####作用：

起到绑定的作用，事件一体化。

####示例：

html：

		<p>
			<label for="demo">username:</label>
			<input type="text" id="demo">
		</p>

js：

		var oLabel = document.getElementsByTagName('label')[0];
		var oInput = document.getElementById('demo');
	
		oLabel.onclick = function () {
			console.log(this);
		}
		oInput.onclick = function () {
			console.log(this);
		}

##属性和特性

属性包含特性。

天生就有的叫特性，特性+后天加上的合起来叫属性。
	
	html：
	
		<input type="text" value="aaa" id="demo" data="input" cst = "du">
	 
	js：
	
		var oInput = document.getElementById('demo');
		console.log(oInput.type)；//可取可操作
		console.log(oInput.cst)；//不可取不可操作

####区别：

属于特性的属性 ，我们通过DOM对象操作，与html中的input是一一**映射**的关系，即通过DOM可以取到特性值并进行更改。

[能映射的叫特性，其余的是非特性属性]

后天的属性不可以！

####操作后天的属性（非特性的属性）:

我们可以通过setAttribute 和 getAttribute对行间样式的非特性属性进行操作。

添加：

	oInput.setAttribute('log','asdads');

获取：

	oInput.getAttribute('log');

####ps:

etAttribute、getAttribute和jQurey中的 attr 相对应。【对特性操作是和 prop对应】


##懒加载和预加载

懒加载： 例如淘宝，页面比较大，加载比较慢，所以我们优先加载第一显示窗口内容，至于下面的其他网页内容，当我们拖动滚动条能看到的时候再依次加载出来。

预加载： 例如当我们查看一个比较大的图片时，由于网速限制图片会从顶到下一点一点加载出来，用户体验不好，我们可以先用灰色代替显示，当我们图片下载完成后再一次性的放到页面上。


##Math.random()应用

取值范围：  [0,1)

##文档碎片 虚拟DOM

####文档碎片：【实际效果并不理想】

可以理解为一个存储空间，节省操作和系统资源
		
		var oF = document.createDocumentFragment();
		var oUl = document.getElementById('wrapper');
		for(var i = 0;i < 10;i ++){
			var newLi = document.creatElement('li');
			newLi.innerText = i + '';
			oF.appendChild(newLi);
		}
		oUl.appendChild(oF);

推荐使用字符串拼接：

		var htmlStr = '';
		var oUl = document.getElementById('wrapper');
		for(var i = 0;i < 10;i ++){
			htmlStr += '<li>' + i + '<li>';
		}
		oUl.innerHTML = htmlStr;

####虚拟DOM 【进阶课程】


##封装byClassName【综合练习】 （目前已经被各大浏览器兼容）

	Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = document.getElementsByClassName || function (_className) {
		var allDomArray = docunment.getElementsByTagName('*');
		var lastDomArray = [];
		var allDomlen = allDomArray.length;
		function trimSpace(strClass){
			var reg = /\s+/g;
			var newStrClass = strClass.replace(reg,' ');
			return newStrClass;
		}
		for(var i = 0; i < allDomlen; i++){
			var lastStrClass = trimSpace(allDomArray[i].className).trim();// trim()自己封装的去首位空格
			var classArray = lastStrClass.split(' ');
			var classArraylen = classArray.length;
			for(var j = 0; j < classArraylen;j++){
				if(classArray[i] == _className){
					lastDomArray.push(allDomArray[i]);
					break;
				}
			}
		}
		return lastDomArray;
	}


##断点调试


- **代码debugger**

- **控制台直接加断点**

- **console.log()**

- alert()   //不常用


 












