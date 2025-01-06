const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeBaiduBaike() {
    try {
        // 发送请求
        const response = await axios.get('https://baike.baidu.com/item/%E4%B8%9C%E5%8D%8E%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6/531285', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });

        // 使用cheerio加载HTML
        const $ = cheerio.load(response.data);
        const texts = [];

        // 获取标题
        const title = $('h1').text().trim();
        if (title) {
            texts.push(`标题：${title}`);
        }

        // 获取简介
        $('.lemma-summary .para').each((i, el) => {
            const text = $(el).text().trim();
            if (text) {
                texts.push(`简介：${text}`);
            }
        });

        // 获取基本信息
        $('.basic-info dt, .basic-info dd').each((i, el) => {
            const text = $(el).text().trim();
            if (text) {
                texts.push(text);
            }
        });

        // 获取正文内容
        $('.para').each((i, el) => {
            const text = $(el).text().trim();
            if (text) {
                texts.push(text);
            }
        });

        // 过滤空文本并写入文件
        const content = texts.filter(text => text && text.length > 0).join('\n\n');
        fs.writeFileSync('baidu_baike_content.txt', content, 'utf8');

        // 输出预览
        console.log('爬取到的部分内容预览：');
        console.log(texts.slice(0, 5).join('\n'));
        console.log('\n爬取完成！内容已保存到 baidu_baike_content.txt');
        console.log(`总共爬取了 ${texts.length} 段文本`);

    } catch (error) {
        console.error('爬取过程中发生错误:', error);
        if (error.response) {
            console.error('状态码:', error.response.status);
            console.error('响应头:', error.response.headers);
        }
    }
}

// 运行爬虫
scrapeBaiduBaike();