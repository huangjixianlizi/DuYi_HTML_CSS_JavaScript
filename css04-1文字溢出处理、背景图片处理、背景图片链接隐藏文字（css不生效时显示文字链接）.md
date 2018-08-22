#文本溢出
***
##单行文本溢出 [用"..."处理]

样例：

html代码：

		<p>风萧萧兮易水寒，壮士一去兮不复还，大家好，我是阿离。自从陈一发因为早期的辱华视频被曝光而凉凉后，各大主播人人自危。。</p>

css代码：
		
		*{
			margin:0;
			padding:0;
			color: #424242;
			font-family: arial;
		}
		
		
		p{
			width: 200px;
			height: 20px;
			line-height: 20px;
			border:1px solid black; 

		    /*----------解决方法--------------*/
			white-space: nowrap;/*溢出不换行*/
			overflow: hidden;/*溢出隐藏*/
			text-overflow: ellipsis;/*溢出部分用"..."表示*/

			/*这是解决单行文本溢出的固定三件套*/
		}

<br>

##多行文本溢出 [截断处理（溢出部分隐藏）]

样例：

html代码：
	
	    <p>风萧萧兮易水寒，壮士一去兮不复还，大家好，我是阿离。自从陈一发因为早期的辱华视频被曝光而凉凉后，各大主播人人自危。。</p>

css代码：
		
		*{
			margin:0;
			padding:0;
			color: #424242;
			font-family: arial;
		}
		
		
		p{
			width: 200px;
		
			height: 40px;/*通过设置高度和单行文本高度来控制输出行数*/
			line-height: 20px;
		
			border:1px solid black; 
			overflow: hidden;
		
			
		}

**控制方法：**通过控制高度和单行文本高度来控制显示的行数，即高度是单行文本高度的几倍就显示几行
***
***
<br>
#背景图片处理
***

样例：

html代码：

		<div></div>

css代码：

		*{
			margin:0;
			padding:0;
		}
		
		div{
			width: 200px;
			height: 200px;
			border:1px solid black;
			
			/*背景图片地址*/
			background-image: url(https://pic.baike.soso.com/ugc/baikepic2/0/ori-20150426123915-2059077553.jpg/800);
		    /*背景图片大小*/
			background-size: 100px 100px;
			/*背景图片铺展方式*/
			background-repeat: no-repeat;    /*repeat repear-x  repeat-y*/
			/*背景图片定位*/
			background-position: center center;    /*50% 50% \\center bottom top left right *2 \\100px 100px*/
		
		}

<br>
##图片代替文字的正确方法

问题： 我们想让图片链接在遇到问题（css无法展现时）用文字代替图片链接，而在css正常时隐藏文字只显示图片。

以下是问题样例：

html代码：

		<a href="http://www.taobao.com" target="_blank">淘宝网</a>

css代码：

		*{
			margin:0;
			padding:0;
		}
		
		a{
			display: inline-block;
			text-decoration: none;
			color: #424242;
			width: 180px;
			height: 100px;
			border:1px solid black;

			background-image: url(https://pic.baike.soso.com/ugc/baikepic2/60658/20160422211637-1707030082.jpg/0);	
		    background-size: 180px 100px;
			
		 
		}

css正常时：

![](https://i.imgur.com/a5Ic2av.png)

css无法正常读取时：

![](https://i.imgur.com/0dcv3bt.png)

###解决办法：

效果展示：

![](https://i.imgur.com/UgpMRya.png)

**第一种方法：**

用text-indent首行缩进使文字溢出,隐藏溢出文字：

			white-space: nowrap;/*溢出不换行*/
			overflow: hidden;/*溢出隐藏*/


html代码：

		<a href="http://www.taobao.com" target="_blank">淘宝网</a>
			
css代码：

			*{
				margin:0;
				padding:0;
			}
			
			a{
				display: inline-block;
				text-decoration: none;
				color: #424242;
				width: 180px;
				height: 100px;
				border:1px solid black;

				background-image: url(https://pic.baike.soso.com/ugc/baikepic2/60658/20160422211637-1707030082.jpg/0);	
			    background-size: 180px 100px;

                text-indent:180px;/*使用首行文字缩进，缩进距离为容器宽度，这样使所有文字均溢出*/
				white-space: nowrap;/*溢出不换行*/
				overflow: hidden;/*溢出隐藏*/		
			 
			}

**第二种方法：**

文字不显示在padding块，只显示在内容区，而背景图片在padding依然可以展示（和背景颜色原理相同），因此，用背景图片撑开容器，使文字溢出，再隐藏文字即可。

html代码：

		<a href="http://www.taobao.com" target="_blank">淘宝网</a>

css代码：

		*{
			margin:0;
			padding:0;
		}
		
		a{
			display: inline-block;
			text-decoration: none;
			color: #424242;
			width: 180px;
		
			height: 0px;/*将内容高度设为0*/
			padding-top: 100px;/*用padding代替高度，高度的值和之前的内容高度相同，这样只在border内展示padding上背景图片，而文字则被撑出*/
		    overflow: hidden;/*隐藏溢出文字*/
		
			border:1px solid black;
			background-image: url(https://pic.baike.soso.com/ugc/baikepic2/60658/20160422211637-1707030082.jpg/0);	
		    background-size: 180px 100px;
			
		 
		}