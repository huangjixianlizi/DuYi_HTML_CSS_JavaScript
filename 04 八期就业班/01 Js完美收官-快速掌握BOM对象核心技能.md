#BOM

##什么是BOM

BOM是 browser object mode 的缩写，简称浏览器对象模型

主要处理浏览器窗口（window）和框架（iframe），描述了与浏览器进行交互的接口，可以对浏览器窗口进行访问和操作，不过通常浏览器特定的JavaScript扩行都被看作BOM的一部分。

扩展如：

- 弹出新的浏览器窗口
- 移动关闭以及调整窗口大小
- 提供web浏览器详细信息的定位对象
- 对cookie的支持
- 等等

##BOM的核心-window

window对戏那个是BOM的顶层（核心）对象，玩转BOM，就是玩转window的属性和方法。

window对象它具有双重角色，既是通过js访问浏览器窗口的一个接口，又是一个全局对象，这意味着在网页中定义的任何对象，变量和函数，都是window的属性。

##BOM和DOM的关系

JavaScript语法的标准化组织是ECMA

DOM的标准化组织是WC

BOM...（很尴尬）

![](https://i.imgur.com/6To0OOC.png)

##BOM的组成

见上图

**归纳：**

- Window JavaScript 层级中的顶层对象表示浏览器窗口
- Navigator 包含客户端浏览器的信息
- History 包含了浏览器窗口访问过的 URL
- Location 包含了当前 URL 的信息
- Screen 包含客户端显示屏的信息

##详解Window



