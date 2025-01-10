// export 关键字 模块化输出
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  // 创建响应式数据来存储鼠标坐标
  const x = ref(0)
  const y = ref(0)

  // 更新鼠标坐标的处理函数
  const updateMouse = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  // 组件挂载时添加事件监听
  onMounted(() => {
    window.addEventListener('mousemove', updateMouse)
  })

  // 组件卸载时移除事件监听，防止内存泄漏
  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMouse)
  })

  // 返回响应式的坐标数据
  return { x, y }
}

export function useMemo() {
    console.log('useMemo')
}

export default useMouse
