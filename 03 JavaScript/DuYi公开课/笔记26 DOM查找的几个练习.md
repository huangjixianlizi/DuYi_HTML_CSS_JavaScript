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

升级版：【兼容性和递归】



