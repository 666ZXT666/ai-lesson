const request = require('request-promise');
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// 目标URL
const url = 'https://tophub.today/n/KqndgxeLl9';

// 发送HTTP请求并解析HTML
request(url)
    .then(html => {
        const $ = cheerio.load(html);
        const hotList = [];

        // 选择表格中的每一行
        $('table tr').each((index, element) => {
            if (index === 0) return; // 跳过表头行

            const rank = $(element).find('td:nth-child(1)').text().trim();
            const title = $(element).find('td:nth-child(2) a').text().trim();
            const heat = $(element).find('td:nth-child(3)').text().trim();
            const link = $(element).find('td:nth-child(2) a').attr('href');

            hotList.push({ rank, title, heat, link });
        });

        // 创建CSV写入器
        const csvWriter = createCsvWriter({
            path: 'hot_list.csv',
            header: [
                { id: 'rank', title: 'Rank' },
                { id: 'title', title: 'Title' },
                { id: 'heat', title: 'Heat' },
                { id: 'link', title: 'Link' }
            ]
        });

        // 写入CSV文件
        csvWriter.writeRecords(hotList)
            .then(() => console.log('CSV file has been saved.'))
            .catch(err => console.error('Error writing CSV file:', err));
    })
    .catch(err => console.error('Error fetching the webpage:', err));