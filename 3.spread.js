// 实现深拷贝
// 方法一： 可以通过先把对象转成字符串，然后再把字符串转成对象
let obj1 = { name: "tales", age:function(){} };
let obj = JSON.parse(JSON.stringify({...obj1}));
// console.log(obj);

// 判断类型 typeof instanceof Object.prototype.toString.call constructor
// 自己实现所谓的深拷贝方法 (递归的拷贝 一层层的拷贝实现)
function deepClone(obj, hash=new WeakMap()){ 
    // obj==null
    if(obj == null) return obj;
    // Date
    if(obj instanceof Date) return new Date(obj);
    // RegExp
    if(obj instanceof RegExp) return new RegExp(obj);
    // 基本数据类型（function Symbol）
    if(typeof obj !== 'object') return obj;
    if(hash.has(obj)) return hash.get(obj);
    // 要不是数组  要不是对象
    let cloneRes = new obj.constructor;
    //如果赋予的值是对象  你就把这个对象 放到weakmap中
    hash.set(obj, cloneRes);
    // console.log(obj, hash);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            cloneRes[key] = deepClone(obj[key], hash);
        }
    }
    return cloneRes;
}
// map weakmap
let objs = {names: "tales", age:{test:123}};
objs.tt = objs;  //循环引用
let n = deepClone(objs);
// objs.age.test = 456;
console.log(n);