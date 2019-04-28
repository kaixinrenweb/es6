## ES6
- `let & const`
- `var`声明 变量 （污染了全局）
- 使用的`var`定义的变量有提升的问题（变量提升）
- `var`可以被重复的声明，`let`可以解决重复声明的问题
- 作用域的问题 （常见的作用域：全局作用域 函数作用域）
- `tips: let` 可能会造成暂存死区
- `const` 定义常量  不会变的量 （地址不变）

## 展开运算符
- ...
- 浅拷贝 一层的复制,不能做到深层的拷贝
- 深拷贝 递归的拷贝 一层层的拷贝实现

## set / map
- 两种存储结构
- set 集合 没有顺序的 不能重复的
- map 有key, 不能放重复的

## Object.defineProperty
- vue2.x 使用的作为数据劫持
- 应用场景 vue数据劫持