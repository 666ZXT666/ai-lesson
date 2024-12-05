# 定时器

- JS 是单线程的，只有一个主线程
- setTimeout 是异步执行的，会在主线程执行完之后才执行

  callback 函数 放入 event loop， 时间(ms)
- 一定会在 指定的时间后执行吗？ 异步执行
- 找回？
  执行的是回调函数
- 返回值：定时器ID 

- 如何用setTimeout实现 setInterval?
  - 场景编程题
  - 手写题 fn
    - callback 

- call 
  - 函数对象上的方法