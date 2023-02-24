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
