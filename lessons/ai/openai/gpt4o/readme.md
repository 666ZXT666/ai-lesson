# 面向 Openai 接口编程

- 多模态
  - 单模态
    chatgpt 文本
  - 图片，视频，音频

- npm init -y 变成后端项目
  openai sdk       npm i openai
  - 时间 占用空间
    npm i -g openai //全局变量污染
    npm i -g pnpm 他是一个包管理器，能通过软链接来导包
    哪里去了？ 命令行直接调用 环境变量？

 - 既不会重复安装，也不会污染全局， 符号链接去指向之前的安装 快了，省空间
 pnpm

- main.mjs 主入口， 单点路口的职责
  mjs es6 的 module import from 

- 调试能力
  console.log() 深 查看他的json 结构

- 理解参数
  gpt4o 多模态读图能力 
    - 文本指令
    - 图片地址

- key 不能提交到github
  资产的安全风险
   