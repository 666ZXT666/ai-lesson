import OpenAI from "openai";
import dotenv from "dotenv";

//启动一个进程 process  后端
// env对象 环境对象
//进程是分配资源的最小单位
console.log(process.env);
const client = new OpenAI({
  // node 里的进程对象
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE
});