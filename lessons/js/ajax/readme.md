# JS 拉取数据接口

- Ajax 老牌方案 基于XMLHttpRequest 对象
  - 请求数据接口
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'url', false);
  - 发送请求
    xhr.send();
  - 事件监听
    xhr.status === 200 && xhr.readyState === 4
    xhr.responseText

- fetch 新方案 基于Promise
  fetch('url',{
  method: 'GET'
  })
  - then res => res.json()
  - then data => console.log(data)
