//多物体多值链式运动框架 ！！！！！！！
// var targetObj = {
//     width: 400,
//     height: 400,
//     opacity: 50,
//     left: 300,
//     top: 200
// }

// oDivArray[0].onclick = function() {
//     startMove(this, targetObj, function (){
//     	startMove(oDivArray[1], targetObj);
//     });
// }
function startMove(obj, data, callback) {
    clearInterval(obj.timer);
    var timer = null;
    var iSpeed,
        iCur;
    obj.timer = setInterval(function() {
        var bStop = true;
        for (var attr in data) {
            if (attr == 'opacity') {
                iCur = parseFloat(getStyle(obj, attr)) * 100;
            } else {
                iCur = parseInt(getStyle(obj, attr));
            }
            iSpeed = (data[attr] - iCur) / 7;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (attr == 'opacity') {
                obj.style.opacity = (iSpeed + iCur) / 100;
            } else {
                obj.style[attr] = iSpeed + iCur + 'px';
            }
            if (iCur != data[attr]) {
                bStop = false;
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            typeof callback == 'function' ? callback() : '';
        }
    }, 30)
}
//版本二
// function startMove(obj, data, func) {
//     clearInterval(obj.timer);
//     var timer = null;
//     var iSpeed,
//         iCur,
//         name;
//     obj.timer = setInterval(function() {
//         var bStop = true;
//         for (var attr in data) {
//             if (attr === 'opacity') {
//                 iCur = parseFloat(getStyle(obj, attr)) * 100;
//             } else {
//                 iCur = parseInt(getStyle(obj, attr));
//             }
//             iSpeed = (data[attr] - iCur) / 8;
//             iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
//             if (attr === 'opacity') {
//                 obj.style.opacity = (iSpeed + iCur) / 100;
//             } else {
//                 obj.style[attr] = iSpeed + iCur + 'px';
//             }
//             if (Math.floor(Math.abs(data[attr] - iCur)) != 0 ) {
//                 bStop = false;
//             }
//         }
//         if (bStop) {
//             clearInterval(obj.timer);
//             if(name === 'opacity'){
//                 obj.style.opacity = data[name] / 100;
//             }
//             func();
//         }
//     }, 30)
// }


//数组 ： 封装一个myReduce方法
Array.prototype.myReduce = function(func, init) {
    var len = this.length,
        prev = init,
        i = 0;
    if (init == underfined) {
        prev = this[0];
        i = 1;
    }
    for (i; i < len; i++) {
        prev = func(prev, this[i], i, this);
    }
    return prev;
}


//数组 ： 封装一个myFilter方法
Array.prototype.myFilter = function(func) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (func(this[i], i)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}


// ==================================================================
// //拖拽函数
// function drag(elem) {
// 		var disX,
// 			disY;
// 		addEvent(elem, 'mousedown', function(e){
// 			var event = e || window.event;
// 			disX = event.clientX - parseInt(getStyle(elem, 'left'));
// 			disY = event.clientY - parseInt(getStyle(elem, 'top'));
// 			addEvent(document, 'mousemove', mouseMove);
// 			addEvent(document, 'mouseup', mouseUp);
// 			stopBubble(event);
// 		});
// 		function mouseMove(e) {
// 			var event = e || window.event;
// 			elem.style.left = event.clientX - disX + "px";
// 			elem.style.top = event.clientY - disY + "px";
// 		}
// 		function mouseUp(e) {
// 			var event = e || window.event;
// 			removeEvent(document, 'mousemove', mouseMove);
// 			removeEvent(document, 'mouseup', mouseUp);
// 		}
// 	}
// ==================================================================

// 封装阻止默认事件发生的函数
function cancelHandler(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}


// 封装取消事件冒泡的函数
function stopBubble(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.vanvelBubble = true;
    }
}


// 封装兼容性的 addEvent(elem, type, handle);方法
// 给一个dom对象添加该事件类型的处理函数（绑定事件）
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function() {
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;
    }
}


// 封装函数，返回元素e的第n层祖先元素节点
function retParent(e, n) {
    while (e && n) { //e要有意义，容错
        e = elem.parentElement;
        n--;
    }
    return e;
}


// 编辑函数，封装myChildren功能，解决以前部分浏览器的兼容性问题
// 【不用Children实现Children功能】
// 【如何区分元素节点和节点？(elem.nodetype == 1)】
Element.prototype.myChildren = function() {
    var child = this.childNodes,
        len = child.length,
        arr = [];
    for (var i = 0; i < leng; i++) {
        if (child[i].nodeType == 1) {
            arr.push(child[i]);
        }
    }
    return arr;
}


// 自己封装hasChildren()方法，不可用children属性
Element.prototype.hasChildren = function() {
    var child = this.childNodes,
        len = child.length;
    for (var i = 0; i < leng; i++) {
        if (child[i].nodeType == 1) {
            return true;
        }
    }
    return false;
}


// 封装函数，返回元素e的第n个兄弟节点，n为正，返回后面的兄弟节点，n为负，返回前面的，n为0，返回自己。
function retSibling(e, n) {
    while (e && n) {
        if (n > 0) {
            if (0 && e.nextElementSibling) {
                e = e.nextElementSibling;
            } else {
                for (e = e.nextSibling; e && e.nodeType != 1; e = e.nextSibling){
          			n--;
            	}
            }
        }else{
            if (0 && e.e.previousElementSibling) {
                e = e.e.previousElementSibling;
            } else {
                for (e = e.previousSibling; e && e.nodeType != 1; e = e.previousSibling){
                	 n++;
                }
           }
        }
    }
    return e;
}


// 封装一个insertAfter，仿照insertBefore
Element.prototype.insertAfter = function(targetNode, afterNode) {
    var beforeNode = afterNode.nextElementSibling;
    if (beforeNode == null) {
        this.appendChild(targetNode);
    } else {
        this.insertBefore(targetNode, beforeNode);
    }
}


// 封装getScrollOffset()函数实时返回滚动条x轴和y轴距离
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollYop
        }
    }
}


// 封装兼容性方法getStyle(elem,prop)，用于查询某一对象的某种样式值
function getStyle(elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}
// ==================================================================
// #通过使用自己封装的getStyle()以及getComputedStyle()实现元素的移动

// 	<div style="width: 100px;height: 100px;background-color: red;position: absolute;left: 0;top: 0;"></div>
// 	<script type="text/javascript">
// 		function getStyle(elem, prop){
// 			if(window.getComputedStyle) {
// 				return window.getComputedStyle(elem, null)[prop];
// 			}else{
// 				return elem.currentStyle[prop];
// 			}
// 		}
// 		var div = document.getElementsByTagName('div')[0];	
// 		setInterval(function() {
// 			div.style.left = parseInt(getStyle(div,'left'))+10+'px';
// 			if(parsetInt(div.style.left) > 800){
// 				clearInterval(timer);
// 			}
// 		},100);	
// 	</script>
// ==================================================================


//封装一个工具类type();
function type(target) {
    var ret = typeof(target);
    var template = {
        "[object Array]": "array",
        "[object Object]": "object",
        "[object Number]": "number - object",
        "[object Boolean]": "boolean - object",
        "[object String]": "string - object"
    }

    if (target === null) {
        return "null";
    } else if (ret == "object") {
        var str = Object.prototype.toString.call(target);
        return template[str];
    } else {
        return ret;
    }
}

//在原型链上写一个数组去重方法
Array.prototype.unique = function() {
    var temp = {},
        arr = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = "a";
            arr.push(this[i]);
        }
    }
    return arr;
}


// 深层克隆
//利用json：	var obj1 = JSON.parse(JSON.stringify(obj));
//封装：
// （所有属性及属性值全相同且互不影响【无论是否为引用值】）
//遍历对象
//判断是不是原始值
//判断是数组还是对象
//递归
function deepClone(origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
    for (var prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            if (origin[prop] !== "null" && typeof(origin[prop]) == 'object') {
                // if(toStr.call(origin[prop]) == arrStr){
                // 	target[prop] = [];
                // }else{
                // 	target[prop] = {};
                // }
                target[prop] = (toStr.call(origin[prop]) == arrStr) ? [] : {};
                deepClone(origin[prop], target[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}


// 浅层克隆
// （引用值的拷贝会互相影响
function clone(origin, target) {
    var target = target || {};
    for (var prop in origin) {
        target[prop] = origin[prop];
    }
    return target;
}

// 圣杯模式 ===========================================【最完美的继承模式】
//样例：
// Father.prototype.lastName = 'Deng';
// function Father() {}
// function Son() {}     
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function inherit(Target, Origin) { //封装一个继承函数（方法）方便每次调用
    function F() {} //定义一个F()方法充当中间层，这样之后再想改Son的原型就不会影响Father的原型
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = targert; //让Target(子类)的constructor指向自己
    //不加这一条会指向Father,即[son.__proto__  -->  new F().__proto__  -->  Father.prototype]
    Target.prototype.uber = Origin.prototype; //如果有一天想知道自己的超父级是谁，查看这条属性[即继承结构是：Target -->F() --> Father]

}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// inherit(Son, Father);				//调用函数，使Son继承Father的原型，并且后续更改Son原型不影响Father原型
// var son = new Son();                //查看
// var father = new Father();
// console.log(son.lastName);
// console.log(father.lastName);


// **ps:yahoo的写法：**
// var inherit = (function() {  
// 	var F = function() {};
// 	return function (Target, Origin){         
// 		F.prototype = Origin.prototype;
// 		Target.prototype = new F();
// 		Target.prototype.constructor = targert;	
// 		Target.prototype.uber = Origin.prototype;  
// 	} 
// }());
// ==================================================================