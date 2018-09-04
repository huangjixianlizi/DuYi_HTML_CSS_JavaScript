##JSON对象

##对象语法
实例

		{ "name":"runoob", "alexa":10000, "site":null }

- JSON 对象使用在大括号({})中书写。
- 对象可以包含多个 key/value（键/值）对。
- key 必须是字符串，value 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。
- key 和 value 中使用冒号(:)分割。 
- 每个 key/value 对使用逗号(,)分割。

##访问对象值[两种访问方式！！！重点]
你可以使用点号（.）来访问对象的值：

实例

		var myObj, x;
		myObj = { "name":"runoob", "alexa":10000, "site":null };
		x = myObj.name;

你也可以使用中括号（[]）来访问对象的值：

实例
		
		var myObj, x;
		myObj = { "name":"runoob", "alexa":10000, "site":null };
		x = myObj["name"];

##循环对象

你可以使用 for-in 来循环对象的属性：

实例

**x代表key**
		
		var myObj = { "name":"runoob", "alexa":10000, "site":null };
		for (x in myObj) {
		    document.getElementById("demo").innerHTML += x + "<br>";
		}

在 for-in 循环对象的属性时，使用中括号（[]）来访问属性的值：

实例

**myObj[x]代表值     ！！！！这里必须用myObj[x]，不可以用myObj.x！！！**
		
		var myObj = { "name":"runoob", "alexa":10000, "site":null };
		for (x in myObj) {
		    document.getElementById("demo").innerHTML += myObj[x] + "<br>";
		}

##嵌套 JSON 对象
JSON 对象中可以包含另外一个 JSON 对象：

实例
		
		myObj = {
		    "name":"runoob",
		    "alexa":10000,
		    "sites": {
		        "site1":"www.runoob.com",
		        "site2":"m.runoob.com",
		        "site3":"c.runoob.com"
		    }
		}



你可以使用点号(.)或者中括号([])来访问嵌套的 JSON 对象。

实例

		x = myObj.sites.site1;
		// 或者
		x = myObj.sites["site1"];


结合for-in实例

	myObj = {
	    "name":"runoob",
	    "alexa":10000,
	    "sites": {
	        "site1":"www.runoob.com",
	        "site2":"m.runoob.com",
	        "site3":"c.runoob.com"
	    }
	}
	for (x in myObj.sites) {
	    document.getElementById("demo").innerHTML += myObj.sites[x] + "<br>";
	}

	
##修改值
你可以使用点号(.)来修改 JSON 对象的值：

实例

		myObj.sites.site1 = "www.google.com";


你可以使用中括号([])来修改 JSON 对象的值：

实例

		myObj.sites["site1"] = "www.google.com";

##删除对象属性

我们可以使用 delete 关键字来删除 JSON 对象的属性：

实例

		delete myObj.sites.site1;


你可以使用中括号([])来删除 JSON 对象的属性：

实例

		delete myObj.sites["site1"]



