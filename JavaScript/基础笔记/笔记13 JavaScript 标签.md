##JavaScript 标签

以对 JavaScript 语句进行标记。

如需标记 JavaScript 语句，请在语句之前加上冒号：

		label:
		statements

break 和 continue 语句仅仅是能够跳出代码块的语句。

语法:

		break labelname; 
		 
		continue labelname;


continue 语句（带有或不带标签引用）只能用在循环中。

break 语句（不带标签引用），只能用在循环或 switch 中。

通过标签引用，break 语句可用于跳出任何 JavaScript 代码块：

实例
	
	cars=["BMW","Volvo","Saab","Ford"];
	list: 
	{
	    document.write(cars[0] + "<br>"); 
		continue list;
	    document.write(cars[1] + "<br>"); 
	    document.write(cars[2] + "<br>"); 
	    break list;
	    document.write(cars[3] + "<br>"); 
	    document.write(cars[4] + "<br>"); 
	    document.write(cars[5] + "<br>"); 
	}