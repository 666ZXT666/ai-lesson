// 实例化时，传递函数 里面装耗时性内容
const p = new Promise((resolve,reject) => { // executor 执行器
    console.log('333'); // 同步任务
    setTimeout(() => { // 异步任务
        console.log('222'); // event loop 
        // reject("出错啦！！！");
        resolve("成功啦！！！");
    }, 1000);
})
// 异步任务的执行顺序控制的话， 需要then 方法
console.log(p.__proto__,p);//undefined
p.then((data) => {
    console.log(data);
    //等到executor 执行完毕后， 执行then 方法
    console.log('111');//不执行
    console.log(p);
})
.catch(() => {
    console.log('error');
    console.log(p);
})
