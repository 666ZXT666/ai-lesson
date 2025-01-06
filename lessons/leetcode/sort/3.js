function getNext(pattern) {
    let next = [0]; // 初始化 next 数组，next[0] 总是 0
    let j = 0; // j 是前缀的末尾索引

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = next[j-1]; // 直接将 j 设为 0
        }
        if (pattern[i] === pattern[j]) {
            j++;
        }
        next[i] = j;
    }

    return next;
}

// 示例使用
let pattern = "BBCABBCB";
console.log(getNext(pattern)); 