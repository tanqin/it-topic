# 普睿德利 - 前端面试

> 面试时间：2023-03-15

## 面试题

::: details 谈谈对 DOM 的理解
DOM 是文档对象模型。它以面向对象的方式描述对象模型，整个文档就是由一个个这样的对象以树形的结构组织在一起构建的。
:::

::: details 说说常用 HTML 标签
一般： h1~h6、div、span、p、a、img、video、table、ul、li。

语义化：header、nav、aside、main、article、section、footer。
:::

::: details table 标签下有哪些子标签
th、tr、td、caption、thead、tbody、tfoot
:::

::: details 谈谈对盒子模型的理解
所有 HTML 元素都可以看作一个盒子，它的组成包括：content、padding、border、margin。
:::

::: details select 标签如何设置默认选中项

```html
<select>
  <option value="1">第一</option>
  <option value="2" selected="selected">第二</option>
  <option value="3">第三</option>
</select>
```

方法二：通过 js 获取 option 元素设置 selected 属性值

```html
<script type="text/javascript">
  window.onload = function () {
    document.querySelector('select')[1].selected = true
  }
</script>
</head>
<body>
<select>
  <option value="1">第一</option>
  <option value="2">第二</option>
  <option value="3">第三</option>
</select>
</body>
```

:::

::: details 两个 html 页面如何共享全局变量
方式一：使用会话存储或本地存储：
使用 window.sessionStorage.setItem() 存储变量，使用 window.sessionStorage.getItem() 获取变量；
也可以使用 window.localStorage 的 setItem() 和 getItem() 存取变量

方式二：使用路径传参：
A页面跳转B页面时传递参数，如下

```js
function goBPage() {
  window.location.href = 'b.html' + `?globalVar=${window.globalVar}`
}
```

B页面接收参数，如下

```js
function getGlobalVar() {
  const globalVar = new URLSearchParams(window.location.search).get('globalVar')
}
```

:::

::: details JS 遍历的方式
数组方法：forEach、map、filter、find、findIndex、some、every、reduce

其它方法：for、for...in、for...of
:::

::: details  JS 如何创建一个类
使用 class 关键字来创建一个类，类中可以定义成员变量、成员方法、构造函数。例子：

```js
class ClassName {
  constructor() {
  }
}
```

:::

::: details JS 如何使用工厂函数创建对象

1. 定义一个工厂函数，定义形参，函数内部通过 new Object() 创建对象，并给对象赋值，最后返回创建的对象。例子如下：

```js
function createPerson(name, age) {
  const obj = new Object()
  obj.name = name
  obj.age = age
  obj.intro = function() {
    console.log(`我叫${this.name}，今年${this.age}岁。`)
  }
  return obj
}

const p1 = createPerson('Tom', 18)
p1.intro()

const p2 = createPerson('Andy', 19)
p2.intro()
```

:::

::: details 前端性能优化的方案有哪些
减少请求。比如使用精灵图、合并 css 和 js、资源缓存处理。

图片优化。比如图片压缩、图片懒加载。

CDN 加速。

代码压缩。比如 Gzip 压缩处理。
:::

## 笔试题

无
