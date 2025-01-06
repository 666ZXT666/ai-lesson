let a = null;//栈内存

// 堆内存
let largeObject = {
    data : new Array(1000000).fill('a')
}

largeObject = null;