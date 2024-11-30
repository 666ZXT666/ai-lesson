//node 内置的http模块
const dotenv = require('dotenv');
const http = require('http');
const url = require('url');
const OpenAi = require('openai');

dotenv.config();
const client = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_BASE
});


const getCompletion =  async (prompt, model="gpt-3.5-turbo") => {
    // 用户提的问题
    const messages = [{
      role: 'user',
      content: prompt
    }];
    // AIGC chat 接口
    const response = await client.chat.completions.create({
      model: model,
      messages: messages,
      // LLM 生成内容的随机性
      temperature: 0.9
    }) 
    return response.choices[0].message.content
  }

const server = http.createServer(async(req, res) => {
    console.log('收到请求了');
     res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问，也可以指定具体的域名，如'[图片]Example Domain'
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的请求方法
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
    //设置响应体
    const parsedUrl = url.parse(req.url, true);
    const body = parsedUrl.query;
    const prompt = `${body.data}
    请分局上面的JSON数据，回答${body.question}这个问题
    }
    `;
    const result = await getCompletion(prompt);
    console.log(result);

     res.statusCode = 200;
     res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
    // //结束响应
});
server.listen(1314);