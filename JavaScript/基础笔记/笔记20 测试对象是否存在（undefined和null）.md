##Undefined 不是 Null

在 JavaScript 中, null 用于对象, undefined 用于变量，属性和方法。

对象只有被定义才有可能为 null，否则为 undefined。

如果我们想测试对象是否存在，在对象还没定义时将会抛出一个错误。

错误的使用方式：
	
	if (myObj !== null && typeof myObj !== "undefined") 

正确的方式是我们需要先使用 typeof 来检测对象是否已定义：

	if (typeof myObj !== "undefined" && myObj !== null) 