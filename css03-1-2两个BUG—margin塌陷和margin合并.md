***
***
#margin塌陷
***
###解释：垂直方向的margin 父子元素是粘合到一起的，取最大值

###示例：
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
			margin-left: 100px;
			margin-top: 100px;
			width: 100px;
			height: 100px;
			background-color: black;
		}
		
		.content{
			margin-left: 50px;/*成功向右移动*/
			/*----分别试试下列效果-----*/
			/*margin-top: 150px；*//*[content盒子带着父级wrapper盒子一起动了]*/
			/*margin-top: 100px；*//*[content盒子还是没动]*/
			margin-top: 50px；/*[content盒子没动]*/
			/*---------*/
			width: 50px;
			height: 50px;
			background-color: green;
		
		}

***
#解决方法：
***
###第一种（不能用的土法子）：

		.wrapper{
			boder-top:1px solid red;
		}
***
###第二种（专业解决）：BFC
bfc ：block format context【块级格式化上下文】
bfc设置完以后，特定的盒子会改变极少的语法规则【可将margin塌陷解决】


###如何触发一个盒子的bfc:

		position:absolute;
		
		display:inline-block;
		
		folat:left/right;
		
		overflow:hidden;


<br><br>

#####overflow:hidder;  [溢出部分隐藏]
使用方式：
css代码：

		*{
			margin:0;
			padding:0;
		}
		
		.wrapper{
			margin-left: 100px;
			margin-top: 100px;
			width: 100px;
			height: 100px;
			background-color: black;

			overflow: hidden;  /*!!!!!!!!!!!!!*/

		}
		
		.content{
			margin-left: 50px;
			margin-top: 50px；
			width: 50px;
			height: 50px;
			background-color: green;
		
		}


#####display:inlin-block;
使用方式同上：
css代码：

		.wrapper{
			margin-left: 100px;
			margin-top: 100px;
			width: 100px;
			height: 100px;
			background-color: black;

			display:inlin-block;  /*!!!!!!!!!!!!!*/

		}


#####position:absolute;
使用方式同上：
css代码：

		.wrapper{
			margin-left: 100px;
			margin-top: 100px;
			width: 100px;
			height: 100px;
			background-color: black;

			position:absolut;  /*!!!!!!!!!!!!!*/

		}

###PS：以上三种均可弥补margin塌陷，但都会带来新的缺陷；所以在使用时哪个属性对你的目标没影响用哪个。

***
***
#margin合并
***