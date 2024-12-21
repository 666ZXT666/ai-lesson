import './repos.css'
import {useState} from 'react'
function Repos(){
    // vue template ?
   // const repos =[
        // {
        //     id:1,
        //     name:'lesson1'
        // },
        // {
        //     id:2,
        //     name:'lesson2'
        // },
        // {
        //     id:3,
        //     name:'lesson3'
        // }]
        // 返回数组 解构，数组的第一个元素是当前的状态，第二个元素是修改状态的方法
    const[repos,setRepos] = useState([]);
    const [loading,setLoading] = useState(true);

    fetch('http://api.github.com/users/uyu8/repos')
    .then(res => res.json())
   .then(res => {
    setRepos(res);
    setLoading(false);
   })
  return(
    // html? react 发明了 JSX语法 js 写HTML
    // 仍然是JS ，react会解析成HTML
    <div className="github-repos">
     <h2>Github Respositories</h2>
     {loading && <p>loading...</p>}
     <ul>
        {
            repos.map(repo => 
                 <li key={repo.id}><a href={repo.html_url}>{repo.name}</a>
                 </li>
            )
        }
     </ul>
     {!loading && repos.length === 0 && <p>没有repos</p>}
    </div>
  )
}

export default Repos