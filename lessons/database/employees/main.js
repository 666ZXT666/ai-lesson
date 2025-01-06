// commonjs 早期模块化方案
// 函数，类（js没有），js业务简单 页面交互
// 幻灯片 js干这个事
// 越来越复杂，文件分离，模块化方案
const sqlite3 = require('sqlite3');
// 后端逻辑和数据路逻辑是分开的
// 数据库操作句柄
// 路径
//I/O 操作
const db = new sqlite3.Database('./data.db',
  async(err) => {
    // node js 快 ms级别
    // 数据库 别的服务器/硬盘上 秒 级别
    if (err) {
      console.log('数据库连接失败');
      return;
    }
    console.log('数据库连接成功');
    // 数据库操作
    await db.run(`
        create table if not exists user(
          id integer primary key autoincrement,
          name varchar(20),
          age integer
        )
      `
    )
  });