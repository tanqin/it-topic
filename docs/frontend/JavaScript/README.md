# JavaSCript

###### js 如何移除事件监听

::: details 查看答案

```js
function printScrollHeight() {
    console.log(window.pageYOffset)
}

document.addEventListener('scroll', printScrollHeight)

// 移除事件监听。注意：必须保证移除的事件函数与绑定的事件函数是同一个
document.removeEventListener('scroll', printScrollHeight)
```

:::

###### 谈谈你对事件冒泡和捕获的理解？如何阻止事件冒泡？事件冒泡应用场景？

::: details 查看答案
事件冒泡：事件自下而上从目标元素一直向上传递到 document 的过程。

事件捕获：事件自上而下从 document 一直向下传递到目标元素的过程。

阻止事件冒泡：event.stopPropagation()。

事件冒泡使应用场景：将子元素中多个相同的事件操作由父元素集中处理，例如：列表中多个元素都包含点击删除方法，可以利用事件冒泡机制，将删除方法绑定在外层的父元素上统一处理。
:::

###### 如何阻止默认事件

::: details 查看答案
比如点击一个 a 标签，会进行跳转，可以使用 event.preventDefault() 方法阻止默认事件。
:::

###### 防抖与节流的理解？各自的应用场景？

::: details 查看答案
防抖：在一次操作过程中，如果有新的操作则重新刷新定时器。应用：输入框输入后延迟自动搜索。

节流：前一次操作未完成时无法开启下一次操作。应用：下拉刷新和上拉加载更多。
:::

###### 浅拷贝与深拷贝的理解

::: details 查看答案
浅拷贝：拷贝对象的引用，对于复杂数据类型而言拷贝后的数据更改会影响原数据。

深拷贝：创建一块新的内存空间用于存储拷贝后的数据，拷贝数据与原数据由于地址不同，所以互不影响。
:::

###### this 指向的几种情况

::: details 查看答案
全局环境中定义的函数，this 指向 window。

new 关键字创建的实例对象，this 指向这个实例对象。

如果使用 apply()、call()、bind() 进行借调操作，this 指向这些方法第一个参数所绑定的对象。

箭头函数由于没有 this，它内部的 this 指向外层函数的 this，如果外层函数也没有 this，逐层向上找，直到 window 对象为止。
:::

###### JS 继承方式有哪些

::: details 查看答案

参考：<https://blog.csdn.net/weixin_41759744/article/details/125299029>

共有 6 种继承方式：原生链继承、构造函数继承、组合式继承、原型式继承、寄生式继承、寄生组合式继承。寄生组合式继承是这 6 种里面最优的继承方式，在 ES6 中也提供继承的关键字 extends 更方便的实现继承。

1. 原型链继承
核心：将父类实例作为子类的原型

```js
function Parent() {
    this.name = 'parent'
    this.play = [1, 2, 3]
  }

  function Child() {
    this.type = 'child'
  }

  Child.prototype = new Parent()
  console.log(new Child())
```

2. 构造函数继承（借助 call）
核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类。

```js
  function Parent(){
    this.name = 'parent'
    this.fn = function() {
        console.log('Hello')
    }
  }
 
  function Child(){
    Parent.call(this)
    this.type = 'child'
  }

  console.log(new Child())
```

3. 组合继承（前两种组合）
核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用。

```js
function Parent () {
    this.name = 'parent'
    this.play = [1, 2, 3]
  }
 
  Parent.prototype.getName = function () {
    return this.name
  }

  function Child() {
    Parent.call(this)
    this.type = 'child'
  }
 
  Child.prototype = new Parent()
  // 手动挂上构造器，指向自己的构造函数
  Child.prototype.constructor = Child
  const s3 = new Child()
  const s4 = new Child()
  s3.play.push(4)
  console.log(s3.play, s4.play)  // 不互相影响
  console.log(s3.getName()) // 正常输出'parent'
  console.log(s4.getName()) // 正常输出'parent'
```

4. 原型式继承
ES5 里面的 Object.create 方法，这个方法接收两个参数：第一个参数用作新对象原型的对象，第二个参数是为新对象定义额外属性的对象（可选参数）

```js
let parent = {
    name: "parent",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name
    }
  }
 
  let person1 = Object.create(parent)
  person1.name = "tom"
  person1.friends.push("jerry")
  let person2 = Object.create(parent)
  person2.friends.push("lucy")
 
  console.log(person1.name) // tom
  console.log(person1.name === person1.getName()) // true
  console.log(person2.name) // parent
  console.log(person1.friends) // ['p1', 'p2', 'p3', 'jerry', 'lucy']
  console.log(person2.friends) // ['p1', 'p2', 'p3', 'jerry', 'lucy']
```

5. 寄生式继承
使用原型式继承可以获得一份目标对象的浅拷贝，然后利用这个浅拷贝的能力再进行增强，添加一些方法，这样的继承方式就叫做寄生式继承。

虽然其优缺点和原型式继承一样，但是对于普通对象的继承方式来说，寄生式继承相比于原型式继承，还是在父类基础上添加了更多的方法。

```js
   let parent = {
    name: "parent",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name
    }
  }
 
  function clone(original) {
    let clone = Object.create(original)
    clone.getFriends = function() {
      return this.friends
    }
    return clone
  }
 
  let person = clone(parent)
  console.log(person.getName()) // parent
  console.log(person.getFriends()) //  ['p1', 'p2', 'p3']
```

6. 寄生组合式继承
结合第四种中提及的继承方式，解决普通对象的继承问题的 Object.create 方法，我们在前面这几种继承方式的优缺点基础上进行改造，得出了寄生组合式的继承方式，这也是所有继承方式里面相对最优的继承方式。

```js
function clone (parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
  }
 
  function Parent() {
    this.name = 'parent'
    this.play = [1, 2, 3]
  }
   Parent.prototype.getName = function () {
    return this.name
  }
  function Child() {
    Parent.call(this)
    this.friends = 'child'
  }
 
  clone(Parent, Child)
 
  Child.prototype.getFriends = function () {
    return this.friends
  }
 
  let person = new Child()
  console.log(person)  // child {name: "parent",play: [1, 2, 3], friends: "child"}
  console.log(person.getName()) // parent
  console.log(person.getFriends()) // child
```

总体看下来，这六种继承方式中，寄生组合式继承是这六种里面最优的继承方式

ES6 提供了继承的关键字 extends

```js
class Person {
  constructor(name) {
    this.name = name
  }
  // 原型方法
  // 即 Person.prototype.getName = function() { }
  // 下面可以简写为 getName() {...}
  getName = function () {
    console.log('Person:', this.name)
  }
}
 
class Child extends Person {
  constructor(name, age) {
    // 子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
    super(name)
    this.age = age
  }
}
 
const person = new Child('Tom', 20)
person.getName() // 成功访问到父类的方法
```

:::

###### 数组迭代器种类

::: details 查看答案
共有 6 种迭代器。forEach、map、filter、every、some、reduce。
:::

###### 正则表达式的标记有哪些

::: details 查看答案
共有 3 个。/g、/i、/m

/g （global）全局匹配

/i （ignoreCase）匹配时不区分大小写

/m （multiple）多行匹配。m 会影响 ^、$。若不指定 m，则 ^ 只在字符串的最开头，$ 只在字符串的最结尾。即匹配整个串的开始和结束；若指定 m，则 ^ 在字符串每一行的开头，$ 在字符串每一行的结尾。即匹配每一行的开始和结束
:::

###### 声明式与命令式的区别

::: details 查看答案
声明式：关注过程。

命令式：关注结果。

举一个数组求和的例子：

```js
const arr = [1, 2, 3, 4, 5]

// 声明式编程
let sum1 = 0
for(let i = 0; i < arr.length; i++) {
  sum1 += arr[i]
}
console.log('sum1 =>', sum1)

// 命令式编程
const sum2 = arr.reduce((memo, current) => memo + current, 0)
console.log('sum2 =>',sum2)
```

:::

###### JS 中有哪几种数据类型

::: details 查看答案
共有 9 种数据类型。分别为 number、string、boolean、symbol、null、undefined、object、array、function
:::
