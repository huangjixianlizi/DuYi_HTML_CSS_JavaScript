#封装函数，返回元素e的第n层祖先元素节点
	
html代码：
	
		<div>
			<strong>
				<span>
					<i></i>
				</span>
			</strong>
		</div>



js代码：

		var i = document.getElen=mentsByTagName('i')[0];
		function retParent(e,n){
			while(e && n){  			//e要有意义，容错
				e = elem.parentElement;
				n --;
			}
			return e;
		}

在console运行：

		retParent(i,2);

运行结果：

		<strong>...</strong>

---
---

#编辑函数，封装myChildren功能，解决以前部分浏览器的兼容性问题

【不用Children实现Children功能】

【如何区分元素节点和节点？(elem.nodetype == 1)】

		Element.prototype.myChildren = function () {
			var child = this.childNodes,
				len = child.length,
				arr = [];
				for(var i - 0; i < leng; i ++){
					if(child[i].nodeType == 1){
						arr.push(child[i]);
					}
				}
				return arr;
		}


---
---

#自己封装hasChildren()方法，不可用children属性


		Element.prototype.hasChildren = function () {
			var child = this.childNodes,
				len = child.length;
				for(var i - 0; i < leng; i ++){
					if(child[i].nodeType == 1){
						return true；
					}
				}
				return false;
		}


---
---

#封装函数，返回元素e的第n个兄弟节点，n为正，返回后面的兄弟节点，n为负，返回前面的，n为0，返回自己。
		
		
		function retSibling (e , n) {
			while(e && n){
				if(n > 0){
					e = e.nextElementSibling;
					n --;
				}else{
					e = e.previousElementSibling;
					n ++;
				}
			}
			return e;
		}

升级版：【兼容性(IE9以下)和递归】

		function retSibling (e , n) {
			while(e && n){
				if(n > 0){
					if(0 $$ e.nextElementSibling){
					 e = e.nextElementSibling;
					}else{
						for(e = e.nextSibling; e && e.nodeType != 1; e = e.nextSibling;)
					}
					n --;
				}else{
					if(0 $$ e.e.previousElementSibling){
					 e = e.e.previousElementSibling;
					}else{
						for(e = e.previousSibling; e && e.nodeType != 1; e = e.previousSibling;)
					}
					n ++;
				}
			}
			return e;
		}




---
---


#通过js插入标签和内容
		
		var div = document.createElement('div');
		var p = document.createElement('p');
		div.setAttribute('class','example');
		p.setAttribute('class','demo');
		var text = document.createTextNode('zzz');
		p.appendChild(text);
		div.appendChild(p);
		document.body.appendChild(div);
		
另一种方式：

		var div = document.createElement('div');
		div.innerHTML = "
			<div class = "emample">
				<p class = "demo">
					zzz
				</p>
			</div>
		";
		document.body.appendChild(div);


---
---

#封装一个insertAfter，仿照insertBefore

		Element.prototype.insertAfter = function (targetNode,afterNode) {
			var beforeNode = afterNode.nextElementSibling;
			if(beforeNode ==null){
				this.appendChild(targetNode);
			}else{
				this.insertBefore(targetNode, beforeNode);
			}
		}


---
---

#将目标节点内部的节点逆序

	<div>
		<p></p>
		<i></i>
		<span></span>
	</div>

方法：appendChild 

---
---

##封装getScrollOffset()函数实时返回滚动条x轴和y轴距离

		function getScrollOffset(){
			if(window.pageXOffset){
				return {
					x : window.pageXOffset,
					y : window.pageYOffset
				}
			}else{
				return {
					x : document.body.scrollLeft + document.documentElement.scrollLeft,
					y : document.body.scrollTop + document.documentElement.scrollYop
				}
			}
		}


---
---
 
#简单的自动阅读功能

		
		<div style="width:100px;height: 100px; background-color: orange;color: black;font-size: 40px;font-weight: bold;text-align: center;line-height: 100px;position: fixed;bottom: 200px;right: 50px;border-radius: 50%;opacity: 0.5; ">start</div>

		<div style="width:100px;height: 100px; background-color: orange;color: black;font-size: 40px;font-weight: bold;text-align: center;line-height: 100px;position: fixed;bottom: 50px;right: 50px;border-radius: 50%;opacity: 0.5; ">end</div>
		
		
		<script type="text/javascript">
			var start = document.getElementsByTagName('div')[0];
			var timer = 0;
			var key = true;
			start.onclick = function(){
				if(key){
					timer = setInterval(function(){
						window.scrollBy(0,10);
					},100);
				}
				key = false;
			}
			var end = document.getElementsByTagName('div')[1];
			end.onclick = function(){
				clearInterval(timer);
				key = true;
			}
		</script>


---
---

#封装兼容性方法getStyle(elem,prop)，用于查询某一对象的某种样式值
	
		function getStyle(elem, prop){
			if(window.getComputedStyle) {
				return window.getComputedStyle(elem, null)[prop];
			}else{
				return elem.currentStyle[prop];
			}
		}

---
---

#通过使用自己封装的getStyle()以及getComputedStyle()实现元素的移动

	<div style="width: 100px;height: 100px;background-color: red;position: absolute;left: 0;top: 0;"></div>
	
	<script type="text/javascript">
		function getStyle(elem, prop){
			if(window.getComputedStyle) {
				return window.getComputedStyle(elem, null)[prop];
			}else{
				return elem.currentStyle[prop];
			}
		}
	
		var div = document.getElementsByTagName('div')[0];
	
		setInterval(function() {
			div.style.left = parseInt(getStyle(div,'left'))+10+'px';
			if(parsetInt(div.style.left) > 800){
				clearInterval(timer);
			}
		},100);
	
	
	</script>
