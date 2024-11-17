import OpenAI from openai ;
import dotenv from 'dotenv';
dotenv.config();

//实例化openai 客户端
const client = new OpenAI({
    apiKey: '',
    baseURL: 'Https://api.302.ai/v1'
})
 
// 良好的编程风格
// 主函数 执行党的入口， 单点
// 函数声明
// es6 箭头函数 传统函数更简洁
// 赋值语句
// 函数也是对象
// 函数表达式
// async 是函数的修饰符，+ await 是一对
const main = () => {
  console.log('ai 全栈开始了')
  // openai 的调用是异步的
  // await 等会儿
  // chat 聊天的方式调用
  // completions 完成问答
 try{ const response = client.chat.completions.create({
    model: 'gpt-4o',
    //对话列表
    messages:[{
      role: 'user',//角色
      content:[
        {
        type: 'text',
        'text':'请描述一下图片的内容'
      },
    {
        type:'image_url',
        "image_url":{
            "url":""
        }

    }
]
    }],
    max_tokens:300
  })
  console.log(response.choices[0].message.content)
 } catch(e){
  console.log(e)
 }

}

// function main(){
//   console.log('ai 全栈开始了')
// }

main();