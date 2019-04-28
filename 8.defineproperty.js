// set get -> 对象的setter getter
// vue 数据劫持 (把所有的属性都改成get / set)
function notify(){
    console.log("更新视图");
}
let obj = {
    name: "tales",
    age: 28,
    location: {
        province: "anhui"
    }
};
//监控
function observer(obj){
    if(typeof obj != 'object') return obj;
    for(let key in obj){
        defineReactive(obj, key, obj[key]);
    }
}
//
function defineReactive(obj, key, value){
    observer(value);
    Object.defineProperty(obj, key, {  //object.defineproperty 只是针对对象的，数组没有效果
        get(){
            return value;
        },
        set(val){
            if(val != value){
                observer(val);
                notify();
                value = val;
            }
        }
    })
}
observer(obj);
// obj.name = "ksone";
// obj.location.province = "shanghai";
// obj.location = {
//     province: "beijing"
// }
// obj.location.province = "shandong";
obj.location = [1,2,3];
// obj.location.push(5); // slice pop shift unshift reverse
// console.log(obj.location);
let methods = ["push", "splice", "pop", "shift", "unshift", "reverse"];
methods.forEach(method=>{
    //aop 面向切面
    let oldMethod = Array.prototype[method];
    Array.prototype[method] = function(){
        notify();
        oldMethod.call(this, ...arguments);
    }
});
obj.location.push(4);
obj.location.push(5);


