# React

###### 简述下 React 的事件代理机制？

::: details 查看答案
事件处理函数并不会绑定到真实的节点上，而是绑定到 `id="root"` 的根节点中，通过一个事件监听器维护一个映射来保存所有组件内部的事件监听和处理函数。

当组件挂载或卸载时，只是在统一的事件监听器上插入或删除对象。

当事件发生时，首先会经过统一的事件监听器，然后在映射里找到真正的事件处理函数并执行。
:::

###### React18新特性

::: details 查看答案
state 状态更新批处理

```tsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)
  console.log('render...')

  const handleClick = () => {
    setCount(count => {
      return count + 1
    })
    setFlag(!flag)
  }
  return (
    <>
      <h2>测试页</h2>
      <div className='data'>
        <div>count: {count}</div>
        <div>flag: {flag.toString()}</div>
      </div>
      <button onClick={handleClick}>按钮</button>
    </>
  )
}

export default App
```

上面例子中，count、flag 的 setState() 完全可以合并成一次完成，从而减少 re-render 带来的性能损耗。

之前 React 的批处理只囊括 React 原生事件内部的更新，而在 React18 中，批处理的范围扩大到 Promise、setTimeout、原生事件处理函数等非 React 原生的事件等。

```tsx
setTimeout(() => {
  setCount(count => count + 1)
  setFlag(flag => !flag)
}, 1000)
```

上面的延时器，如果在 react17 中由于没有批处理，会使得 re-render 频繁触发，导致 setState() 执行多次，count 的值也会指数级增长。react18 中则是正常的 1s 触发一次。

## Transitions

starTransition：用于标记非紧急的更新，用 starTransition 包裹起来就是告诉 React，这部分代码渲染的优先级不高，可以优先处理其它更重要的渲染。

例子：[倾斜的毕达哥拉斯树](https://react-fractals-git-react-18-swizec.vercel.app/)

useTransition：除了能提供 starTransition 以外，还能提供一个变量来跟踪当前渲染的执行状态。

## Suspense

:::

###### 说说你对 useReducer 的理解

::: details 查看答案
reducer 是一个根据 action 提供的数据，将 state 从 A 转换为 B 的一个纯函数。

语法：`(state, action) => newState`
:::

###### 说说你对 React Hook的闭包陷阱的理解，有哪些解决方案？

::: details 查看答案
由于闭包的存在，导致无法获取到 state 更新后的值。

一个简单的例子如下：

```tsx
function App() {
  const [count, setCount] = useState(1)
  useEffect(() => {
    setInterval(() => {
      console.log(count)
    }, 1000)
  }, [])
  function handleClick() {
    setCount(2)
  }

  return (
    <>
      <button onClick={handleClick}>按钮</button>
    </>
  )
}

```

由于闭包的存在，我们点击按钮修改了 count 的值为 2，但是定时器中打印的 count 却始终是 1。

解决方案：

方式一：使用 useRef() 绑定数据。由于 `ref = useRef()` 中数据是保存在 ref.current 中的，也就是数据存在对象属性中，所以可以保证定时器中获取到的一定是最新的数据。

方式二：我们可以参考方式一的原理，将 useState() 绑定的数据定义为一个对象，就可以保证 state 中的数据跟定时器中的数据指向的是同一内存地址。
:::

###### react是否支持给标签设置自定义的属性，比如给video标签设置webkit-playsinline？

::: details 查看答案
react15 之前是不可以的。
react16 以及之后版本可以设置，但是自定义的属性只能为 `string、number 或 object`。
所以可以这么添加：

```tsx
<video width="750" height="500" controls webkit-playsinline="true">
 <source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4"/>
</video>
```

还可以通过 setAttribute 进行设置：

```tsx
import * as React from 'react';
import { Component } from 'react';

export class VideoComponent extends Component {
  videoContainer: HTMLDivElement;
  componentDidMount() {
    const video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true; // fixes autoplay in chrome
    video.setAttribute('playsinline', 'true'); // fixes autoplay in webkit (ie. mobile safari)

    const source = document.createElement('source');
    source.src = 'https://media.w3.org/2010/05/sintel/trailer.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);

    this.videoContainer.appendChild(video);
  }
  render() {
    return (
      <div ref={(ref) => { this.videoContainer = ref; }} />
    );
  }
}
```

:::

###### 应该在什么场景下使用 useMemo 和 useCallback ？

::: details 查看答案
两者可以用于避免两次渲染之间的重复计算。
要进行缓存处理时使用。
在一个数据项依赖于其它数据项时，使用 useMemo 可以防止不必要的计算。
一个函数具有依赖项，且该函数在多个地方都有使用，使用 useCallback 可以避免非必要的渲染。
:::

###### 说说你对 dangerouslySetInnerHTML 的理解

::: details 查看答案
dangerouslySetInnerHTML 相当于 js 中 innerHTML 属性。
使用它是危险操作，存在跨站 XSS 攻击。
可以借助 DOMPurify 库的 sanitize() 方法来对代码进行净化。

```js
import DOMPurify from 'dompurify'

const App = () => {
  const data = `<span onmouseover="alert('mouseover');">mouseover</span>`
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data)
  })

  return <div dangerouslySetInnerHTML={sanitizedData()} />
}

export default App
```

:::

###### 你常用的 React Hooks 有哪些？

::: details 查看答案
useState
useRef
useEffect
useLayoutEffect
useMemo
useCallback
useContext
useReducer
:::
