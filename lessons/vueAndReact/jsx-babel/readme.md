# react JSX

- es6 代码 很老的浏览器 
  const  =>  var
  转换 => 格式
  babel 技术
  es6 => es5
  .style => css
- JSX => 原生js执行的代码


- babel
  - 任何的js 新特性， 立即投入代码生产
  - es6+能够快速到来的， 得益于babel 工程化转义工具
    当前环境 当下需要 
  - 前端工程化的 成熟 vite/babel/stylus/webpack
  - VITE 工程总负责，babel 其中的代码编译的一项
  - 家族 
    @babel/core 核心转译逻辑 const => var
    @babel/cli 命令行工具 npx babel src -d lib
    @babel/preset-env 转译规则
    presets 预处理规则 
  - npx babel demo.js -o es5.js
    npx  不用安装， 直接执行某个包, 
    场景 项目要在其他机器上运行 
    @babel/cli 先工作 npx babel...
    已经安装 npx 找到 node_modules 下的包命令执行
    .node_modules/.bin/babel demo.js 
  - @babel/core 核心的转义工作
  - .babelre 配置文件
    presets 预处理 @babel/preset-env 智能预设，自动判断需要转换的特性
可以根据目标环境配置
    @babel/preset-react  支持jsx语法转换

- jsx?
  - 并不是js 新特性
  - react UI 组件语法  react 组件编写更简单 可读性更好 js写HTML
  - jsx 不可以直接运行 由babel 按照 @babel/preset-react 预处理规则 转换为原生js
  - React.createElement (tagName, props, ...children)
    - JSX 是一种语法糖，最终会被 babel 转换成 React.createElement() 调用
    - 例如：
      ```jsx
      <div className="hello">世界</div>
      // 会被转换为：
      React.createElement('div', { className: 'hello' }, '世界')
      ```
    - React.createElement 是 React 库提供的一个核心方法
    - 它负责创建虚拟 DOM 元素，这些元素最终会被 React 渲染到真实 DOM 中
    - 虚拟DOM

- JSX 的理解
  - 原生dom 性能差 直接用 胆战心惊
  - vue/react 封装了 dom操作 性能好 VDOM
    React.createElement 
    聚焦于业务 而非DOM操作
  - babel 在， 设计JSX UI 组件语法 js 里写html一样 
    babel 转换为 React.createElement
  - html UI 开发简单 
  - 进入到react 函数式组件中 
