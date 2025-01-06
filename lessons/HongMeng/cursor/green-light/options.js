// 保存选项到 chrome.storage
function saveOptions() {
  const apiKey = document.getElementById('apiKey').value;
  chrome.storage.sync.set({
    apiKey: apiKey
  }, function() {
    // 更新状态显示
    const status = document.getElementById('status');
    status.style.display = 'block';
    setTimeout(function() {
      status.style.display = 'none';
    }, 2000);
  });
}

// 从 chrome.storage 加载保存的选项
function restoreOptions() {
  chrome.storage.sync.get({
    apiKey: '' // 默认值
  }, function(items) {
    document.getElementById('apiKey').value = items.apiKey;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions); 