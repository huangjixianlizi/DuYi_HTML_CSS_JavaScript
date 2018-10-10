##IE6混搭盒模型   border-box  

【不会因为padding和border的数值扩大盒子从而影响布局】

	width =  border+padding+content

**设置的 width 是 “内容区 padding border” 的总和。**


<br>



##w3c标准盒    content-box  (默认是标准盒模型)

【会因为padding和border的数值扩大盒子从而影响布局】

	width =  content

**设置的 width 即是 内容区。**

每次用标准和模型的时候，都会去因为border和padding等去计算content的高宽以及盒子整体的宽高，不利于使用。

<br>

##直观比较：

![](https://i.imgur.com/I0Hrzc8.png)



可以看到IE的盒模型与W3C盒模型的区别在与width的计算，这说明什么问题呢？我们在设置样式的时候经常会用到margin和padding还有width，对于下面html文件：
	
	<!-- 没有声明 -->
	<html>
	<head lang="ch">
	    <meta charset="UTF-8">
	    <title></title>
	    <style>
	        .box{
	            float:left;
	            width: 100px;
	            height: 100px;
	            background-color: #ff9000;
	        }
	        .container{
	            width: 200px;
	            padding: 10px;
	            background-color: #f00;
	            overflow: hidden;
	        }
	    </style>
	</head>
	<body>
	    <div class="container">
	        <div class="box"></div>
	        <div class="box"></div>
	    </div>
	<script>
	</script>
	</body>
	</html>

不管是不是IE，浏览器下显示的效果都是：

![](https://i.imgur.com/mMWomGP.png)


可以看到container正好将两个box包装起来。

但加入给container添加一个padding如下：
	
	.container{
	    width: 200px;
	    background-color: #f00;
	    overflow: hidden;
	    padding: 10px;
	}123456

则其在非IE下的样式为：

![](https://i.imgur.com/KE5Ht2N.jpg) 
 
但在IE下为： 

![](https://i.imgur.com/rTd2WLc.jpg)

IE中的box换行了，这就是因为IE中的width是包括了padding的，而W3C也就是我们平常使用的盒模型不包括，不管padding加多少内容区域的宽度不会改变，这也十分合理。 
避免触发IE盒模型的方法是使用<!DOCTYPE html>声明，告诉IE采用W3C盒子模型即可。

	ps：
	作者：时间被海绵吃了 
	来源：CSDN 
	原文：https://blog.csdn.net/sunhengzhe/article/details/46679595?utm_source=copy 
