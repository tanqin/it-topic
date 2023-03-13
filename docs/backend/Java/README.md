# Java

::: details 什么是 JDBC？为什么需要 JDBC？
JDBC(Java Database Connectivity) Java 数据库连接。
它是一个接口，由对应的数据库厂商完成接口实现类，该实现类就是所说的驱动。
由于每个厂商底层代码实现不同，切换数据库需要改变 Java 代码，成本过大，所以需要 JDBC 进行调和，实现一套代码，操作不同的关系型数据库。
使用 mysql JDBC 驱动示例，涉及到了事务处理：

```java
import java.math.BigDecimal;
import java.sql.*;

public class JDBCDemo {
    public static void main(String[] args) throws Exception {
        // 加载驱动
        Class.forName("com.mysql.cj.jdbc.Driver");

        Connection connection = null;
        PreparedStatement preparedStatement1 = null;
        PreparedStatement preparedStatement2 = null;

        try {
            // 通过驱动管理器获取连接对象
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/storage_system", "root", "root");

            // 开启事务（关闭自动提交）
            connection.setAutoCommit(false);

            // 定义 sql
            String sql1 = "update t_goods set name = ?, price = ? where id = ?";
            String sql2 = "update t_goods set name = ?, price = ? where id = ?";

            // 通过连接对象获取预声明对象
            preparedStatement1 = connection.prepareStatement(sql1);
            preparedStatement2 = connection.prepareStatement(sql2);

            // sql 赋值
            preparedStatement1.setString(1, "2 只松鼠");
            preparedStatement1.setBigDecimal(2, new BigDecimal(22.22));
            preparedStatement1.setInt(3, 1);
            preparedStatement2.setString(1, "3 只松鼠");
            preparedStatement2.setBigDecimal(2, new BigDecimal(33.33));
            preparedStatement2.setInt(3, 2);

            // 执行 sql
            preparedStatement1.executeUpdate();
            // 错误代码
            Integer i = 1 / 0;
            preparedStatement2.executeUpdate();

            // 提交事务
            connection.commit();

            System.out.println("操作成功！");
        } catch (Exception e) {
            if (connection != null) {
                // 回滚事务
                connection.rollback();
            }
            System.out.println("操作失败！");
        } finally {
            // 释放资源
            preparedStatement1.close();
            preparedStatement2.close();
            connection.close();
        }
    }
}
```

:::

::: details isNotBlank 与 isNotEmpty 的区别？
isNotBlank 对空白字符判断结果为 false，isNotEmpty 对空白字符判断结果为 true。
:::

::: details tinyint(1) 与 char(1) 占用字节数一样吗？如何考虑选用哪一个？
tinyint(1) 和 char(1) 都是占用 1 个字节空间。
在一次查询大量数据时，tinyint(1) 比 char(1) 更快。
:::

::: details 位运算符

参考文章：[Java 位运算符 &、|、^、~、<<、>>、>>>](https://www.cnblogs.com/SunArmy/p/9837348.html)

**与运算符(&)**

以 4&7 为例：

4 ： 0000 0100

7 ： 0000 0111

值(4)：0000 0100

总结：运算时，一假(0)则假(0)。

**或运算符(|)**

以 5|9 为例：

5 ： 0000 0101

9 ： 0000 1001

值(13)：0000 1101

总结：运算时，一真(1)则真(1)。

**左移运算(<<)**

12<<3 = 96

8<<4 = 128

总结：所有位向左移动，右侧空位补 0。

公式：M << n = M * 2^n

**右移运算(>>)**

12 >> 2 = 3

-8 >> 2 = -2

总结：所有位向右移动，左侧空位，负数补 1，正数补 0。

公式：M >> n  = M / 2^n

:::

::: details 求 -123 的二进制数

负数的二进制求法:

负数的二进制一般通过正数反推导出，即（正数二进制 -> 取反 -> 补码(加1)），举个例子：

-123 的二进制计算方法为：

```shell
123 的二进制：0111 1011

1.取反：1000 0100  即 0 转为 1，1 转为 0

2.补码：1000 0101  即低位加 1

那么，1000 0101 即为十进制的 -123
```

:::

::: details NGINX 如何配置 https

1. 在 `nginx/conf/nginx.conf` 文件中的 server 中添加以下配置：

```conf
server {
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
```

2. 配置只允许域名访问，IP 访问 403 提示

在所有 server 前新建 server ，ssl 需要把证书也加上，否则域名访问也会 403

```conf
server {
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
```

3. 检查配置并重启 NGINX

```shell
# 检查配置
nginx -t

# 重启
nginx -s reload
```

:::

::: details SpringBoot 如何整合 MyBatis

1. pom.xml 中导入 mybatis 整合包；

2. 编写 service 接口、mapper 接口、mapper 接口对应的 xml；

3. application.properties 或 application.yml 添加 mybatis 配置。包括接口路径配置、xml 路径配置；

4. 编写 controller 类；
:::

::: details 内连接与外连接的区别
内连接：结果集只保留两表中匹配的数据，舍弃了不匹配的数据。

外连接：结果集除了包含符合连接连接条件的行数据，还包含左表、右表的所有行数据。
:::
