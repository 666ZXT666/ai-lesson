# AI全栈项目

- 架构
  - frontend  前端
  - backend   后端
    提供数据接口 user.json作为数据文件
    http服务
    json server
  - llm   ai server 响应http请求
    json文件 json --port 8080 --watch user.json
  - script
  "dev":"json --port 8080 --watch user.json"
  npm run dev
    npm i json-server