- es6 promise
  Promise 类， 专门解决异步编程问题,执行流程可控，
  其他大型语言一般是同步的，js通过es6 promise 解决了单线程 异步不好控制的问题
  - 口袋 装耗时性的内容
    - resolve,reject 函数参数
  - then 方法 等完成后
    resolve(data)后执行回调函数，data传给回调函数
  - catch 方法 等失败后
    reject(error)后执行回调函数，error传给回调函数
  - 三种状态
    - pending 等待
    - fulfilled 成功
    - rejected 失败
  - 状态改变后，不可再改变

