// node 最简单的后端框架
const koa = require('koa');
const Router = require('koa-router');
const axios = require('axios');

const app = new koa();
const router = new Router();

//chatgpt 行业标准
router.get('/get', async (ctx) => {
    let message = "你好";  
    const data = {
        model: "deepseek-r1:1.5B",
        messages: [
            {
                role: "user",
                content: "你好"
            }
        ],
        stream: false
    }

    // axios 请求
    // const res = await axios.post('https://api.deepseek.com/v1/chat/completions', data);
    // console.log(res.data);

    ctx.body = `
        <h1>${message}</h1>
        `
})

// 设置响应头允许跨域


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('服务器启动成功');
}
);