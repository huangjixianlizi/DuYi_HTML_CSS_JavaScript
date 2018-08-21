
#margin塌陷
***
###解释：垂直方向的margin 父子元素是粘合到一起的，取最大值

##示例：
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

<br>
##解决方法：
<br>

##第一种（不能用的土法子）：

		.wrapper{
			boder-top:1px solid red;
		}
<br>
##第二种（专业解决）：BFC
bfc ：block format context【块级格式化上下文】

bfc设置完以后，特定的盒子会改变极少的语法规则【可将margin塌陷解决】

<br>
##如何触发一个盒子的bfc:

		position:absolute;
		
		display:inline-block;
		
		float:left/right;
		
		overflow:hidden;


<br>

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
<br>
***
***
<br>
#margin合并
***
横向margin属性是正常的（左右margin距离和数值正常相加），可以观看以下示例
html代码：

    <span class="box1">123</span>
    <span class="box2">456</span>
    <br>
    <span class="box3">asd</span>
    <span class="box4">zxc</span>

css代码：

	*{
		margin:0;
		padding:0;
	}
	
	.box1{
		background-color: red;
		margin-right: 100px;
	
	}
	.box2{
		background-color: green;
		margin-left: 100px;
	
	}
	
	.box3{
		background-color: red;
		margin-right: 100px;
	
	}
	.box4{
		background-color: green;
		margin-left: 300px;
	
	}
<br><br><br>
但是到纵向的时候，margin会取最大值（大的覆盖小的，不会直接像横向一样拼接）

【下例中本应距离300px，因为合并bug因此只有200px(取最大值)】
html代码：
	
	<div class="demo1">1</div>
	<div class="demo2">2</div>

css代码：
	
	*{
		margin:0;
		padding:0;
	}
	
	.demo1{
		background-color: red;
		margin-bottom: 100px;
	}
	
	.demo2{
	    background-color: green;
		margin-top: 200px;
	}


##解决方法：BFC  
套一个父级div设置overflow：hidden

html代码：

	<!--   <div class="wrapper"> -->
	    <div class="demo1">1</div>
	<!--   </div> -->
	  
	  <div class="wrapper">
		<div class="demo2">2</div>
	  </div>
	  
css代码：

	*{
		margin:0;
		padding:0;
	}
	
	.demo1{
		background-color: red;
		margin-bottom: 100px;
	}
	
	.demo2{
	    background-color: green;
		margin-top:100px;
	}
	
	.wrapper{
		overflow: hidden;
	}
<br>
***
***
<br>
##ps！！！:
我们在解决margin塌陷的时候，在父级上增加css属性，并没有更改html；但是在解决margin合并的时候，我们需要在html添加一个父级盒子并添加css属性。
###
html的结构是不能随便更改的，不能因为解决bug而改html结构，
因此，我们一般不选择解决margin合并这个bug，而是用数学计算来“忽视”此bug！