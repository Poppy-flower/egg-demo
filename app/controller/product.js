const Controller = require('egg').Controller;

class ProductControler extends Controller {
  async index() {
    const { ctx } = this;
    let res = await ctx.service.product.index();
    ctx.body = res;
  }

  async detail() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = `id == ${ctx.query.id}`;
  }

  async detail2() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = `id == ${ctx.params.id}`;
  }

  async create() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const {name, weight} = ctx.request.body;
    ctx.body = {
      name,
      weight
    };
  }

  async update() {
    const { ctx } = this;
    console.log(ctx.params);
    const {id} = ctx.params;
    ctx.body = {
      id,
    };
  }

  async delete () {
    const { ctx } = this;

    ctx.body = {
      id: ctx.params.id
    }
  }
}

module.exports = ProductControler;
