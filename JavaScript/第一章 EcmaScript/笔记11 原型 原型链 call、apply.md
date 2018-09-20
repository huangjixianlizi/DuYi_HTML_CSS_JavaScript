#原型

###1.定义：

原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。

###2.利用原型特点和概念，可以提取共有属性。

###3.对象如何查看原型

 — > 隐式属性 __proto__ 


###4.对象如何查看对象的构造函数 

 — > constructor

<br>

**原型样例：**
		
		//Person.prototype        祖先一直存在
		//Person.prototype = {}   是祖先
		Person.prototype.LastName = "祖先";
		
		function Person(name){
		}
		var person1 = new Person('person1');
		
		console.log(person1);
		console.log(person1.LastName); //原型的属性会被直接继承



**原型的应用：利用原型特点和概念，可以提取共有属性**
		
		//Car.prototype.height = 1400;
		//Car.prototype.long = 4900;
		//Car.prototype.carName = 'BMW';     //共有属性，提高效率		
		Car.prototype = {
			height = 1400;
			long = 4900;
			carName = 'BMW';
		}	                                 //这样写也是可以的，依然可以继承

		function Car(color，owner) {
			this.color = color;
			this.owner = owner;
		}
		
		var car1 = new Car('red','1');
		var car2 = new Car('blue','2');

**原型的增删改查：**

		Person.prototype.add = 'add';
		delete Person.prototype.delete;     //输出true ，但 并不能删除值（依然可以查找到）
		Person.prototype.change = 'change';
		console.log(Person.search);         //先看Person() 再看Person.prototype

**对象如何查看原型**
		
		function Car() {}
		var car = new Car();
		console.log(Car.prototype);

		输出：
		Object {
		  constructor:Car()   //自带  

		  __proto__:Object    //隐式属性
		}

**对象如何查看对象的构造函数**

		function Car() {}
		var car = new Car();
		console.log(car.constructor);  // construtor->构造器   可以手动更改
	
		输出：
		function Car(){}


		手动更改：

		function Car() {}
		var car = new Car();
		Car.prototype.constructor = function person() {};
		console.log(car.constructor);

		输出：
		function person() {}

------
------

#原型链

###1.如何构成原型链?

###2.原型链上属性的增删改查

###3.绝大多数对象的最终都会继承自Object.prototype

###4.Object.create(原型);


------
------


#call、apply

**作用：改变this指向；  区别：后面传的参数形式不同**

call 需要把实参按照形参的个数传进去
apply需要传一个arguments

##call

正常方法执行时：  test() -->test.call();

借用你的方法，实现我的功能（参数完全覆盖）。


例一： 简单的覆盖（对象）

    	function Person(name ,age) {
    		//call更改指向 相当于this = obj 然后将所有属性添加到obj里
    		this.name = name;
    		this.age = age;
    	}

    	var obj = {}    //obj为空对象

    	Person.call(obj,'qwe',300);//第一个参数，改变指向。 其余参数传参（参数需完全覆盖），obj对象不再为空
    	console.log(obj);  //输出{name: "qwe", age: 300}

例二：在函数里面的覆盖（构造函数）************
	
	    function Person(name, tel, sex) {
	        this.name = name;
	        this.tel = tel;
	        this.sex = sex;
	    }
	
	    function Student(name, age, sex, tel, grade) {
	        Person.call(this, name, tel, sex);  
	        this.age = age;
	        this.grade = grade;
	    }
	
	    var student = new Student('huang', 22, 'male', 123456, 5);
	    console.log(student);
	    /* Student
			age:22
			grade:5
			name:"huang"
			sex:"male"
			tel:123456*/


##apply

apply只能传一个参数，而且是数组。


    	function Person(name ,age) {
    		this.name = name;
    		this.age = age;
    	}

    	var obj = {} 

    	Person.apply(obj,['qwe',300]);
    	console.log(obj);  //输出{name: "qwe", age: 300}