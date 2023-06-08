"use strict";  // 开启严格模式
/*
    声明一个变量会返回一个栈区的地址。如果是引用类型，信息则会存储在堆区，然后在栈区存储个堆区的地址，再将栈区的地址返回。
    变量存储的地址可以改变，常量存储的地址不可改变
    代码区无法直接访问堆区。堆区存储的是程序在运行期间动态分配的内存，而代码区存储的是程序执行的代码。
    由于堆区与代码区的地址空间不同，因此代码区不能直接访问堆区。要访问堆区中的数据，需要通过指针来获取其地址并操作数据。
    同时，为了确保程序的运行安全性，还需要注意内存泄漏和越界访问等问题。
*/
let a = []
let b = a
a = []
// console.log(a === b)
// console.log([] === [])

// 非严格模式下，num 会被声明。严格模式下则会报错：num is not defined
// num = 5
// console.log(num)

/* 
// 运行前已知，用全大写。运行前未知，用驼峰。
// hardcode，就是把一个本来应该（可以）写到配置信息中的信息直接在程序代码中写死了
 */
// const COLOR_RED = "red"
// const pageTime = new Date()
// console.log("运行前未知，且不会改变:", pageTime)
// console.log("运行前已知，且不会改变(硬编码):", COLOR_RED)

/** BigInt
 1. 在 JavaScript 中，number 类型无法安全地表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。
 2. 更准确的说，number 类型可以存储更大的整数（最多 1.7976931348623157 * 10308），
    但超出安全整数范围 ±(253-1) 会出现精度问题，因为并非所有数字都适合固定的 64 位存储。因此，可能存储的是近似值。
 3. 更准确的说，number 类型可以存储更大的整数（最多 1.7976931348623157 * 10308），但超出安全整数范围 ±(253-1) 会出现精度问题，
    因为并非所有数字都适合固定的 64 位存储。因此，可能存储的是近似值。
 4. BigInt 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。可以通过将 n 附加到整数字段的末尾来创建 BigInt 值。
 */
// let bigInt = 9007199254740991123n
// console.log("🚀 ~ BigInt:", bigInt)

console.log(undefined == undefined)
console.log(undefined === undefined)
console.log(null == null)
console.log(null === null)
console.log(isNaN(NaN))


function pow() {
  return 8; 
}

let pl = "";
let c = pl || 1
console.log(Boolean(c))

let user = {};
user["name"] = "John"
user.surname = "Smith"
user.name = "Pate"
delete user.name

function isEmpty(obj){
   let bool = true;
   for(let key in obj){
      bool = false;
   }
   return bool;
}

let menu = {
   width: 200,
   height: 300,
   title: "My menu"
}

function sum(obj){
   let num = 0;
   for(let key in obj){
      num += obj[key]
   }
   return num;
}
let s = sum(menu)

function mult(obj){
   for(let key in obj){
      obj[key] *= obj[key]
   }
}
mult(menu)

let objA = {
   name:"zs",
   age:18
}

let objB = {};
Object.assign(objB,{...objA})
objA.name = "ls"
console.log(objB)

let userA = {
   name:"zs",
   age:"18",
   sizes:{
      width:70,
      height:80
   }
}

let userB = Object.assign({},userA)
console.log(userA === userB)
console.log(userA.sizes === userB.sizes)

let userC = JSON.parse(JSON.stringify(userA))
console.log(userA === userC)
console.log(userA.sizes === userC.sizes)


// 垃圾回收
/*
   可达性（Reachability）
      JavaScript 中主要的内存管理概念是 可达性。

      简而言之，“可达”值是那些以某种方式可访问或可用的值。它们一定是存储在内存中的。

      这里列出固有的可达值的基本集合，这些值明显不能被释放。

      比方说：

         当前执行的函数，它的局部变量和参数。
         当前嵌套调用链上的其他函数、它们的局部变量和参数。
         全局变量。
         （还有一些内部的）
         这些值被称作 根（roots）。

         如果一个值可以通过引用链从根访问任何其他值，则认为该值是可达的。
   内部算法:
      垃圾回收的基本算法被称为 “mark-and-sweep”。
      定期执行以下“垃圾回收”步骤：
         垃圾收集器找到所有的根，并“标记”（记住）它们。
         然后它遍历并“标记”来自它们的所有引用。
         然后它遍历标记的对象并标记它们的引用。所有被遍历到的对象都会被记住，以免将来再次遍历到同一个对象。
         ……如此操作，直到所有可达的（从根部）引用都被访问到。
         没有被标记的对象都会被删除。
      我们还可以将这个过程想象成从根溢出一大桶油漆，它流经所有引用并标记所有可到达的对象。然后移除未标记的。
      这是垃圾收集工作的概念。JavaScript 引擎做了许多优化，使垃圾回收运行速度更快，并且不会对代码执行引入任何延迟。

*/

console.log(Boolean([]) == Boolean(null))
console.log(0 == null)
console.log("123" === 123)
console.log(["1"] == ["1"],"67887")