// ...展开运算符
// 把两个数组合并成一个数组
// 把两个对象合并成一个对象

let arr1 = [1,2,3];
let arr2 = [4,5,6];
// let arr = arr1.concat(arr2);
let arr = [...arr1, ...arr2];
// console.log(arr);

//Object.assign (一层的复制,不能做到深层的拷贝)
// 浅拷贝  深拷贝 
let obj1 = {name:"tales"};
let obj2 = {age:28, hobbits:{eat:1, sleep:1}};
// let obj = {...obj1, ...obj2};
// obj2.hobbits.eat = 3;
// console.log(obj);

// 可以通过先把对象转成字符串，然后再把字符串转成对象
let obj = JSON.parse(JSON.stringify({...obj1, ...obj2}));
obj2.hobbits.eat = 3;
console.log(obj);