# CUE + REACT CLI 命令行

- vue-cli command line
  - 比较复杂的大型项目 不是简单的页面开发
    web app，而非page
  - npm init vite
    vite 快速构建前端项目的构建工具，前端基建工具（工程化的核心套件）
    npm init 初始化项目 将初始化交给vite这个工程化的核心套件
    - 标准项目模板
      - 没必要每次都搞


    - 项目的结构
      - package.json
        依赖
        - vue 3^ 开发和上线了都要用
        - vite 开发阶段采用，上线后不需要(前端基建) vite 是包工头

    - 工程的不同生命周期
      - dev 开发阶段
      - test 测试阶段
      - build 上线阶段
      - online 运营维护

 - npm run dev  vite
   - http协议 5173 index.html
     - 首页 website
     - 挂载点
     - src/main.js 入口文件

 - src/main.js
   - src 开发目录
     开发的主战场
     createApp().mount('#app')
    - App.vue  根组件 专属后缀
      - 三段式
        - template 模板 结构
          {{}}
        - script 逻辑
            响应式
            事件
        - css 
      - 组件就是 > html的 页面构建模块 
        组件是现代前端开发新单元 （比html大）
        组件 = 由一个逻辑单元的html构成 + css + js （汉堡包，vue）
        某项功能的抽象

      - 现代前端拥抱组件思维 
      - 组件按照功能划分
      - 组件 = html(一堆) + css(一堆) + js(一堆)
      - .vue 三段式组合这个组件
      - 轮播图 功能属性凸显 经典组件   
      - 前端的开发单位是组件，不是页面（方便复用）
        不能以html 为单位？ 单个功能弱小
      - 从工程化角度理解组件
        - 按功能划分，好安排工作
        - 组件可以复用(.vue) import 
        - 好维护 
      - 组件以标签的方式嵌入页面