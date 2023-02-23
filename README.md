> Vue3 Playground 

## 起步

**克隆代码**

- 克隆当前包到本地
- `pnpm i` 安装所需依赖
- `pnpm prepare` 准备 husky 相关的内容
- 使用 `pnpm commit` 进行提交代码

**线上地址**

- 暂无

## 特性

- 使用该模板构建：https://github.com/fall-zhang/vite-vue3-TS-lint
- 配置好 element-plus + vue-router
- git hook，在提交代码时的钩子
  - husky + commitlint + lint-staged 实现推送代码的时候进行强制检查推送内容
- commitizen 自定义推送内容
  - husky + commitizen + cz-customizable 实现统一化推送消息内容
  - commitizen 实现自定义提交内容（需要配合 `pnpm commit` 使用
- 引入 tailwindcss 实现 以 `t-` 为前缀的 tailwindcss 的使用
- 使用 ESlint 对代码规范约束（使用 VSCode 开发，建议安装 eslint 插件，并打开 eslint 的代码格式化功能，可作为代码格式化工具）
  - 配置了 `.eslintrc.js` 保证尽量不与 volar 冲突
- 组件的使用
  - 所有自定义组件，都使用 PascalCase 命名并在文件中使用，例如：`MyButton.vue` -> `<MyButton />`
  - 所有全局组件，包括原生和引入的 element-pluse，都使用 kebab-case，例如：`<el-input />`
  - 所有组建的属性，都使用 kebab-case，例如：`<el-input allow-clear />`

## 施工中

**该项目只用于实现一部分组件内容，可能页面逻辑之类**

- [ x ] 特殊路由 `/components`，收集所有 `src/components` 中的组件进行展示，但仅在开发环境下可见
- [ x ] 默认解析 `src/views` 下的文件为路由，文件夹以 `_` 开头时会忽略解析。
- [ x ] 读取 Component 下的所有文件，在 `components` 路由下面展示，可自行跳转到 `components` 路由下面查看
- [ x ] 添加一些已经预设好的 Component 该路由支持
- [ x ] 配置 vue-router 路由
- [ x ] css 预处理器为 sass，统一为 element 的 css 样式编辑器
- [ x ] 并且支持 tailwind 支持
- [ x ] 将自动导入功能进行提取放入其它文件夹内
- [ x ] 添加 collection 收集器，用来收集所有组件
- [ ] 预设一些 icon 提供到另一个文件夹，供用户自行使用
