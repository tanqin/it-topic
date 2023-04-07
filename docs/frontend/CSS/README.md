# CSS

###### CSS 盒模型

::: details 查看答案
所有 HTML 元素都可以看作一个盒子，它的组成包括：content、padding、border、margin。
:::

---

###### BFC 的理解？如何触发 BFC？它的应用场景？

::: details 查看答案
BFC 用于提供一个隔离的独立容器，容器内部的元素不会影响到外部元素。

触发条件：1. 根元素（html）2. 浮动元素（float 值不为 none） 3. 绝对定位或固定定位元素 4. display 为 inline-block、table、flex 等 5. overflow 不为 visible 的块元素

应用场景：

1. 避免外边距重叠

如下例子中，通过给 .container 容器添加 overflow: hidden 属性触发 .container 容器的 BFC，从而解决两个 .cube 之间外边距重叠问题：

```html
<div class="container">
  <div class="cube"></div>
</div>
<div class="container">
  <div class="cube"></div>
</div>

<style>
.container {
  overflow: hidden;
}
.cube {
  width: 100px;
  height: 100px;
  background: blue;
  margin: 100px;
}
</style>
```

2. 清除浮动

如下例子，为了达到红色边框包裹蓝色方块的目的，可以给 .container 添加 overflow: hidden 触发 .container 的 BFC　实现清除浮动的作用：

```html
<div class="container">
  <div class="cube"></div>
</div>

<style>
.container {
  border: 1px solid red;
  overflow: hidden;
}
.cube {
  width: 100px;
  height: 100px;
  background: blue;
  margin: 100px;
  float: left;
}
</style>
```

3. 阻止元素被浮动元素覆盖

如下例子，可以给 .normalDiv 添加 overflow: hidden 属性解决浮动元素覆盖正常元素的问题：

```html
<div class="floatDiv"></div>
<div class="normalDiv"></div>

<style>
.floatDiv {
  width: 100px;
  height: 100px;
  background-color: blue;
  float: left;
}
.normalDiv {
  width: 200px;
  height: 200px;
  background-color: red;
  overflow: hidden;
}
</style>
```

:::

---

###### 什么是浮动元素脱标？

::: details 查看答案
脱标：脱离标准流

当一个元素浮动之后看上去就像是从标准流中删除了一样，这就是浮动元素脱标。
:::

---

###### CSS 继承的概念？拥有继承特性的属性有哪些？

::: details 查看答案
概念：给父元素设置一些属性，后代元素自动拥有这些属性。

拥有继承特性的属性：

字体属性：font 系列（font-style、font-size、font-family 等）

文本属性：color、line-height、text-align、text-indent

可见性属性：visibility

列表属性：list-style 系列（list-style-type、list-style-position、list-style-image）

注：继承中特殊的 `a` 标签颜色不会继承，`h1~h6` 标签字体大小不会继承。
:::

---

###### CSS 选择器的种类

::: details 查看答案
参考：[CSS选择器 （超全）](https://blog.csdn.net/weixin_54044338/article/details/123343408)

分为五大类：元素选择器、关系选择器、属性选择器、伪类选择器、伪元素选择器

一、元素选择器：

1. 通配符选择器：`* {}`

选中页面中的所有元素（会影响浏览器的性能）

2. 标签选择器：`标签名 {}`

3. id选择器：`#id {}`

4. 类选择器：`class {}`

5. 并集选择器：`选择器1, 选择器2, 选择器3, ..., 选择器n {}`

几个选择器选中的元素共用一套样式

6. 交集选择器：`选择器1.选择器2 {}`

二、关系选择器：

1. 子代选择器：`父级 > 子级 {}`

2. 后代选择器（空格隔开）：`祖先元素 后代元素 {}`

3. 相邻选择器：`.pre + .next`

选择紧接在 .pre 元素之后的 .next 元素，并且二者具有相同的父级元素。

4. 兄弟选择器：`.pre ~ .next`

选择 .pre 元素后面所有的 .next 元素。

三、属性选择器：

1. [name] 具有 name 属性的元素

2. [attr='val'] 具有 attr 属性，且属性值完全等于 val 的元素

3. [attr^='val'] 具有 attr 属性，且属性值以 val 开头。可以匹配 attr='val'、attr='value'

4. [attr$='val'] 具有 attr 属性，且属性值以 val 结尾。可以匹配 attr='val'、attr='a val'、attr='a-val'

5. [attr*='val'] 具有 attr 属性，且属性值包含 val。可以匹配 attr='val'、attr='a val'、attr='a-val'、attr='value'

6. [attr~='val'] 具有 attr 属性，且属性值包含 val（val 必须单独存在，不能是某个词中的一部分）。可以匹配 attr='val'、attr='a val'，但不能匹配 attr='a-val'、attr='value'

7. [attr|='val'] 具有 attr 属性，且属性值完全等于 val，或者以 val 开头用 - 连接的词。可以匹配 attr='val'、attr='val-all'，但不能匹配 attr='value'、attr='val all'

四、伪类选择器：

1. :root 只选中 HTML 元素

2. :focus 元素获取焦点时得样式

3. :not(选择器) 选择不含有某个选择器得元素

4. :first-child 选中第一个子元素

5. :first-of-type 选中第一个指定的元素

:first-child 与 :first-of-type 的区别：`p:first-child` 选中 p 标签中第一个子元素，`p:first-of-type` 选中第一个 p 元素。  

6. :last-child 选中最后一个子元素

7. :last-of-type 选中最后一个指定的元素

8. :nth-child(n) 选中第 n 个子元素

9. :nth-of-type(n) 选中第 n 个指定的元素
  
- :nth-child() 和 :nth-of-type() 可以选择奇数、偶数元素
- odd 选中奇数位置的元素
- even 选中偶数位置的元素
- 2n-1 选中奇数位置的元素
- 2n 选中偶数位置的元素

10. :only-child() 选中父元素中的子元素，且父元素中必须有且只有一个子元素

11. :only-of-type() 选中父元素中的某个元素，且父元素中必须有且只有一个该元素

12. :empty 选中没有任何子元素（元素内不能有任何内容）的空元素

13. :checked 选中页面中被选中的单选框或复选框

14. disabled 选中页面中处于禁用状态的元素

15. :enabled 选中页面中处于可用状态的元素

16. :target 选中被激活的锚点

五、伪元素选择器

1. :first-letter 给元素的第一个字母添加样式

2. :first-line 给元素第一行添加样式

3. :before 在内容的前面插入伪元素。必须要与 content 一起使用，ontent 的值可以为空

4. :after 在内容的后面插入伪元素。必须要与 content 一起使用，content 的值可以为空

:::

---
