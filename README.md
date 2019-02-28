<h2 align="center">VUI - Vue UI Component</h2>
<p align="center"><b>做一个有趣实用的组件库</b></p>

# 目录
- [特性](#特性)
- [快速入门](#快速入门)
  - [安装](#安装)
- [内部开发](#内部开发)
    - [开发](#开发)
    - [测试](#测试)
    - [打包](#打包)
    - [提交](#提交)
- [感谢](#感谢)
- [License](#license)


## 特性

- 小巧的尺寸
- 按需导入
- 支持 `TypeScript`


## 快速入门

### 安装

```bash
$ npm i 
```

目录说明:

```
├─ build          //打包和开发配置
├─ doc            // 文档
├─ examples       //对应的例子
├─ test           //测试用例
├─ lib            //打包文件
├─ typings        //ts类型文件
├─ src
│  ├─ components  // 所有组件
│  ├─ directives    //存放所有指令
│  ├─ styles       //存放所有样式
│  ├─ utils         //工具函数
│  └─ index.js    //注册组件的文件
```

## 内部开发

#### 开发

```bash
$ npm run demo
```
- demo 运行，方便开发人员调试,跑的是examples下面的内容
- 修改`src`里的组件，自动更新
- 添加组件时候必须注册name，如'ds-button'

#### 测试

```bash
$ npm run test
```
- 使用 jest

#### 打包

```bash
$ npm run lib
```

#### 提交
```bash
$ git add .
$ git cz
 或者直接
$ npm run commit
```

#### 文档

```bash
$ npm run doc
```
- 使用 vue-markdown-loader 来愉快的编写 markdown 文档
- highlight 高亮代码

## 感谢

- [vue](https://github.com/vuejs/vue)

## License

- [MIT](https://opensource.org/licenses/MIT)