'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let res = await ctx.service.product.index();
    // ctx.body = res;

    await ctx.render('index.html', {
      res,
      lists: [1, 2, 3]
    });
  }
}

module.exports = HomeController;
