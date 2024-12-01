/* @func 创建哔哩哔哩个性签名元素
 * @Data 
 * @Author 邓子
*/
function Edit(id,node,word) {
    this.id = id;
    this.node = node;
    this.word = word;
    this.createElement();
}
Edit.prototype.createElement = function() {
    let div = document.createElement("div");
    div.id = this.id;
    let label =  document.createElement("label");
    label.id = 'lb';
    let input = document.createElement("input");
    input.id = 'inp';
    text = document.createTextNode(this.word);
    label.appendChild(text);
    input.value = this.word;
    div.appendChild(label);
    div.appendChild(input);
    this.node.appendChild(div);
}

function onclick(){
    const ipt = document.getElementById('inp');
    const lb = document.getElementById('lb');
    document.addEventListener("click", function(event) {
        // 判断点击的目标是否是该元素或其子元素
        if (!ipt.contains(event.target)&& !lb.contains(event.target)) {
          transformToLabel();
        }
      });
    document.getElementById('lb').addEventListener('click',transformToInput);

}
//点击了标签

function transformToInput(){
    console.log('aaa');
    document.getElementById('inp').style.display = 'block';
    document.getElementById('lb').style.display = 'none';
    //将文本的值赋给文本框
    document.getElementById('inp').value = document.getElementById('lb').innerText;
}
//点击了除了对话框之外的地方

function transformToLabel(){
    console.log('bbb');
    document.getElementById('inp').style.display = 'none';
    document.getElementById('lb').style.display = 'block';
    //将文本框的值赋给文本
    // console.log(document.getElementById('inp').value);
     document.getElementById('lb').innerText = document.getElementById('inp').value;
}
