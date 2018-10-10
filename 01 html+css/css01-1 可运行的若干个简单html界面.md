***
#第一个页面
###ps:可注意用户名文本框的变化
html代码：

	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8">
	<title></title>
	</head>
	<body>
	<form>
	<p>
	username：<input type="text" name="aaa" value="请输入用户名" style="color:#999" 
	onfocus="if(this.value=='请输入用户名'){this.value='';this.style.color='#999'}"
	onblur="if(this.value==''){this.value='请输入用户名';this.style.color='#999'}">
	</p>
	<p>
	password：<input type="password" name="aaa" value="">
	</p>
	<p>
	<input type="submit">
	</p>
	</form>
	
	</body>
	</html>

***
***
#第二个页面

	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8">
	<title>第二課</title>
	</head>
	<body>
	<h3>單選</h3>
	<form>
		male : <input type="radio" name="sex" value="male" checked="checked">
		female : <input type="radio" name="sex" value="female">
		<br><br>
		<input type="submit" >
	</form>
	<div>
		<br><br><br><br>
	</div>

	
	<h3>複選框</h3>
	<form>
		橘子 : <input type="checkbox" name="fruit" value="橘子" checked="checked">
		苹果 : <input type="checkbox" name="sex" value="苹果"  checked="checked">
		香蕉 : <input type="checkbox" name="sex" value="香蕉" >
		桃子 : <input type="checkbox" name="sex" value="桃子" >
		<br>
		<input type="submit" >
	</form>
	
	<div>
		<br><br><br><br>
	</div>
	
	<h3>下拉菜單</h3>
	<form>
	<select name="zimu">
		<option value="a">a</option>
		<option>b</option>
		<option>c</option>
		<option>d</option>	
	</select>
	<input type="submit">
	</form>
	
	</body>
    </html>


***
***
#第三个页面

html代码：

	<!DOCTYPE html>
	<html>
	<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css-lession3.css">
	<!-- 注释2 <style type="text/css">
		div{
			width: 100px;
			height: 100px;
			background-color: green;
		}
	</style> -->
	</head>
	<body>
	
	 <div>外部css</div>
	 
	<!--注释1 <div style="width:100px;height: 100px;background-color: red; ">
		行级样式
	</div>
	-->
	
	
	<!--注释2 <div>
		页面级样式
	 </div> -->
	
	</body>
	</html>

css代码：
	
	div{
		width: 100px;
		height: 100px;
		border-radius: 10%;
		background-color: pink;
	}
***