import{_ as p,M as i,p as c,q as l,a1 as a,R as s,t as e,N as o}from"./framework-596b4733.js";const u={},r={class:"custom-container details"},d={href:"https://www.cnblogs.com/SunArmy/p/9837348.html",target:"_blank",rel:"noopener noreferrer"};function m(k,n){const t=i("ExternalLinkIcon");return c(),l("div",null,[n[4]||(n[4]=a(`<h1 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h1><h6 id="什么是-jdbc-为什么需要-jdbc" tabindex="-1"><a class="header-anchor" href="#什么是-jdbc-为什么需要-jdbc" aria-hidden="true">#</a> 什么是 JDBC？为什么需要 JDBC？</h6><details class="custom-container details"><summary>查看答案</summary><p>JDBC(Java Database Connectivity) Java 数据库连接。 它是一个接口，由对应的数据库厂商完成接口实现类，该实现类就是所说的驱动。 由于每个厂商底层代码实现不同，切换数据库需要改变 Java 代码，成本过大，所以需要 JDBC 进行调和，实现一套代码，操作不同的关系型数据库。 使用 mysql JDBC 驱动示例，涉及到了事务处理：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 加载驱动</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> preparedStatement1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> preparedStatement2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 通过驱动管理器获取连接对象</span>
            connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/storage_system&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 开启事务（关闭自动提交）</span>
            connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 定义 sql</span>
            <span class="token class-name">String</span> sql1 <span class="token operator">=</span> <span class="token string">&quot;update t_goods set name = ?, price = ? where id = ?&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> sql2 <span class="token operator">=</span> <span class="token string">&quot;update t_goods set name = ?, price = ? where id = ?&quot;</span><span class="token punctuation">;</span>

            <span class="token comment">// 通过连接对象获取预声明对象</span>
            preparedStatement1 <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement2 <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql2<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// sql 赋值</span>
            preparedStatement1<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;2 只松鼠&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement1<span class="token punctuation">.</span><span class="token function">setBigDecimal</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">22.22</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement1<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement2<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;3 只松鼠&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement2<span class="token punctuation">.</span><span class="token function">setBigDecimal</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">33.33</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement2<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 执行 sql</span>
            preparedStatement1<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 错误代码</span>
            <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span>
            preparedStatement2<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 提交事务</span>
            connection<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;操作成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 回滚事务</span>
                connection<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;操作失败！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 释放资源</span>
            preparedStatement1<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            preparedStatement2<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h6 id="isnotblank-与-isnotempty-的区别" tabindex="-1"><a class="header-anchor" href="#isnotblank-与-isnotempty-的区别" aria-hidden="true">#</a> isNotBlank 与 isNotEmpty 的区别？</h6><details class="custom-container details"><summary>查看答案</summary><p>isNotBlank 对空白字符判断结果为 false，isNotEmpty 对空白字符判断结果为 true。</p></details><h6 id="tinyint-1-与-char-1-占用字节数一样吗-如何考虑选用哪一个" tabindex="-1"><a class="header-anchor" href="#tinyint-1-与-char-1-占用字节数一样吗-如何考虑选用哪一个" aria-hidden="true">#</a> tinyint(1) 与 char(1) 占用字节数一样吗？如何考虑选用哪一个？</h6><details class="custom-container details"><summary>查看答案</summary><p>tinyint(1) 和 char(1) 都是占用 1 个字节空间。 在一次查询大量数据时，tinyint(1) 比 char(1) 更快。</p></details><h6 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h6>`,8)),s("details",r,[n[2]||(n[2]=s("summary",null,"查看答案",-1)),s("p",null,[n[1]||(n[1]=e("参考文章：",-1)),s("a",d,[n[0]||(n[0]=e("Java 位运算符 &、|、^、~、<<、>>、>>>",-1)),o(t)])]),n[3]||(n[3]=a("<p><strong>与运算符(&amp;)</strong></p><p>以 4&amp;7 为例：</p><p>4 ： 0000 0100</p><p>7 ： 0000 0111</p><p>值(4)：0000 0100</p><p>总结：运算时，一假(0)则假(0)。</p><p><strong>或运算符(|)</strong></p><p>以 5|9 为例：</p><p>5 ： 0000 0101</p><p>9 ： 0000 1001</p><p>值(13)：0000 1101</p><p>总结：运算时，一真(1)则真(1)。</p><p><strong>左移运算(&lt;&lt;)</strong></p><p>12&lt;&lt;3 = 96</p><p>8&lt;&lt;4 = 128</p><p>总结：所有位向左移动，右侧空位补 0。</p><p>公式：M &lt;&lt; n = M * 2^n</p><p><strong>右移运算(&gt;&gt;)</strong></p><p>12 &gt;&gt; 2 = 3</p><p>-8 &gt;&gt; 2 = -2</p><p>总结：所有位向右移动，左侧空位，负数补 1，正数补 0。</p><p>公式：M &gt;&gt; n = M / 2^n</p>",22))]),n[5]||(n[5]=a(`<h6 id="求-123-的二进制数" tabindex="-1"><a class="header-anchor" href="#求-123-的二进制数" aria-hidden="true">#</a> 求 -123 的二进制数</h6><details class="custom-container details"><summary>查看答案</summary><p>负数的二进制求法:</p><p>负数的二进制一般通过正数反推导出，即（正数二进制 -&gt; 取反 -&gt; 补码(加1)），举个例子：</p><p>-123 的二进制计算方法为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">123</span> 的二进制：0111 <span class="token number">1011</span>

<span class="token number">1</span>.取反：1000 0100  即 <span class="token number">0</span> 转为 <span class="token number">1</span>，1 转为 <span class="token number">0</span>

<span class="token number">2</span>.补码：1000 0101  即低位加 <span class="token number">1</span>

那么，1000 0101 即为十进制的 <span class="token parameter variable">-123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h6 id="nginx-如何配置-https" tabindex="-1"><a class="header-anchor" href="#nginx-如何配置-https" aria-hidden="true">#</a> NGINX 如何配置 https</h6><details class="custom-container details"><summary>查看答案</summary><ol><li>在 <code>nginx/conf/nginx.conf</code> 文件中的 server 中添加以下配置：</li></ol><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h6 id="java-基本数据类型" tabindex="-1"><a class="header-anchor" href="#java-基本数据类型" aria-hidden="true">#</a> Java 基本数据类型</h6><details class="custom-container details"><summary>查看代码</summary><p>共 8 个。char、byte、int、short、double、float、long、boolean</p></details>`,6))])}const b=p(u,[["render",m],["__file","index.html.vue"]]);export{b as default};
