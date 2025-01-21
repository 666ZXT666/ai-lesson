import { 
    useState,
    useEffect
 } from 'react'

 //react 18 新特性 react全面内置hooks
//use 开头 hooks 函数式编程

const NotFound = () => {
    // 副作用 生命周期挂载后执行
    const [count, setCount] = useState(0)
  // onMounted+onUpdated
  useEffect(() => {
    console.log('404');
    document.title = '404';
    return () => { //卸载时执行
      console.log('404卸载')
    }
  },[])

  const addCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('count增加了')
  }, [count])
  


  return <div>
    <button onClick={addCount}>count</button>
  </div>
}

export default NotFound