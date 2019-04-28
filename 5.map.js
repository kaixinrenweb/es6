// map 也是一种存储结构
// map 有key, 不能放重复的
let map = new Map();
map.set("name", "tales");
// map.set("name", "ksone");
map.set("age", 34);
// map.size map的属性数
// console.log(map, map.size);
//key可以对象（引用类型）
let obj = {test:12};
map.set(obj, "234");
// map.keys, map.values, map.entries map.has()
obj = null;
console.log(obj);
console.log(map);

// weakMap
let map = new WeakMap(); // WeapMap key只能是对象类型
let obj = {test:23};
map.set(obj, "900"); //obj引用的空间被set所用
obj = null;          //把obj清空  但是这个空间还是存在的
console.log(obj);
console.log(map);   //v8引擎 垃圾回收