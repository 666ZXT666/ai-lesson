import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config()
//启动一个进程 process  后端
// env对象 环境对象
//进程是分配资源的最小单位
const client = new OpenAI({
  // node 里的进程对象
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE
});
// es6 默认参数值
//通用的LLM 完成接口函数，复用
const getCompletion = async(prompt,model="gpt-3.5-turbo") => {
  // 用户提的问题
  const messages = [
  {
    "role": "user",
    "content": prompt
  }];
  //AIGC chat 接口
  const response = await client.chat.completions.create({
    model,
    messages,
    temperature: 0,
  });
  return response.choices[0].message.content;
}
const view = '这个鱼一股子腥味，太难吃了'
//初级prompt 设计原则
//准确表达任务
//给它一个角色
//减少出错可能
const prompt =`你的任务是生成来自购物网站的评论摘要，评论我将在下面用三引号分隔
评论：''' ${view}'''
`
const main = async()=>{
  const response = await getCompletion(prompt);
  console.log(response);
}

main();