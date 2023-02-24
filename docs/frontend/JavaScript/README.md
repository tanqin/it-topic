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
