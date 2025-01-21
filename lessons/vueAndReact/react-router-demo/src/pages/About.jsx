import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  useEffect(() => {
    document.title = 'About'
  }, [])
  return (
    <div>
      <h1>关于</h1>
      <Link to='/'>回到首页</Link>
    </div>
  )
}

export default About