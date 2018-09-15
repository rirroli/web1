//alert(123);
var name = "Lily";
console.debug(name);
// 返回变量的类型
console.debug(typeof name);
// 判断变量是否是某个对象类型
console.debug(name instanceof Number);
// 定义一个类
function Person(age,sex){
	this.age = age;
	this.sex = sex;
};
// 创建一个对象
var p1 = new Person(12,"男");
// 遍历对象的属性以及属性值
for(var x in p1){
	console.debug(x,p1[x]);
};
// 生成0到之间1（不包括1）的数
console.debug(Math.random());
// 生成A到Z之间的随机数
var a = String.fromCharCode(parseInt(Math.random()*26+65));
var b = parseInt(Math.random()*100)
console.debug(b);
console.debug(a);
