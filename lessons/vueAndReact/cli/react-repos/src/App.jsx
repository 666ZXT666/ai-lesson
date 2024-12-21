import { useState } from 'react'
//es6 模块化的引入
import Repos from './components/repos/repos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Repos />
      </div>
    </>
  )
}
// es6 模块的导出
export default App
