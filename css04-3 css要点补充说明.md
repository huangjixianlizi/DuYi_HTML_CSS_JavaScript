***
##淘宝页面两边的留白（可随窗口缩小优先隐藏留白）

效果展示：

![](https://i.imgur.com/5Ept1F8.png)

缩小后：

![](https://i.imgur.com/t7Uq1Qh.png)

<br>

**实现方法：在两个嵌套的块级中使用"margin：0 auto;"**

样例：

html代码：

		<div class="wrapper">
			<div class="content">
				
			</div>
		</div>

css代码：
		
		*{
			margin:0;
			padding:0;
		}
		
		.wrapper{
			height: 30px;
			background-color: pink;
		}
		
		.content{

			margin:0 auto;  ;/*!!!!!*/

			width: 1000px;
			height:30px;
			background-color: yellow;
		}

效果展示：

![](https://i.imgur.com/XzFlRuL.png)

<br>
***
<br>

##文本类元素

		inline   block    inline-block

		inline和inline-block都叫文本类元素
	   【凡是带有inline属性的元素都有文本类特点所以叫文本类元素】


文本类特点：

文本类元素在一行无论加多少空格均只代表一个文字分隔符，即页面展示的时候中间相距离一格。

样例：
	
		asdsafa    safgdag
		<br>
		<span>asfasfa</span>     <span>safasfas</span>

<br>

html代码:

		<img src="3.jpg"><img src="3.jpg"><!-- 图片无缝隙 -->
		<br><br><br>
		<img src="3.jpg">
		<img src="3.jpg">
		<!-- 图片有缝隙【文本类元素特点】 -->

css代码:

		*{
			margin:0;
			padding:0;
		}
		
		img{
			width: 100px;
			height: 100px;
		}
效果展示：
![](https://i.imgur.com/2UzBbor.png)

<br>
***
<br>

##行级元素设置宽高的小技巧【内部原理】

设置了**"position: absolute;"、"float: left/right;"**两个属性中的任意一个的行级元素系统会默认视为添加了**"display: inline-block;"**属性,即变为行级块元素，所以可以更改宽高。

样例：

效果展示：

![](https://i.imgur.com/wfek6o8.png)

html代码：

		<span>123</span>

html代码：

		*{
			margin:0;
			padding:0;
		}
		
		span{
			position: absolute;
			background-color: pink;
		    width: 100px;
		    height: 100px;
		}


<br>
***
<br>

##文本类元素和文字的对齐方式

**一旦文本类元素里包含文字，那么外面的文字就会和里面的文字底对齐（正常情况：文字和文本类元素底对齐）**

###正常情况：

样例1:

![](https://i.imgur.com/3fdtZJ7.png)

代码：

    html：

		<span></span>呵呵
	
	css:
		
		*{
			margin:0;
			padding:0;
		}
		
		span{
			display:inline-block;
			width: 100px;
			height: 100px;
			background-color: red;
		}

样例2：

![](https://i.imgur.com/iDiBjoL.png)

代码：

	html:
	
		<span>123</span> 呵呵
	

	css:

		*{
			margin:0;
			padding:0;
		}
		
		span{
			font-size: 30px;
		}

###当文本类元素里包含文字:

效果展示：

样例1：

![](https://i.imgur.com/EKDz0Xk.png)

代码：

	html:
	
		<span>123</span> 呵呵
	
	css:
		
		*{
			margin:0;
			padding:0;
		}
		
		span{
			display:inline-block;
			width: 100px;
			height: 100px;
			background-color: red;
		}

样例2：

![](https://i.imgur.com/U6TXuUr.png)

代码：


	html:
	
		<span>123</span> 呵呵
	
	css:
		
		*{
			margin:0;
			padding:0;
		}
		
		span{
			line-height: 100px;
			font-size: 30px;/*字号加大，纵向居中显示*/

			display:inline-block;
			width: 100px;
			height: 100px;
			background-color: red;
		}

###ps:文字的对齐相对距离是可以调节的（纵向）

方法：  通过设置"vertical-align: 20px;"属性。

效果展示：

 ![](https://i.imgur.com/iHf7RAY.png)

代码：

	html:
	
		<span>123</span> 呵呵
	
	css:
		
		*{
			margin:0;
			padding:0;
		}
		
		span{
			line-height: 100px;
			font-size: 30px;/*字号加大，纵向居中显示*/

			display:inline-block;
			width: 100px;
			height: 100px;
			background-color: red;

			/*！！！！！！！！！！*/
			vertical-align: 20px;  /*-20px、middle*/
		}



<br>
***
<br>

