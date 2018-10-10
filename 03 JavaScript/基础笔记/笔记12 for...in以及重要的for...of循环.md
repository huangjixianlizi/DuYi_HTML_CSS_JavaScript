##for...in循环

		var x
		var nums = [1, 3, 5];
		for (x in nums)
		{
		    document.write(nums[x]+ "<br />");  // x 为数组索引
		}


##for...of循环

for 循环除了使用 in 方式来循环数组，还提供了一个方式： of , 遍历数组时更加方便。

**for...of 是 ES6 新引入的特性。它既比传统的for循环简洁，同时弥补了forEach和for-in循环的短板。**

for-of的语法：
		
		for (var value of myArray) {
		  console.log(value);

		}
for-of 的语法看起来跟 for-in 很相似，但它的功能却丰富的多，它能循环很多东西。

for-of 循环使用例子：

#####循环一个 数组 (Array):
		
		let iterable = [10, 20, 30];
		
		for (let value of iterable) {
		  console.log(value);
		}
		// 10
		// 20
		// 30

我们可以使用const来替代let，这样它就变成了在循环里的不可修改的静态变量。

		let iterable = [10, 20, 30];
		
		for (const value of iterable) {
		  console.log(value);
		}
		// 10
		// 20
		// 30

#####循环一个 字符串：

		let iterable = "boo";
		
		for (let value of iterable) {
		  console.log(value);
		}
		// "b"
		// "o"
		// "o"

#####循环一个 类型化的数组 (TypedArray)：
		
		let iterable = new Uint8Array([0x00, 0xff]);
		
		for (let value of iterable) {
		  console.log(value);
		}
		// 0
		// 255

#####循环一个 Map:

		let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);
		
		for (let [key, value] of iterable) {
		  console.log(value);
		}
		// 1
		// 2
		// 3
		
		for (let entry of iterable) {
		  console.log(entry);
		}
		// [a, 1]
		// [b, 2]
		// [c, 3]

#####循环一个 Set:

		let iterable = new Set([1, 1, 2, 2, 3, 3]);
		
		for (let value of iterable) {
		  console.log(value);
		}
		// 1
		// 2
		// 3

#####循环一个 DOM collection

循环一个DOM collections，比如NodeList，之前我们讨论过如何循环一个NodeList，现在方便了，可以直接使用for-of循环：
		
		// Note: This will only work in platforms that have
		// implemented NodeList.prototype[Symbol.iterator]
		let articleParagraphs = document.querySelectorAll("article > p");
		
		for (let paragraph of articleParagraphs) {
		  paragraph.classList.add("read");
		}

#####循环一个拥有enumerable属性的对象

for–of循环并不能直接使用在普通的对象上，但如果我们按对象所拥有的属性进行循环，可使用内置的Object.keys()方法：

		for (var key of Object.keys(someObject)) {
		  console.log(key + ": " + someObject[key]);
		}

#####循环一个生成器(generators)

我们可循环一个生成器(generators):

		function* fibonacci() { // a generator function
		  let [prev, curr] = [0, 1];
		  while (true) {
		    [prev, curr] = [curr, prev + curr];
		    yield curr;
		  }
		}
		
		for (let n of fibonacci()) {
		  console.log(n);
		  // truncate the sequence at 1000
		  if (n >= 1000) {
		    break;
		  }
		}