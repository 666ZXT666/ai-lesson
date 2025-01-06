/*@Data 2024-12-7
* Author: 邓子
* @Func : 爬取豆瓣电影排行榜
*/
//解构运算符
import {createCrawl  //返回爬虫示例
    ,createCrawlOpenAI //OpenAI配置项
} from 'x-crawl';

// 实例化爬虫应用
// 使用 createCrawl 函数创建一个爬虫应用实例
const cralwApp = createCrawl({
    // 配置爬虫的最大重试次数为 3
    maxRetry: 3,
    // 配置爬虫的重试间隔时间，最小为 1000 毫秒，最大为 2000 毫秒
    intervalTime: {
        min: 1000,
        max: 2000
    },  
});


const cralwAppOpenAI = createCrawlOpenAI({
   clientOptions:{ apiKey:'sk-oaXEC0oWSJq05fuSRSOTNUraRVd9XKW5a7pWuPs2UAvU801R',
    baseURL:'https://api.302.ai/v1/'
   },
   defaultModel:{
   chatModel:'gpt-4-turbo-preview'
   }
})


// 使用 cralwApp 实例的 crawlPage 方法爬取指定网页
cralwApp.crawlPage('http://movie.douban.com/chart')
// 处理爬取结果
.then(async(res) =>{
    // 从响应中提取 page 和 browser 对象
    const{page,browser} = res.data;
    console.log(res.data);
    // 定义目标选择器
    const targetSelector = '.indent';
    // 等待目标选择器匹配的元素加载完成
    await page.waitForSelector(targetSelector);
    // 等待页面加载完成指定选择器的元素
    await page.waitForSelector(targetSelector);
    const highlyHTML = await page.$eval(// 使用 page.$eval 方法获取选择器匹配的第一个元素的内部 HTML 内容
        targetSelector,
        (el) => el.innerHTML // 这是一个回调函数，el 表示匹配到的元素
    );
    // 使用 cralwAppOpenAI 实例的 parseElements 方法解析 HTML 内容
    const result = await cralwAppOpenAI.parseElements(
       highlyHTML,
       `get the image link`
    )
    // 关闭浏览器
    browser.close();
    // 使用 cralwApp 实例的 crawlFile 方法下载图片
// 使用 cralwApp 实例的 crawlFile 方法下载图片
console.log(result);
result.elements.forEach(async (element) => {
  await cralwApp.crawlFile({
    targets: element.src,
    storeDirs: './download'
  });
});

})
