// Object.defineProperty es5 vue
// Object.defineProperty 定义属性的 增加了拦截器
// let obj = {name:"tales", age:28};
// // delete obj.age;
// console.log(obj);
// for(let key in obj){
//     console.log(obj[key]);
// }
let obj = {};
let other = "";
Object.defineProperty(obj, "name", {
    enumerable: true,    //是否可以枚举
    // writable: true,      //是否可以修改值
    configurable: true,  //是否可以删除
    get(){  //读取
        console.log("正在读取...")
        return other;
    },
    set(val){ //设置
        console.log("我正在设置...")
        other = val;
    }
});
// obj.name = "tales";
// delete obj.name;
obj.name = "tty";
console.log(obj.name);