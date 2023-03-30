# 技术题库

收集 IT 方面的面试题，为己所用！

[仓库地址](https://github.com/tanqin/it-topic)

[在线地址](https://tanqin.github.io/it-topic/)

## 注意事项

- 项目路径请不要使用中文命名！！！
- node >=14.18.0(建议使用 16 版本) ,pnpm >=7

## 安装使用

如果您还没安装 pnpm，请执行下面命令：

```bash
npm install -g pnpm
```

安装依赖：

```bash
pnpm i
```

运行项目：

```bash
pnpm run dev
```

项目部署：项目已配置 CI 自动部署，代码推送后 2 分钟之内自动部署

## 添加文章

以「前端面试」专栏为例，添加一篇“2023年1月1日在【摸鱼公司】参加面试”的文章：

1. 找到「前端面试」专栏对应的目录 `docs/frontendInterview`，创建 markdown 文件 `MYGS_2023-01-01.md`（格式为公司拼音首字母+日期的形式），如下图所示：
![step1](https://s1.ax1x.com/2023/03/30/ppghOT1.png)

2. 找到 `docs/frontendInterview/A_TEMPLATE.md` 模板文件，复制内容并粘贴到自己的 `MYGS_2023-01-01.md` 中，如下图所示：
![step2](https://s1.ax1x.com/2023/03/30/ppghvY6.png)

3. 修改文章内容，如下图所示：
![step3](https://s1.ax1x.com/2023/03/30/ppghjFx.png)

4. 找到 `docs/.vuepress/navbar.ts` 导航配置文件，找到「前端面试」配置项，在 `children` 中配置我们自己刚刚写的这片文章的路由（注意：配置请按时间倒序添加），如下图所示：
![step4](https://s1.ax1x.com/2023/03/30/ppghqm9.png)

5. 在页面中查看效果：
![step5](https://s1.ax1x.com/2023/03/30/ppghLwR.png)

6. 代码推送后，CI 自动部署会在 2 分钟之内将文章同步到线上【💥：推送前记得先拉取代码】

## Git 提交规范【✅尽量按规范提交✅】

- 参考规范 [vue 提交规范](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md)、[Angular 提交规范](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
