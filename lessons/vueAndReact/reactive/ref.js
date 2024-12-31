class RefImpl {
    constructor(value) {
        this._value = value;
        // 存储依赖的副作用函数
        this.dep = new Set();
    }

    get value() {
        // 收集依赖
        if (activeEffect) {
            this.dep.add(activeEffect);
        }
        return this._value;
    }

    set value(newValue) {
        if (newValue === this._value) return;
        this._value = newValue;
        // 触发依赖
        this.dep.forEach(effect => effect());
    }
}

// 当前正在执行的副作用函数
let activeEffect = null;

// 用于创建响应式引用
function ref(value) {
    return new RefImpl(value);
}

// 用于注册副作用函数
function watchEffect(effect) {
    activeEffect = effect;
    effect();
    activeEffect = null;
}

// 测试代码
const count = ref(0);
watchEffect(() => {
    console.log('count changed:', count.value);
});

// 修改值会触发副作用函数
count.value++;  // 输出: count changed: 1 