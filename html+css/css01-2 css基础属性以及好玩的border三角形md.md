#css基础属性以及好玩的border三角形问题

***
html代码：

	<div>举个例子</div>
	
	<section></section>
	
	<br><br><br>
	
	<p></p>

css代码：

	div{
	font-size: 30px;
	font-weight: bold;
	font-style: normal;
	font-family: cursive;
	color: rgb(255,0,0);
	border: 2px solid black;
	border-width: 4px;
	border-style: dashed;
	border-color: black;
	}
	
	section{
	width: 10px;
	height: 10px;
	border:100px solid black;
	border-right-color: red;
	border-left-color: green;
	border-top-color: blue;
	
	}
	
	p{
	width: 0px;
	height: 0px;
	border:10px solid black;
	border-right-color: transparent;
	border-left-color: gray;
	border-top-color: transparent;
	border-bottom-color: transparent;
	
***
###transparent  透明色