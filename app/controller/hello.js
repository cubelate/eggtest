const Controller = require('egg').Controller;

class HelloController extends Controller {
    async index() {
        const articles = await this.ctx.model.Article.findAll();
        this.ctx.body = articles;

    }
}

module.exports = HelloController;