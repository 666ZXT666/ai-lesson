# 春招执行方案

- 时间
  3月-5月
- 大厂最容易
  - 语言能力
  - 面试能力
  - 算法
- 3月份-4月份 面试新手期
  - 拿下一个offer 150一天
  - 拿下第二个目标点 找到实习 面大厂之前有一份实习经验 （通过简历）
  - 4-5 月 边实习边提升面试能力
  - 百度 大厂 + 未来AI大厂

## deepseek
  - 性价比高
    aigc
    百万 tokens
    tokens 提问返回
  - 为什么便宜？
    - OpenAI 堆算力 GPU
    - 新的算法，可以绕开 英伟达 cuda编程
    - DeepSeek V3 2048 块 H800 557.6万美元  meta llama3 是 deepseek 的11倍
      openai No1 闭源
      llama3 No1 开源
    - 英伟达股价大跌

    ## DeepSeek AI 全栈应用

    - ai应用集合项目
      coze 工作流 + ai 应用
      deepseek openai 的 替代品 prompt
      langchain rag 开发

- ollama
  - 302ai 转发 online 大模型
  - 本地访问大模型的可能 
    ollama pull deepseek-r1:1.5B 拉取 offline调用该
    模型的微调 自己的业务或需求 重新练一下deepseek
  - const add = (a, b) => a + b;
    LLM  nlp+transformer  => AIGC 回答  大模型函数
   
   服务器设置响应头允许跨域

  - options 
    - 预检请求
    - 预检请求 是 浏览器 自动发送的 询问服务器 是否允许跨域
    
- koa 服务
  - 中间件 洋葱模型
  - 有顺序
  - 从上到下执行


- vue 和 react区别
  - vue v-model 双向绑定
  - react 单向数据流 认为双向性能差
    单向 + 事件 onChange 触发

  - 没有做前后端分离
    - 前端 static 目录下
    - 路由 /index.html