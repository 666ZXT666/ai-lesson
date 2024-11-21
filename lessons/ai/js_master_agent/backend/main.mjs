// 入口文件
// mjs es6 模块化
// es5 js 没有模块化能力 简单 不需要模块化， 交给函数就可以了
import OpenAI from 'openai';

const openai = new OpenAI({
 openai = new openai = new OpenAI(
    apiKey: ''
    baseURL: ''
 );

const main = async() => {//async 异步函数
    const response = await openai.completions.create({
        model: 'dall',
        max_tokens: 256,
        prompt: '',
        n：1,
        size: '1024x1024'
    })
    /
    console.log('response.data[0].url')
}

main();
console.log('你好')
