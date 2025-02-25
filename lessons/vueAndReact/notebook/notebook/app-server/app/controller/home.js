const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { id, name } = ctx.query;
    ctx.body = {
      id,
      name,
    };
  }
  async user() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = id;
  }

  async add(){
    const {ctx} = this;
    //请求体
    const { title} = ctx.request.body;
    ctx.body = {
      title
    }
  }
}

module.exports = HomeController;
