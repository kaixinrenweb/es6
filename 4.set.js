// set 一种存储结构
// set 集合 没有顺序的 不能重复的
let s = new Set([1,2,3, 2,3]);
// console.log(typeof s); // object
s.add(5);    //添加
s.delete(3); //删除
// console.log(s);

//数组去重
let arr = [...s];
// console.log(arr);
// s.forEach(item=>{
//     console.log(item);
// });
// console.log(s.keys(), s.values(), s.entries());
// for in  / forEach
// for(let key of s){  //有迭代器 [Symbol.iterator]
//     console.log(key, s);
// }

// 并集  差集  交集
let arr1 = [1,2,3];
let arr2 = [3,4,5];
//并集
function union(){
    let s1 = new Set(arr1);
    let s2 = new Set(arr2);
    return [...new Set([...s1,...s2])];
}
console.log(union());

//交集
function sections(){
    //返回了true就留下
    return [...new Set(arr1)].filter(item=>{
        return new Set(arr2).has(item);
    });
}
console.log(sections());

// 差集
function diff(){
    return [...new Set(arr1)].filter(item=>{
        return !new Set(arr2).has(item);
    });
}
console.log(diff());
function diff2(){
    return [...new Set(arr2)].filter(item=>{
        return !new Set(arr1).has(item);
    });
}
console.log(diff2());