
##ES6 中的 let 关键字
		在 ES6 中，提供了 let 关键字和 const 关键字。
		
		let 的声明方式与 var 相同，用 let 来代替 var 来声明变量，就可以把变量限制在当前代码块中。
		
		使用 const 声明的是常量，其值一旦被设定便不可被更改。

##let与var的区别
	
**let 允许你声明一个作用域被限制在块级中的变量、语句或者表达式。**

**与var关键字不同的是，它声明的变量只能是全局或者整个函数块的。**

let 语法：
		
		let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];


**let 声明的变量只在其声明的块或子块中可用，这一点，与 var 相似。**

**二者之间最主要的区别在于 var 声明的变量的作用域是整个封闭函数。**

let 和 var 的区别代码实例：

		function varTest() {
		  var x = 1;
		  if (true) {
		    var x = 2;  // 同样的变量!
		    console.log(x);  // 2
		  }
		  console.log(x);  // 2
		}
		
		function letTest() {
		  let x = 1;
		  if (true) {
		    let x = 2;  // 不同的变量
		    console.log(x);  // 2
		  }
		  console.log(x);  // 1
		}