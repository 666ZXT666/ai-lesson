/**
 * @param {Egg.Application} app - egg application
 */
// node默认的commonjs 模块 路由模块
module.exports = app => {
  // app 应用
  // router 路由
  // controller 控制器
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.home.user);
  router.post('/post', controller.post.create);
  router.post('/add', controller.home.add);
};
