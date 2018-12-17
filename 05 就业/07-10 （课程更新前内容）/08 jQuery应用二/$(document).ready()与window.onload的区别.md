Jquery中$(document).ready()的作用类似于传统JavaScript中的window.onload方法，不过与window.onload方法还是有区别的。

####1.执行时间 

		window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。 
		$(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。 

####2.编写个数不同 
      
		window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个 
		$(document).ready()可以同时编写多个，并且都可以得到执行 

####3.简化写法 

		window.onload没有简化写法 
		$(document).ready(function(){})可以简写成$(function(){});


 以浏览器装载文档为例，在页面加载完毕后，浏览器会通过 Javascript 为 DOM 元素添加事件。在常规的 Javascript 代码中，通常使用 window.onload 方法，而在 Jquery 中，使用的是 $(document).ready() 方法。 $(document).ready() 方法是事件模块中最重要一个函数，可以极大的提高 Web 应用程序的速度。

window.load  $(document).ready()执行时机必须等待网页中所有的内容加载完毕后 ( 包括图片 ) 才能执行  网页中所有 DOM 结构绘制完毕后就执行，可以能 DOM 元素关联的内容并没有加载完  
编写个数  不能同时编写多个 

以下代码无法正确执行：

		window.onload = function(){ 
			alert(“text1”); 
		}; 
		window.onload = function(){ 
			alert(“text2”); 
		};

结果只输出第二个  能同时编写多个 

以下代码正确执行： 

		$(document).ready(function(){ 
		   alert(“Hello World”); 
		}); 
		$(document).ready(function(){ 
		   alert(“Hello again”); 
		}); 
		结果两次都输出  
		简化写法  无  $(function(){ 
		   // do something 
		}); 

另外，需要注意一点，由于在 $(document).ready() 方法内注册的事件，只要 DOM 就绪就会被执行，因此可能此时元素的关联文件未下载完。例如与图片有关的 html 下载完毕，并且已经解析为 DOM 树了，但很有可能图片还没有加载完毕，所以例如图片的高度和宽度这样的属性此时不一定有效。要解决这个问题，可以使用 Jquery 中另一个关于页面加载的方法 ---load() 方法。

Load() 方法会在元素的 onload 事件中绑定一个处理函数。如果处理函数绑定给 window 对象，则会在所有内容 ( 包括窗口、框架、对象和图像等 ) 

加载完毕后触发，如果处理函数绑定在元素上，则会在元素的内容加载完毕后触发。
 

		Jquery 代码如下： 
		$(window).load(function (){ 
		       // 编写代码  
		});等价于 JavaScript 中的以下代码 
		Window.onload = function (){ 
		     // 编写代码 
		}

——————————————————————————————

最近在改一个嵌入在frame中的页面的时候，使用了jquery做效果，而页面本身也绑定了onload事件。改完后，Firefox下测试正常流畅，IE下就要等个十几秒jquery的效果才出现，黄花菜都凉了。

　　起初以为是和本身onload加载的方法冲突。网上普遍的说法是$(document).ready()是在页面DOM解析完成后执行，而onload事件是在所有资源都准备完成之后才执行，也就是说$(document).ready()是要在onload之前执行的，尤其当页面图片较大较多的时候，这个时间差可能更大。可是我这页面分明是图片都显示出来十几秒了，还不见jquery的效果出来。

　　删了onload加载的方法试试，结果还是一样，看来没有必要把原本的onload事件绑定也改用$(document).ready()来写。那是什么原因使得Firefox正常而IE就能呢？接着调试，发现IE下原来绑定的onload方法竟然先于$(document).ready()的内容执行，而Firefox则是先执行$(document).ready()的内容，再执行原来的onload方法。这个和网上的说法似乎不完全一致啊，呵呵，有点意思，好像越来越接近真相了。

　　翻翻jquery的源码看看$(document).ready()是如何实现的吧：

		复制代码 代码如下:

		if ( jQuery.browser.msie && window == top ) (function(){ 
		if (jQuery.isReady) return; 
		try { 
		document.documentElement.doScroll("left"); 
		} catch( error ) { 
		　　　　　　setTimeout( arguments.callee, 0 ); 
		　　　　　　 return; 
		　　　　} 
		　　 // and execute any waiting functions 
		　　　jQuery.ready(); 
		})(); 
		jQuery.event.add( window, "load", jQuery.ready );


结果很明了了，IE只有在页面不是嵌入frame中的情况下才和Firefox等一样，先执行$(document).ready()的内容，再执行原来的onload方法。对于嵌入frame中的页面，也只是绑定在load事件上执行，所以自然是在原来的onload绑定的方法执行之后才轮到。而这个页面中正好在测试环境下有一个访问不到的资源，那十几秒的延迟正是它放大出的时间差。

--------------------- 

作者：微个日光日 

来源：CSDN 

原文：https://blog.csdn.net/xiebaochun/article/details/36375481 

版权声明：本文为博主原创文章，转载请附上博文链接！