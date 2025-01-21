// react hooks 函数式编程
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {

    document.title = 'Home'
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <div>东华理工大学</div>
    </div>
  )
}

export default Home