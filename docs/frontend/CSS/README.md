# CSS

::: details CSS 盒模型
指所有 HTML 元素都可以看作一个盒子，它包括：margin、border、padding、content。
:::

::: BFC 的理解？如何触发 BFC？它的应用场景？
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

:::
