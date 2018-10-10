##JSON.parse()
JSON 通常用于与服务端交换数据。

在接收服务器数据时一般是字符串。

我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

####语法
		JSON.parse(text[, reviver])

参数说明：

- text:必需， 一个有效的 JSON 字符串。
- reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。


##JSON 解析实例
例如我们从服务器接收了以下数据：

		{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }
我们使用 JSON.parse() 方法处理以上数据，将其转换为 JavaScript 对象：

		var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
**PS:**

- 解析前要确保你的数据是标准的 JSON 格式，否则会解析出错。

- 你可以使用我们的在线工具检测：[https://c.runoob.com/front-end/53](https://c.runoob.com/front-end/53)。

解析完成后，我们就可以在网页上使用 JSON 数据了：

实例
		
		<h2>从 JSON 对象中创建 JavaScript 对象</h2>
		
		<p id="demo"></p>
		
		<script>
		var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
		document.getElementById("demo").innerHTML = obj.name + "：" + obj.site;
		</script>

##从服务端接收 JSON 数据

我们可以使用 AJAX 从服务器请求 JSON 数据，并解析为 JavaScript 对象。

实例
		
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        myObj = JSON.parse(this.responseText);
		        document.getElementById("demo").innerHTML = myObj.name;
		    }
		};
		xmlhttp.open("GET", "/try/ajax/json_demo.txt", true);
		xmlhttp.send();

尝试一下：[菜鸟教程在线编辑](http://www.runoob.com/try/try.php?filename=tryjson_ajax)

服务端数据：[链接](http://www.runoob.com/try/ajax/json_demo.txt)

##从服务端接收数组的 JSON 数据
如果从服务端接收的是数组的 JSON 数据，则 JSON.parse 会将其转换为 JavaScript 数组：

实例
		
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        myArr = JSON.parse(this.responseText);
		        document.getElementById("demo").innerHTML = myArr[1];
		    }
		};
		xmlhttp.open("GET", "/try/ajax/json_demo_array.txt", true);
		xmlhttp.send();

尝试一下：[菜鸟教程在线编辑](http://www.runoob.com/try/try.php?filename=tryjson_ajax_array)

服务端数据：[链接](http://www.runoob.com/try/ajax/json_demo_array.txt)

##异常
###解析数据
JSON 不能存储 Date 对象。

如果你需要存储 Date 对象，需要将其转换为字符串。

之后再将字符串转换为 Date 对象。

实例

		var text = '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}';
		var obj = JSON.parse(text);
		obj.initDate = new Date(obj.initDate);
		 
		document.getElementById("demo").innerHTML = obj.name + "创建日期: " + obj.initDate;

尝试一下：[菜鸟教程在线编辑](http://www.runoob.com/try/try.php?filename=tryjson_parse_date)

我们可以启用 JSON.parse 的第二个参数 reviver，一个转换结果的函数，对象的每个成员调用此函数。

实例
		
		var text = '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}';
		var obj = JSON.parse(text, function (key, value) {
		    if (key == "initDate") {
		        return new Date(value);
		    } else {
		        return value;
		}});
		 
		document.getElementById("demo").innerHTML = obj.name + "创建日期：" + obj.initDate;

尝试一下：[菜鸟教程在线编辑](http://www.runoob.com/try/try.php?filename=tryjson_parse_reviver)

##解析函数

JSON 不允许包含函数，但你可以将函数作为字符串存储，之后再将字符串转换为函数。

实例
		
		var text = '{ "name":"Runoob", "alexa":"function () {return 10000;}", "site":"www.runoob.com"}';
		var obj = JSON.parse(text);
		obj.alexa = eval("(" + obj.alexa + ")");
		 
		document.getElementById("demo").innerHTML = obj.name + " Alexa 排名：" + obj.alexa();
尝试一下：[菜鸟教程在线编辑](http://www.runoob.com/try/try.php?filename=tryjson_parse_function)

不建议在 JSON 中使用函数

##浏览器支持

主流浏览器都支持 JSON.parse() 函数：

- Firefox 3.5
- Internet Explorer 8
- Chrome
- Opera 10
- Safari 4

##笔记：

####笔记1：

eval(string):函数可计算某个字符串，并执行其中的的 JavaScript 代码。
		
		eval("var a=1");     // 声明一个变量a并赋值1。
		eval("2+3");         // 执行加运算，并返回运算值。
		eval("mytest()");    // 执行mytest()函数。
		eval("{b:2}");       // 声明一个对象。

####笔记2：

对于服务器返回的JSON字符串，如果 jQuery 异步请求没做类型说明，或者以字符串方式接受，那么需要做一次对象化处理，方式不是太麻烦，就是将该字符串放于 eval()中执行一次。这种方式也适合以普通 javascipt 方式获取 json 对象，以下
举例说明：

		var u = eval('('+user+')');

为什么要 eval 这里要添加 ('('+user+')') 呢？

原因在于：eval 本身的问题。 由于 json 是以 {} 的方式来开始以及结束的，在 js 中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。

加上圆括号的目的是迫使 eval 函数在处理 JavaScript 代码的时候强制将括号内的表达式（expression）转化为对象，而不是作为语句（statement）来执行。举一个例子，例如对象字面量 {}，如若不加外层的括号，那么 eval 会将大括号识别为 javascript 代码块的开始和结束标记，那么{}将会被认为是执行了一句空语句。所以下面两个执行结果是不同的：
		
		alert(eval("{}"); // return undefined
		alert(eval("({})");// return object[Object]

测试实例
		
		var user = '{name:"张三",age:23,'+   
		    'address:{city:"青岛",zip:"266071"},'+    'email:"iteacher@haiersoft.com.cn",'+  
		    'showInfo:function(){'+  
		    'document.write("姓名："+this.name+"<br/>");'+  
		    'document.write("年龄："+this.age+"<br/>");'+  
		    'document.write("地址："+this.address.city+"<br/>");'+  
		    'document.write("邮编："+this.address.zip+"<br/>");'+  
		    'document.write("E-mail："+this.email+"<br/>");} }';   
		var u = eval('('+user+')');  
		u.showInfo();

尝试一下：[菜鸟教程在线编辑](https://c.runoob.com/codedemo/3477)

####笔记3：

使用 JSON.parse 的 reviver 函数时一定要注意遍历到最后的顶层对象 key 为 ""，需要返回 value。
		
		var json = '{"name":"Harvy", "age":36, "gender":"male"}';
		var person = JSON.parse(json, function (key, value) {
		    if(key != "")
		        return "<font color=\"blue\">"+value+"</font>";
		    else
		        return value;
		});