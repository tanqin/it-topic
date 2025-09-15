import{_ as i,p as a,q as s,a1 as l}from"./framework-596b4733.js";const n={};function d(r,e){return a(),s("div",null,[...e[0]||(e[0]=[l(`<h1 id="宝露公司-前端面试" tabindex="-1"><a class="header-anchor" href="#宝露公司-前端面试" aria-hidden="true">#</a> 宝露公司 - 前端面试</h1><blockquote><p>面试时间：2023-03-07</p><p>公司全称：广州宝露智能科技有限公司</p><p>公司位置：广州天河区领汇创展商务中心D9栋6楼</p></blockquote><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><h6 id="call-、apply-、bind-的区别" tabindex="-1"><a class="header-anchor" href="#call-、apply-、bind-的区别" aria-hidden="true">#</a> call()、apply()、bind() 的区别</h6><details class="custom-container details"><summary>查看答案</summary><ol><li>执行方式不同：</li></ol><p>call 和 apply 是改变后页面加载之后立即执行，是同步代码；bind 是改变后不会立即执行，而是返回一个新函数，是异步代码。</p><ol start="2"><li>传参方式不同：</li></ol><p>call 和 bind 传参是逐个传入；apply 可以使用数组的方式传参。</p><ol start="3"><li>修改 this 的性质不同：</li></ol><p>call、apply 只是临时修改一次，当再次调用原函数时，它的 this 指向还是原来的指向。</p></details><hr><h6 id="前端数据埋点的方式" tabindex="-1"><a class="header-anchor" href="#前端数据埋点的方式" aria-hidden="true">#</a> 前端数据埋点的方式</h6><details class="custom-container details"><summary>查看答案</summary><ol><li><p>代码埋点。在程序中写代码逻辑，通过触发某个动作后程序自动上报数据。</p></li><li><p>无埋点。绑定页面控件，当事件触发时就会调用相关的接口上报数据。</p></li><li><p>可视化埋点。圈选需要埋点的页面元素，进行埋点配置，采集 SDK 根据配置自动进行用户行为上报数据。</p></li></ol></details><hr><h6 id="vue、react-的缺点" tabindex="-1"><a class="header-anchor" href="#vue、react-的缺点" aria-hidden="true">#</a> Vue、React 的缺点</h6><details class="custom-container details"><summary>查看答案</summary><p>Vue 缺点：</p><p>React 缺点：</p></details><hr><h6 id="微前端的缺点" tabindex="-1"><a class="header-anchor" href="#微前端的缺点" aria-hidden="true">#</a> 微前端的缺点</h6><details class="custom-container details"><summary>查看答案</summary><ol><li><p>异步加载，存在跳转不流畅的问题。</p></li><li><p>不同应用之间存在重复的依赖包。</p></li><li><p>拆分粒度越小，便意味着架构变得复杂、维护成本变高。</p></li><li><p>技术栈一旦多样化，便可能造成技术栈混乱。</p></li></ol></details><hr><h6 id="axios-的原理-项目中为什么要进行-axios-二次封装" tabindex="-1"><a class="header-anchor" href="#axios-的原理-项目中为什么要进行-axios-二次封装" aria-hidden="true">#</a> axios 的原理？项目中为什么要进行 axios 二次封装？</h6><details class="custom-container details"><summary>查看答案</summary><p>原理：axios 本质是对 XMLHttpRequest 的封装，通过 Promise 来对结果进行处理。</p><p>为何二次封装：主要为了使用请求拦截器和响应拦截器做特殊处理。如使用请求拦截器进行统一参数设置，响应拦截器进行状态码判断、token 过期处理、数据层级处理等。</p></details><hr><h6 id="watch-的底层原理" tabindex="-1"><a class="header-anchor" href="#watch-的底层原理" aria-hidden="true">#</a> watch 的底层原理</h6><details class="custom-container details"><summary>查看答案</summary></details><hr><h6 id="提供数组去重的-3-种方式" tabindex="-1"><a class="header-anchor" href="#提供数组去重的-3-种方式" aria-hidden="true">#</a> 提供数组去重的 3 种方式</h6><details class="custom-container details"><summary>查看答案</summary><ol><li><p>双重遍历 + <code>splice()</code> 去重</p></li><li><p><code>filter()</code> + <code>indexOf()</code> 去重</p></li><li><p><code>reduce()</code> + <code>includes()</code> 去重</p></li><li><p><code>new Set()</code> 去重</p></li></ol></details><hr><h6 id="提供深拷贝的-3-种方式" tabindex="-1"><a class="header-anchor" href="#提供深拷贝的-3-种方式" aria-hidden="true">#</a> 提供深拷贝的 3 种方式</h6><details class="custom-container details"><summary>查看答案</summary><ol><li><p><code>JSON.parse(JSON.stringify())</code>。</p></li><li><p><code>lodash</code> 库的 <code>cloneDeep(ojb)</code> 方法。</p></li><li><p><code>jquery</code> 的 <code>extend()</code> 方法。</p></li><li><p>递归实现。</p></li></ol></details><hr><h6 id="webpack-如何优化前端项目" tabindex="-1"><a class="header-anchor" href="#webpack-如何优化前端项目" aria-hidden="true">#</a> webpack 如何优化前端项目</h6><details class="custom-container details"><summary>查看答案</summary><ol><li><p>HTML、CSS、JS 代码压缩</p></li><li><p>文件、图片压缩</p></li><li><p>代码拆分</p></li><li><p>内联 chunk</p></li></ol></details><hr><h6 id="nginx-如何配置-https" tabindex="-1"><a class="header-anchor" href="#nginx-如何配置-https" aria-hidden="true">#</a> NGINX 如何配置 https</h6><details class="custom-container details"><summary>查看答案</summary><ol><li>在 <code>nginx/conf/nginx.conf</code> 文件中的 server 中添加以下配置：</li></ol><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    listen       8186 ssl;  
    server_name  www.xxx.com;    # 域名
    ssl_certificate www.xxx.crt;    # 证书名称（证书放在nginx.config同级目录下，否则要填写路径）
    ssl_certificate_key www.xxx.key;    # 证书秘钥（证书放在nginx.config同级目录下，否则要填写路径）
    ssl_session_cache    shared:SSL:1m;    # 开启缓存 大小1M
    ssl_session_timeout  5m;    # 指定客户端可以重用会话参数的时间（超时之后不可使用）
    ssl_ciphers  HIGH:!aNULL:!MD5;    # 选择加密套件
    ssl_prefer_server_ciphers  on;     # 设置协商加密算法时，优先使用我们服务端的加密套件，而不是客户端浏览器的加密套件   

    location / {
        root   /home/xx/vue/;    # 页面路径
            index  index.html index.htm;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置只允许域名访问，IP 访问 403 提示</li></ol><p>在所有 server 前新建 server ，ssl 需要把证书也加上，否则域名访问也会 403</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
        listen       8186 ssl;
        server_name  _;
        return 403;
        ssl_certificate www.xxxx.crt;
        ssl_certificate_key www.xxxx.key;
        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;
        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>检查配置并重启 NGINX</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查配置</span>
nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 重启</span>
nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><hr><h2 id="笔试题" tabindex="-1"><a class="header-anchor" href="#笔试题" aria-hidden="true">#</a> 笔试题</h2><h6 id="算法-求数组的子数组之和的最大值" tabindex="-1"><a class="header-anchor" href="#算法-求数组的子数组之和的最大值" aria-hidden="true">#</a> 算法-求数组的子数组之和的最大值</h6><p>举几个例子：</p><p>数组：[1, -2, 3, 5, -3, 2]应返回：8</p><p>数组：[0, -2, 3, 5, -1, 2]应返回：9</p><p>数组：[-9, -2, -3, -5, -3]应返回：-2，这也是最大子数组的和。</p><details class="custom-container details"><summary>查看答案</summary></details>`,40)])])}const t=i(n,[["render",d],["__file","2023-03-07_BLGS.html.vue"]]);export{t as default};
