document.addEventListener('DOMContentLoaded', function() {
  var changeColorButton = document.getElementById('changeColor');
  
  // 获取保存的API key
  chrome.storage.sync.get(['apiKey'], function(result) {
    const apiKey = result.apiKey;
    if (!apiKey) {
      console.log('请先设置API Key');
      return;
    }
    
    changeColorButton.addEventListener('click', function() {
      // 这里可以使用apiKey进行API调用
      console.log('使用API Key:', apiKey);
      
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: setPageBackgroundColor
        });
      });
    });
  });
});

function setPageBackgroundColor() {
  document.body.style.backgroundColor = 'lightyellow';
}
