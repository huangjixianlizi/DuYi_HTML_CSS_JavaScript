##arguments  --  实参列表
		
		function sum(a){
			//arguments --  [11,2,3] 实参列表
			console.log(arguments);

			console.log(arguments.length);    //实参长度
			console.log(sum.length);		  //形参长度

			//无论实参多了还是形参多了都不会报错，实参都会保存在arguments（类似数组）里

			for(var i = 0; i < arguments.length; i++){
			console.log(arguments[i])
			}
		}
		
		sum(11,2,3);