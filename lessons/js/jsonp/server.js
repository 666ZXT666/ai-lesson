// http 服务启动
// commonjs node早期的 es6模块化 
const http = require('http');

const users = [
  {id: 1, name: 'tom'},
  {id: 2, name: 'jerry'},
  {id: 3, name: 'spike'},
];

const server = http.createServer((req, res) => {
  //res.end('let a ='+JSON.stringify(users));
  res.end("callback" + "(" + JSON.stringify(users) + ")");
  // 异步 高并发
  // 请求带到服务器后，函数会执行
});

server.listen(8080, () => {
console.log('server is running at http://localhost:3000');
});

