#脚本化css

---
---

##读写元素css属性

dom.style.prop

	可读写行间样式，没有兼容性问题，碰到float这样的关键字属性，前面应加css

	eg:float — > cssFloat

	符合属性必须拆解，组合单词变成小驼峰式写法

	写入的值必须是字符串格式


##查询计算样式

window.getComputedStyle(ele,null);

	计算样式只读

	返回的计算样式的值都是绝对值，没有相对单位

	IE8 及 IE8以下不兼容

	//可以获取伪元素属性


##查询样式

ele.currentStyle

	计算样式只读

	返回的计算样式的值不是经过转换的绝对值

	IE独有的属性

封装兼容性方法getStyle(obj,prop);
