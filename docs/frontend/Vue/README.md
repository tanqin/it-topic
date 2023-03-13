# Vue

::: details  第1题. 说说 Vue 中的 diff 算法
同层树节点之间进行比较的高效算法。
特点：在同层之间进行比较，不会跨层比较；比较过程中，循环从两边向中间比较。
应用：vue 中用于虚拟 dom 渲染为真实 dom 的新旧 VNode 节点比较。

:::

::: details  第2题. Vue 模板是如何编译的

1. 提取模板中的原生 HTML 和非 HTML，以及绑定的属性、事件、指令等
2. 经过处理生成 render() 函数
3. render() 函数再将模板内容生成对应的 VNode
4. 经过 patch 过程（diff）得到要渲染到视图的 VNode
5. 根据 VNode 创建真实 DOM，插入视图中完成渲染
:::

::: details 第3题：说说 Vue 中 CSS scoped 的原理
通过给选择器加上一个自定义属性的方式实现。如果我们观察浏览器控制台的元素栏，可以发现选择器后面都会跟着一个 [data-v-hash:8] 的实现，从而实现样式隔离。
:::

::: details 第4题：vue3中怎么设置全局变量？
方法一：可以使用 app.config.globalProperties.$xxx = xxx 进行设置。使用时利用 getCurrentInstance 获取 ctx 或 proxy 来获取全局变量。

方法二：可以使用 Provide/Inject

```js
const app = createApp(App)
 
// 配置全局变量 页面中使用 inject 接收
app.provide('global',{
  store,
  axios
})
 
app.mount('#app')
```

```vue
<script lang="ts" setup>
import { inject } from 'vue';
 
// 获取全局对象`
const global:any = inject('global')
 
/**目前标准异步写法 */
global.axios('/harmony/getType').then((result:any) => {
  if(result.success){
    list.value = result.data
  }
}).catch((err:any) => {
  console.log(err);
});
 
</script>
```

:::

::: details 第5题：刷新浏览器后，Vuex的数据是否存在？如何解决？
vuex 的数据是存在内存中的，刷新后会重新加载 vue 实例，所以数据不会存在。
解决方法：
方式一：借助 vuex-along 或 vuex-persistedstate 这两个库来完成数据持久化。它们的本质都是将数据存到了 localStorage 或 sessionStorage 中，只不过这个过程是它自动帮我们完成的。
方式二：自己在去调用 localStorage 或 sessionStorage 完成数据持久化操作。
:::

::: details 第6题：说下Vite的原理
vite 是直接将源码给到浏览器，实现 dev Serve 秒开，当浏览器显示页面需要相关模块时，向 dev Server 发送请求，dev Server 服务器简单处理后，将模块返回给浏览器，实现真正的按序加载。
而 webpack 需要将代码进行打包后，再将打包后的代码交给 dev Server，开发者才能开始开发。
:::

::: details 第7题：vue 中 $route 和 $router 有什么区别？
$router 是整个路由的实例，它含有所有的路由信息，路由守卫，push、replace、go、back、forward 等路由导航方法。
$route 是当前激活的路由对象，包含有当前路由的信息，如 fullPath、path、name、meta、query、params 参数等。
:::

::: details 第8题：说说 vue3 中的响应式设计原理
vue3 使用 Proxy 和 Reflect 实现响应式。Proxy 主要起到对象监听的作用，Reflect 用于读取、修改数据
而 vue2 使用 Object.defineProperty() 实现响应式。这种方式无法监听数组下标的变化，且只能劫持对象的属性，从而监听对象需要进行遍历。
:::

::: details 第9题：vue路由中，history和hash两种模式有什么区别？
显著区别是 hash 模式有个 # 号，history 模式没有。
hash 模式 # 号后面的路径变化不会向服务器发送请求。
history 模式路径变化会向服务器发送请求，所以会导致路由切换时由于服务器无法找到资源而报 404。解决办法是在后端 Nginx 的 location/ 中配置 try_files $uri $rui/ /index.html，从而保证了找不到资源时返回 index.html 页面，将页面的控制权又重新交给前端，也就可以实现路由切换了。
还有一种不那么友好的方式，因为我发现 Nginx 的 error_page 配置项中可以指定遇到 404 时指向一个 /404.html 页面。所以我们大可在前端页面 index.html 同级的位置添加一个 404.html 页面，并且在 Window.onload 事件中直接用 window.location.href = '/index.html'，也可以实现路由跳转。
:::

::: details 第10题：为什么 Vue 中的 v-if 和 v-for 不建议一起用？
v-for 优先级高于 v-if，v-if 是通过创建和销毁 dom 实现元素显隐的，就会导致循环过程中频繁创建和销毁 dom，使页面卡顿，性能下降。
:::

::: details 第11题：说说你对Vue中 keep-alive 的理解
keep-alive 能在组件切换时将状态留在内存中不被销毁，防止重复渲染 DOM。
:::

::: details 第12题：VNode 渲染原理
VNode 渲染依靠的 render() 函数，最终得到的是一个 dom 的描述对象，这个对象包含有元素属性、子节点、key 值等重要信息，可以通过这个描述对象创建真实 dom。
:::

::: details 第13题：父子组件如何传值？
父传子：父组件通过在子组件上添加属性的方式传递数据，子组件通过 props 属性接收。
子传父：子组件通过 `this.$emit('eventName', data)` 回传事件的方式传递数据，父组件通过 `@eventName='func'` 绑定事件函数接收。
:::

::: details 第14题：v-model 的实现原理
:value 绑定响应式数据，@input 触发事件获取当前 $event.target.value，再赋值给 :value 绑定的变量。
:::

::: details 第15题：组件封装过程
将公共常用的部分提取出去。通过 props 接收父组件传递的数据，通过 this.$emit() 传递事件的方式将数据传递给父组件。
:::

::: details 第16题：谈谈你对渐进式的理解？
学习时可以从某个很小的部分入手，循序渐进，在后续通过增量学习的方式扩充所需的项目功能。
:::

::: details 第17题：Vue的优势
渐进式：易上手，开发者可以从简单的组件开始，逐渐去搭建复杂的系统。

轻量级：框架体积小。

组件化：组件化开发，提高开发效率。

MVVM 数据双向绑定：模型、视图同步更新，减少 dom 操作。

高性能：虚拟 dom + diff 算法。

插件化：插件生态丰富。
:::

::: details 单页面与多页面应用的区别
单页面：应用只有一个 HTML 作为入口，一开始只需要加载一次 JS、CSS 等资源。页面的切换都是由路由去完成组件的切换，仅刷新局部资源。但无法实现 SEO 且首屏加载相对较慢。

多页面：包含多个独立页面的应用，访问每一个页面都必须重新加载 JS、CSS　等资源。页面跳转需要整个页面刷新，用户体验不友好。由于返回完整的页面内容，利于 SEO。
:::

::: details v-on 是否可以绑定多个事件？
可以通过对象形式绑定多个事件。

1. v-on 绑定多个方法（采用对象形式）

```js
<button v-on="{click: clickMethods, mousemove: mouseMethods}">按钮<button>
```

2. v-on 一个事件绑定多个方法（语法糖 @）
<button @click="click1,click2">按钮</button>
:::

::: details computed 与 watch 的区别
computed 计算属性基于 data 中声明过或 props 传递过来的数据通过计算得到一个新值，新值会根据已知值得变化而变化，且 computed 具有缓存功能，多次使用同一个 computed 计算得属性值，只会执行一次 computed 内定义的 function，直到依赖项改变才会重新计算。

watch 监听属性可以用来监听 data、props、computed 内的数据变化，然后执行某些具体的业务操作，当属性变化时，监听的的回调函数会自动执行。

对于多个监听对象要进行同一操作，watch 需要监听多次，而 computed 只需要执行一次。
在执行异步或开销比较大的操作时，watch 方式更合适。
:::

::: details v-if 与 v-show 的区别和应用场景。
v-if：通过创建、销毁 dom 的方式控制元素的显隐。

v-show: 通过添加、删除 CSS 属性 `display: none` 的方式控制元素的显隐。

v-if 适用于运行条件很少改变的场景；v-show 适用于频繁切换显隐的场景。
:::

::: details Vue 的 data 为什么是个函数而不是一个对象
data 为一个函数是为了防止多个组件实例对象之间共用一个 data，产生数据污染。
:::

::: details delete 与 Vue.delete 删除数组的区别
delete：只是将被删除的元素变成 empty/undefined，数组长度不变。

Vue.delete：删除数组元素，数组长度会减少。

```js
const arr1 = [1, 2, 3, 4]
delete arr1[1]
console.log(arr1) // [1, empty, 3, 4]

const arr2 = [1, 2, 3, 4]
this.$delete(arr2, 1)
console.log(arr2) // [1, 3, 4]
```

:::

::: details 监听对象的某个属性变化的方式有哪些
共 3 种方式。

方式一：watch + deep 深度监听

方式二：computed + watch

方式三：watch 直接使用对象的某个属性
:::

::: details 谈谈对 MVVM 的理解
MVVM 是一种架构模式，它的核心思想是把每个页面分为了 Model、View、ViewModel 三部分。其中 Model 表示数据模型，View 表示 UI 组件，ViewModel 用于实现 View 和 Model 的双向数据绑定。
:::
