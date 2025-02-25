"use strict";
const { Controller } = require('egg');

class PostController extends Controller {
// 继承
    async create() {
        // this 中的 ctx 上下文=request+response
    const { ctx } = this;
    ctx.body = 'hi, post';
  }
}

module.exports = PostController;
