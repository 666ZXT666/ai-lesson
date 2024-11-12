import OpenAI from 'openai';

const openai = new OpenAI({
    //付费
  apiKey:'sk-5PUDrQhFqCVr0KluhSbYcCgIx6S21dNcxGJOxhpo3BEtIhRw',
 // 国内转发
  baseURL: 'Https://api.302.ai/v1',
});

//向openai发送请求
//完成生成 GC
const response = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    max_tokens: 256,
    prompt: '假如你是林夕这样的爱情歌曲大家，请你以写一首主题为爱上森林北的摇滚曲，森林北是一位美丽，洒脱，有活力的女孩。',
})
console.log(response);