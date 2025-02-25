# AI Assistant 全栈项目

-大前端全栈
- 后端驱动为主 
  - 设计模式
    大前端 mvvm model (数据状态 usestate,ref, api/axios pinia ) view

    model 模型层 = 数据定义 + 数据处理 + 数据存储 + 数据管理 + 数据请求

    view 视图层 = component = 页面结构 + 页面样式 + 页面交互

    vm 视图模型层 数据绑定{} {{}}, 数据驱动界面(v-if/v-show)... script 事件监听 @change onChange props

    后端 mvc 
    model 独立于数据库 数据模型文件 schema 
    view 视图层 = 前端页面 html
    controller 控制层

## 后端全栈AI 项目
- python flask 框架 node koa
  app.py 单点入口
- 纯js
- deepseek 在线api



## 写文章 + leetcode 150+


## 项目准备
- 安装python
  3.10.6
- 配置虚拟环境
  本地项目依赖 不受全局影响

- 安装依赖
 pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/

 openai 已经成为了aigc LLM 的标准
 base_url deepseek

 flask 后端框架


- 静态文件
  - 前端页面 html
  - 前端样式 css
  - 前端脚本 js
  - 图片 视频 音频 等媒体文件
  

## 界面 

 - html 结构
   - 写注释
   - 图标字体库 font-awesome iconfont
     font-awesome 提供统一风格的矢量图标集（超过2000个图标），通过CSS类名调用
     
     - 性能优化
     - 小图标都用图片,http 请求数多，网页同时并发请求数有上限 使用字体库能够通过一次请求，加载字体库，利用浏览器的字体缓存机制，直接读取本地缓存
    - css 样式的组合 面向对象 堕胎 方便复用和维护
      tailwindcss 原子类
    - 语义化标签
    - 弹性布局
      - 居中
      - flex-direction 主轴方向 row|column
      - align-items 纵轴
      - justify-content 横轴 flex-start|center|flex-end|space-between|space-around
    - grid 布局
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 32px;

    - 响应式布局
      width max-width: 600px;
      @media (max-width: 768px) {
        width: 100%;
      }
    - transition animation ipad旋转动画效果
    - 面向对象思想
      - 封装 多态 继承
      - button 样式组件 基础样式
        UI风格 antd 
      - 组合业务样式
        primary secondary -> tailwindcss 原子类
    - calc 
      CSS 中执行简单的数学运算， 用于动态控制元素大小与位置
      性能有点问题，不能滥用，设计不必要的重绘重排
    - flex :1 
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0;


- js
  - 用户体验
    - event.prevetDefault();
  - promise 的使用
    await 后面肯定是promise 或返回promise实例的函数
    then 链式调用
      处理函数返回的仍然是promise实例
      如果不是呢？ 自动用promise.resolve包一下
  - BOM
    - navigator.userAgent 
    操作系统 浏览器版本 内核
    - navigator.clipboard 
  - localStorage
    - 大小限制 5M
    - 只能存储字符串
  - array,string 方法强化一下
    slice 复数
  - event 事件机制
    - dom level 和 event 两个概念 设计和 event 相关的定义
    - onclick(内嵌事件 DOM level 0) addEventListener(监听事件)
    - 小红书 (JS高级程序设计)
    - 事件冒泡| 捕获
    - 事件委托
      事件监听 内存开销比较大的
      - 利用冒泡机制 父元素 监听一次 性能好 事件委托
      - event.target 目标元素



- 代码风格
  - 注释
  - 封装
    - 一个函数只做一件事
    - 一个函数不超过10行
  - es6+风格
    promise + async/await


## 业务
  - 界面业务
    - grid
    - transition
    - css 面向对象
  - scolltotop 业务
