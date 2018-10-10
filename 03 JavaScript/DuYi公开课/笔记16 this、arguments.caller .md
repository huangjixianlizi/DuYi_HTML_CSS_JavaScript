#this
-----

- 1.函数预编译过程 this —> window
- 2.全局作用域里 this —> window
- 3.call/apply 可以改变函数运行时this指向
- 4.obj.func();   func()里面的this指向obj)

[视频详解 课时23 24](https://study.163.com/course/introduction/1004170004.htm)

例题1：

    	var name = "222";
    	var a = {
    		name:"111",
    		say : function () {
    			console.log(this.name);
    		}
    	}
    	var fun = a.say;         
    	fun();             //222   this指向window
    	a.say();           //111
    	var b = {
    		name : "333",
    		say : function (fun) { 
    			fun();     
    		}
    	}
    	b.say(a.say);        //222
    	b.say = a.say;
    	a.say();            //111

例二：

		var foo = 123;
		function print () {
			this.foo = 234;
			console.log(foo);
		}
		print();           //234
		new print();       //123

例三：






#arguments
-----

- arguments.callee    指当前函数自身的引用(函数自身)
- function.caller


###arguments.callee：

自身的引用的实例：

    	function test () {
    		console.log(arguments.callee);
    		function demo () {
    			console.log(arguments.callee);
    		}
    		demo();
    	}

阶乘：

		var num = （function (n) {
			if(n ==1){
		    	return 1;
			}
			return n * arguments.callee(n-1);
		}(100)）


###function.caller：

    	function test () {
    		demo();
    	}    
    	function demo () {
    		console.log(demo.caller);
    	}
    	test();