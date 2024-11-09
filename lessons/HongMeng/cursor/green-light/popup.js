document.addEventListener('DOMContentLoaded', function() {
  var changeColorButton = document.getElementById('changeColor');
  changeColorButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: setPageBackgroundColor
      });
    });
  });
});

function setPageBackgroundColor() {
  document.body.style.backgroundColor = 'lightyellow';
}
