// 创建一个数组
var arr = new Array(1,2,3,4);
//打印数组
console.debug(arr);
// 遍历数组
for (var i = 0; i < arr.length; i++) {
	console.debug("第"+i+"个元素为:"+"\t"+arr[i]);
};
/*
// 获取数组的长度
console.debug(arr.length);
// 将数组中的元素用某个符号链接在一起，并转为字符串
console.debug(arr.join(":"));
// 删除数组中的最后一个元素
console.debug(arr.pop());
console.debug(arr);
// 向数组中添加元素
arr.push(3,5,6);
console.debug(arr);
// 对数组进行排序操作
console.debug(arr.sort());
// splice 用于插入，删除和替换元素
arr.splice(0,0,33);

*/


arr.splice(1,2,33,44);
console.debug(arr);
