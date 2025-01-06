const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs-extra');
const path = require('path');

// 创建下载目录
const downloadDir = path.join(__dirname, 'downloaded_images');
fs.ensureDirSync(downloadDir);

async function downloadImage(url, filename) {
  try {
    const response = await axios({
      url,
      responseType: 'arraybuffer'
    });
    
    const filepath = path.join(downloadDir, filename);
    await fs.writeFile(filepath, response.data);
    console.log(`已下载: ${filename}`);
  } catch (error) {
    console.error(`下载失败 ${url}: ${error.message}`);
  }
}

async function crawlImages() {
  try {
    // 获取页面内容
    const response = await axios.get('https://pic.yesky.com/c/6_25152.shtml');
    const $ = cheerio.load(response.data);
    
    // 找到所有图片元素
    const images = $('img').map((i, el) => {
      const src = $(el).attr('src');
      if (src && !src.includes('data:image')) {
        return src.startsWith('http') ? src : `https:${src}`;
      }
    }).get();

    // 下载所有图片
    for (let [index, imageUrl] of images.entries()) {
      const extension = path.extname(imageUrl) || '.jpg';
      const filename = `image_${index + 1}${extension}`;
      await downloadImage(imageUrl, filename);
      
      // 添加延迟以避免请求过快
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('所有图片下载完成！');
  } catch (error) {
    console.error('爬取失败:', error.message);
  }
}

// 运行爬虫
crawlImages();