#防止报错


----------
		
		try{

		}catch(e){

		}

在try里面发生的错误，从错误开始的try里的代码不会被执行

出错后才会执行catch中的代码



----------

#错误信息


**Error.name的六种值对应的信息：**
	

	1. EvalError：eval()的使用与定义不一致 
	
	2. RangeError：数值越界 
	
	3. ReferenceError：非法或不能识别的引用数值 
	
	4. SyntaxError：发生语法解析错误 
	
	5. TypeError：操作数类型错误 
	
	6. URIError：URI处理函数使用不当


