# 技术题库

收集 IT 方面的面试题，为己所用！

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

项目部署：项目已配置 CI 自动部署，代码推送后 2 分钟内自动部署

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
