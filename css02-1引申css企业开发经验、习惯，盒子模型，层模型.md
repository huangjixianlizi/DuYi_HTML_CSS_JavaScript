
#颜色的三种表示方式
css代码：

    color: red;

	color: #FF00FF;

	color: rgb(255,255,255);


***
***
#如何让单行文本水平居中
###常用text-align属性和line-height属性结合实现
html代码：

    <div id="div1">
		QQQQQQ
	</div>
css代码：

    #div1 {
	border:1px solid black;
	text-align: center;/*水平对齐方式*/
	height: 200px;
	line-height: 200px;/*让单行高度等于border高度即可单行垂直居中*/
    }
***
***
#行级元素  块级元素  行级块元素

###行级元素、内联元素  inline
	特点：内容决定元素所占位置，不可以通过css改变宽高

常见标签：

    <span></span>
    <strong></strong>
    <em></em>
    <a href="#"></a>
    <del></del>

###块级元素  block
	特点：独占一行，可以通过css改变宽高

常见标签：

    <div></div>
    <p></p>
    <ul></ul>
    <li></li>
    <ol></ol>
    <form></form>
    <address></address>

###行级块元素   inline-block
	特点：内容决定大小
	
	可以通过css改变宽高

常见标签：

    <img src="">





***
***
#图片拼接问题
###凡是带有inline的元素均有文字特性（空格）
**可在css里通过display属性更改inline、block、inline-block**

比如两个img拼接中间却有4px间隙

解决方法：<img>标签中间不带空格 

     <img src="1"><img src="2"><img src="3">

错误解决方法：通过css设置

    padding-left: -4px;

***
***

#一种编程思想：先写功能[css]，再写元素[html]
###目标：我想写一写颜色和大小不同的方块
####第一种
先想好有几种盒子并定义box1-6然后再去css分别写盒子样式。即先写html，再写css。
#####缺点：修改麻烦且编写繁琐 消耗时间
html代码：

    <div class="box1"></div>
	<div class="box2"></div>
	<div class="box3"></div>
	<div class="box4"></div>
	<div class="box5"></div>

css代码：
    
    .box1 {
	height: 100px;
	width: 100px;
	background-color: green;
    }
    .box2 {
	height: 50px;
	width: 50px;
	background-color: red;
    }
    .box3 {
	height: 100px;
	width: 100px;
	background-color: yellow;
    }
    .box4 {
	height: 100px;
	width: 100px;
	background-color: gray;
    }
    .box5 {
	height: 150px;
	width: 150px;
	background-color: green;
    }


####第二种
即先写css定义功能，再写html。
#####优点：这样搭配组合更自由并且更方便操作，并且方便自己和他人引用。
html代码：

    <div class="size1 red"></div>
	<div class="size2 yellow"></div>
	<div class="size3 green"></div>
	<div class="size1 gray"></div>

css代码：

    .red{
	background-color: red;
    }
    .green{
	background-color: green;
    }
    .yellow{
	background-color: yellow;
    }
    .gray{
	background-color: gray;
    }
    .size1{
	width: 100px;
	height: 100px;
    }
    .size2{
	width: 200px;
	height: 200px;
    }
    .size3{
	width: 50px;
	height: 50px;
    }
***
***
#通配符是初始化所有标签最好的方式（权重 == 0）
css代码：
	
	*{ 
	  margin:0;
      padding:0;
	}

***
***
#body的基础属性margin  ！默认8px
如果不设置body.margin，则会发现方块与浏览器边界有缝隙，用margin消除。

html代码：

	<div>
	</div>

css代码：
	
	body{ 
	  margin：0；
      //默认margin：8px;//
	}
    div{
	  width:100px;
      height:100px;
      backgroung-color:red;
	}

***
***
#盒子模型

![](http://www.runoob.com/images/box-model.gif)

- Margin(外边距) - 清除边框外的区域，外边距是透明的。
- Border(边框) - 围绕在内边距和内容外的边框。
- Padding(内边距) - 清除内容周围的区域，内边距是透明的。
- Content(内容) - 盒子的内容，显示文本和图像。[width/height]
***
####从上到下：
	*{
		margin-top:10px;
		border-top: 10px;
		padding-top: 10px;
		content:10px;
		padding-bottom: 10px;
		border-bottom:10px;
	    margin-bottom: 10px;
	}

###从左到右
	*{
		margin-left:10px;
		border-left: 10px;
		padding-left: 10px;
		content:10px;
		padding-right: 10px;
		border-right:10px;
	    margin-right: 10px;
	}
***
###注意点 属性的默认设置
padding  border margin 等等 均可以单独设置四个方向

    div{ 
        padding: 100px 200px 300px 400px;
                 上     右    下     左 
		padding: 100px 200px 300px ;
                 上    右/左    下      
		padding: 100px 200px ;
                 上下   右/左      
    }
***
###可视区
	
	不包括margin
	
【margin无颜色，padding有颜色】

***
###当指定一个CSS元素的宽度和高度属性时，只是设置内容区域的宽度和高度。要知道，完全大小的元素，还必须添加填充，边框和边距。

下面的例子中的元素的总宽度为300px：

	div {
	    width: 300px;
	    border: 25px solid green;
	    padding: 25px;
	    margin: 25px;
	}

让我们自己算算：
	
	300px (宽)
	
	+50px (左 + 右填充)
	
	+50px (左 + 右边框)
	
	+50px (左 + 右边距)
	
	= 450px

试想一下，你只有250像素的空间。让我们设置总宽度为250像素的元素:

	div {
	    width: 220px;
	    padding: 10px;
	    border: 5px solid gray;
	    margin: 0; 
	}

###最终元素的总宽度计算公式是这样的：

	总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距

###元素的总高度最终计算公式是这样的：

	总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距

***
###浏览器的兼容性问题
一旦为页面设置了恰当的 DTD，大多数浏览器都会按照上面的图示来呈现内容。然而 IE 5 和 6 的呈现却是不正确的。根据 W3C 的规范，元素内容占据的空间是由 width 属性设置的，而内容周围的 padding 和 border 值是另外计算的。不幸的是，IE5.X 和 6 在怪异模式中使用自己的非标准模型。这些浏览器的 width 属性不是内容的宽度，而是内容、内边距和边框的宽度的总和。

虽然有方法解决这个问题。但是目前最好的解决方案是回避这个问题。也就是，不要给元素添加具有指定宽度的内边距，而是尝试将内边距或外边距添加到元素的父元素和子元素。

IE8 及更早IE版本不支持设置填充的宽度和边框的宽度属性。

解决IE8及更早版本不兼容问题可以在HTML页面声明 <!DOCTYPE html>即可。

***
***
#层模型

###特点
行级元素垂直方向上的margin无效

###定位
	
	属性:position
	分类:
	    1.绝对定位 : absolute ;
	                left : 100px ;
	                top : 100px ;(默认值为auto)
	    其中left相当于X轴(从左到右),top相当于Y轴(自上到下),在定位时以元素的左上角为原点.
	    作用:1.脱离原来位置进行定位.其他元素可以与它重叠.每一个定位元素都占单独的一层,不互相影响.
	    2.相对于最近的有定位的父级进行定位,如果没有最近的有定位的父级,那么九相对于文档进行定位.
	
	    2.position : relative ;
	    作用:1.保留原来出生位置进行层定位.
	        2.相对于出生位置进行定位.

        3.固定定位 : position : fixed ;(IE6没有fixed定位)
            作用:1.脱离原来位置进行定位.
                 2.相对于可视区窗口进行定位.


**ps:块级元素不设高度,(height的默认值位0),内容区由内容撑开,如果没有内容,由高度就为0;不设置宽度便占满整屏.其中 width 默认值为auto(自适应).**
***
###opacity 透明度 属性
	opacity(透明度):取值在0到1之间
***
###用法: 

	 1.设置参照物的话用relative更加合适. 
	 2.设置定位用absolute最合适.

***
***