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
