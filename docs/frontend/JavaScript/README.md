# JavaSCript

::: details js 如何移除事件监听

```js
function printScrollHeight() {
    console.log(window.pageYOffset)
}

document.addEventListener('scroll', printScrollHeight)

// 移除事件监听。注意：必须保证移除的事件函数与绑定的事件函数是同一个
document.removeEventListener('scroll', printScrollHeight)
```

:::

::: details 谈谈你对事件冒泡和捕获的理解？如何阻止事件冒泡？事件冒泡应用场景？
事件冒泡：事件自下而上从目标元素一直向上传递到 document 的过程。

事件捕获：事件自上而下从 document 一直向下传递到目标元素的过程。

阻止事件冒泡：event.stopPropagation()。

事件冒泡使应用场景：将子元素中多个相同的事件操作由父元素集中处理，例如：列表中多个元素都包含点击删除方法，可以利用事件冒泡机制，将删除方法绑定在外层的父元素上统一处理。
:::

:::details 如何阻止默认事件
比如点击一个 a 标签，会进行跳转，可以使用 event.preventDefault() 方法阻止默认事件。
:::
