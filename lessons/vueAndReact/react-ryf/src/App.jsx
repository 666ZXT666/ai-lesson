function App() {
  // jsx 语法
  // js函数区域 里编写html 
  // 组件就是函数
  // 组件名首字母大写
  // 组件返回值是JSX 只能有一个根标签
  // ENCLOSED TAG ->原理？ api fragment 节点
  let myTitle = <h1>Hello World</h1>;
  return (
    <>
      <p>hello</p><p>world</p>
    </>
  )
}

export default App
