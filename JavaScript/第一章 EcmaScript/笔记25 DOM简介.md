#Document Object Mod

###简介：

####DOM定义了表示和修改文档所需的对象、这些对象的行为和属性以及这些对象之间的关系。DOM对象即为宿主对象，由浏览器厂商定义，用来操作html和xml功能的一类对象的集合。也有人称DOM是对HTML以及XML的标准编程接口。

----------


#DOM基本操作


------

####对节点的增删改查。

##查

   	    //查看元素节点
    
	    document代表整个文档
	
		document.getElementById() //元素id 在Ie8以下的浏览器，不区分id大小写，而且也返回匹配name属性的元素
	
		.getElementsByTagName() // 标签名
	
		getElementByName(); //，需注意，只有部分标签name可生效（表单，表单元素，img，iframe）
	
		.getElementsByClassName() // 类名 -> ie8和ie8以下的ie版本中没有，可以多个class一起
	
		.querySelector() // css选择器   在ie7和ie7以下的版本中没有
	
		.querySelectorAll() // css选择器 在ie7和ie7以下的版本中没有

#####节点的类型

元素节点   —— 1

属性节点   —— 2

文本节点   —— 3

注释节点   —— 8

document  —— 9

DocumentFragment  ——  11 

**获取节点类型：**   nodeType 


#####遍历节点树：

		 parentNode -> 父节点  (最顶端的parentNode为#document);
		
		 childNodes -> 子节点们
		
		 firstChild -> 第一个子节点
		
		 lastChild -> 最后一个子节点
		
		 nextSibling->后一个兄弟元素 
		
		 previousSibling->前一个兄弟元素

#####基于元素节点树的遍历：

		parentElement -> 返回当前元素的父元素节点 (IE不兼容)
		
		children -> 只返回当前元素的元素子节点
		
		node.childElementCount  === node.children.length当前元素节点的子元素节点个数(IE不兼容)
		
		firstElementChild -> 返回的是第一个元素节点(IE不兼容)
		
		lastElementChild -> 返回的是最后一个元素节点(IE不兼容)
		
		nextElementSibling / previousElementSibling ->返回后一个/前一个兄弟元素节点（IE不兼容)

#####节点的四个属性

		nodeName
			元素的标签名，以大写形式表示,只读

		nodeValue
			Text节点或Comment节点的文本内容,可读写

		nodeType
			该节点的类型，只读

		attributes
			Element 节点的属性集合

#####节点的一个方法  

		Node.hasChildNodes();

####DOM树

![](https://i.imgur.com/3oFcHIu.png)


####注意点：

1.getElementById方法定义在Document.prototype上，即Element节点上不能使用。

2.getElementsByName方法定义在HTMLDocument.prototype上，即非html中的document以外不能使用(xml document,Element)

3.getElementsByTagName方法定义在Document.prototype 和 Element.prototype上

4.HTMLDocument.prototype定义了一些常用的属性，body,head,分别指代HTML文档中的<body><head>标签。

5.Document.prototype上定义了documentElement属性，指代文档的根元素，在HTML文档中，他总是指代<html>元素

6.getElementsByClassName、querySelectorAll、querySelector在Document,Element类中均有定义

------


##增

		document.createElement();
		
		document.createTextNode();
		
		document.createComment();
		
		document.createDocumentFragment();

#####Element节点的一些属性

		innerHTML

		innerText(火狐不兼容) / textContent(老版本IE不好使)

#####Element节点的一些方法

		ele.setAttribute();

		ele.getAttribute();

##插
 
		PARENTNODE.appendChild();
		
		PARENTNODE.insertBefore(a, b):

##删

		parent.removeChild();

##替换

		parent.replaceChild(new, origin);

------


#DOM其他操作：

##查看视口的尺寸
		
		window.innerWidth/innerHeight
			IE8及IE8以下不兼容
		
		document.documentElement.clientWidth/clientHeight
			标准模式下，任意浏览器都兼容
		
		document.body.clientWidth/clientHeight
			适用于怪异模式下的浏览器
		
		封装兼容性方法，返回浏览器视口尺寸getViewportOffset()

##查看元素的几何尺寸

		domEle.getBoundingClientRect();
			兼容性很好
		
		该方法返回一个对象，对象里面有left,top,right,bottom等属性。left和top代表该元素左上角的X和Y坐标，right和bottom代表元素右下角的X和Y坐标
		
		height和width属性老版本IE并未实现
		
		返回的结果并不是“实时的”

##让滚动条滚动

		window上有三个方法
		
		scroll(),scrollTo(),scrollBy();
		
		三个方法功能类似，用法都是将x,y坐标传入。即实现让滚动轮滚动到当前位置。
		
		区别：scrollBy()会在之前的数据基础之上做累加。
		
		eg：利用scrollBy() 快速阅读的功能

##查看元素的尺寸

		dom.offsetWidth，dom.offsetHeight

##查看元素的位置

		dom.offsetLeft, dom.offsetTop
			对于无定位父级的元素，返回相对文档的坐标。对于有定位父级的元素，返回相对于最近的有定位的父级的坐标。
		
		dom.offsetParent
			返回最近的有定位的父级，如无，返回body, body.offsetParent 返回null
		
		eg：求元素相对于文档的坐标


