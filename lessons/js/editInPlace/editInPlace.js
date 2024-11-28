/*
* @Func 就地编辑
* @Param (id,parent 父节点,value 默认值)
* @Author 邓子
* @Date 2024-11-28
*/
function EditInPlace(id,Parent,value) {
    this.id = id; // 跨函数共享属性
    this.Parent = Parent || document.body;
    this.value = value || '';
    this.createElement(this.id);
}

EditInPlace.prototype.createElement = function(id){
    this.containterElement = document.createElement('div');
    this.containterElement.id = id;
    this.Parent.appendChild(this.containterElement);

    this.staticElement = document.createElement('span');
    this.staticElement.innerText = this.value;
    this.containterElement.appendChild(this.staticElement);
}

