// node 早期的模块化
const request = require('request-promise');
// 解析request 拿到的html字符串
const cheerio = require('cheerio');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// 爬取微博热搜
// 常量 大写 配置项
const url = 'https://tophub.today/n/KqndgxeLl9';
request(url)
    .then(html => {
        const $ = cheerio.load(html);
        const hotList = [];
        $('.jc tbody tr').each((index, element) =>{
            //${node}.find(query)   
            const rank = $(element).find('td:nth-child(1)').text().trim();
            console.log(rank);
            const title = $(element).find('td:nth-child(2)').text().trim();
            console.log(title);
            const heat = $(element).find('td:nth-child(3)').text().trim();
            console.log(heat);
            const link = $(element).find('td:nth-child(2) a').attr('href').trim();
            console.log(link);
            hotList.push({
                rank,
                title,
                heat,
                link
            });
        })
            const cssWriter = createCsvWriter({
                path: "test.csv",
                header:[
                    {id:'rank',title:'排序'},
                    {id:'title',title:'标题'},
                    {id:'heat',title:'热度'},
                    {id:'link',title:'链接'}
                ]
            })
            cssWriter
            .writeRecords(hotList)
            .then(() => 
            console.log('成功')
            )

        });  
     
    