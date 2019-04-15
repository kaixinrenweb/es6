// var声明 变量 （污染了全局）
// var声明的变量放到了window上，let声明的变量不是放在window上
var a = 1;
let aa = 2;
console.log(window.aa);

// 使用的var定义的变量有提升的问题（变量提升）
console.log(b);
var b = 4;
function fn(){}
let fn = function(){}

// var可以被重复的声明，let可以解决重复声明的问题
var a = 2;
var a = 3;

// 作用域的问题 （常见的作用域：全局作用域 函数作用域）
{
    let a  =1;
}
console.log(a);

//example  //暂存死区
let a = 100;
{
    console.log(a);
    let a = 300;
}

//example
for(var i=0; i<3; i++){
    ((i)=>{
        setTimeout(() => {
            console.log(i);
        }, 1000);
    })(i);
}

// const 定义常量  不会变的量 （地址不变）
const a = 2;
a = 3;
const PI = {r:3.14};
PI.r = 2.14; //可以

//使用let+const