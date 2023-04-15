import{_ as a,p as e,q as t,a1 as r}from"./framework-199a3bb0.js";const i={},s=r('<h1 id="乐博士中国-前端面试" tabindex="-1"><a class="header-anchor" href="#乐博士中国-前端面试" aria-hidden="true">#</a> 乐博士中国 - 前端面试</h1><blockquote><p>面试时间：2023-04-07</p><p>公司全称：广东乐博士教育装备有限公司</p><p>公司位置：广州海珠区广东乐博士教育装备有限公司2栋4楼</p></blockquote><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><h6 id="什么是虚拟-dom-为什么要使用虚拟-dom" tabindex="-1"><a class="header-anchor" href="#什么是虚拟-dom-为什么要使用虚拟-dom" aria-hidden="true">#</a> 什么是虚拟 DOM？为什么要使用虚拟 DOM？</h6><details class="custom-container details"><summary>查看答案</summary><p>概念：虚拟DOM是一个 JS 对象，通过对象的方式描述 DOM 结构。</p><p>目的：1. 减少页面渲染次数，提升渲染性能；2. 实现跨平台。</p></details><hr><h6 id="简述下-react-的生命周期" tabindex="-1"><a class="header-anchor" href="#简述下-react-的生命周期" aria-hidden="true">#</a> 简述下 React 的生命周期？</h6><details class="custom-container details"><summary>查看答案</summary><p>组件挂载时：</p><ul><li>constructor()</li><li>static getDerivedStateFromProps()</li><li>render()</li><li>componentDidMount()</li></ul><p>组件更新时：</p><ul><li>static getDerivedStateFromProps()</li><li>shouldComponentUpdate()</li><li>render()</li><li>getSnapshotBeforeUpdate()</li><li>componentDidUpdate()</li></ul><p>组件卸载时：</p><ul><li>componentWillUnmount()</li></ul><p>错误处理：</p><ul><li>static getDerivedStateFromProps()</li><li>componentDidCatch()</li></ul><p><img src="https://s1.ax1x.com/2023/04/07/ppThzAf.png" alt="react 生命周期图"></p></details><hr><h2 id="笔试题" tabindex="-1"><a class="header-anchor" href="#笔试题" aria-hidden="true">#</a> 笔试题</h2><h6 id="如何定义一个变量" tabindex="-1"><a class="header-anchor" href="#如何定义一个变量" aria-hidden="true">#</a> 如何定义一个变量</h6><details class="custom-container details"><summary>查看答案</summary><p>第一种：const 变量名</p><p>第二种：let 变量名</p><p>第三种：var 变量名</p></details><hr><h6 id="谈谈对原型链的理解" tabindex="-1"><a class="header-anchor" href="#谈谈对原型链的理解" aria-hidden="true">#</a> 谈谈对原型链的理解</h6><details class="custom-container details"><summary>查看答案</summary><p>当访问对象的某个属性或者方法时，如果在对象自身上找不到，就会到对象的原型上查找，如果也找不到，就会到原型的原型上查找，一直找到顶层为止，就构成了一条链路，这就是原型链。</p></details><hr><h6 id="谈谈对闭包的理解" tabindex="-1"><a class="header-anchor" href="#谈谈对闭包的理解" aria-hidden="true">#</a> 谈谈对闭包的理解</h6><details class="custom-container details"><summary>查看答案</summary><p>函数内部访问函数外包的局部变量。</p></details><hr><h6 id="求数组中元素最小值和最大值" tabindex="-1"><a class="header-anchor" href="#求数组中元素最小值和最大值" aria-hidden="true">#</a> 求数组中元素最小值和最大值</h6><details class="custom-container details"><summary>查看答案</summary><p>方法一：<code>sort()</code> 排序，排序后第一个为最小值，最后一个为最大值。</p><p>方法二：假设第一个为最小值（或最大值），通过循环比较替换掉初始的假设值。</p><p>方法三：<code>Math.min()</code> 获取最小值，<code>Math.max()</code> 获取最大值。</p></details><hr><h6 id="js-继承的方式有哪些" tabindex="-1"><a class="header-anchor" href="#js-继承的方式有哪些" aria-hidden="true">#</a> JS 继承的方式有哪些</h6><details class="custom-container details"><summary>查看答案</summary><p>共有 6 种继承方式：原生链继承、构造函数继承、组合式继承、原型式继承、寄生式继承、寄生组合式继承。寄生组合式继承是这 6 种里面最优的继承方式，在 ES6 中也提供继承的关键字 extends 更方便的实现继承。</p></details><hr><h6 id="简述下-react-的事件代理机制" tabindex="-1"><a class="header-anchor" href="#简述下-react-的事件代理机制" aria-hidden="true">#</a> 简述下 React 的事件代理机制？</h6><details class="custom-container details"><summary>查看答案</summary><p>事件处理函数并不会绑定到真实的节点上，而是绑定到 <code>id=&quot;root&quot;</code> 的根节点中，通过一个事件监听器维护一个映射来保存所有组件内部的事件监听和处理函数。</p><p>当组件挂载或卸载时，只是在统一的事件监听器上插入或删除对象。</p><p>当事件发生时，首先会经过统一的事件监听器，然后在映射里找到真正的事件处理函数并执行。</p></details><hr>',28),d=[s];function c(l,o){return e(),t("div",null,d)}const n=a(i,[["render",c],["__file","LBSZG_2023-04-07.html.vue"]]);export{n as default};
