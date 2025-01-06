import { useState } from 'react'

function App() {
  const[repos,setRepos] = useState([]);
  const [loading,setLoading] = useState(true);
  fetch('http://api.github.com/users/uyu8/repos')
  .then(res => res.json())  
  .then(res =>{
    setRepos(res);
    setLoading(false);
  })
  return (
    <>
    <div>
      <h2>{loading && 'loading...'}</h2>
      <ul>
        {
          repos.map(repo =>
            <li key={repo.id}>{repo.name}</li>
          )
        }
      </ul>
    </div>
    </>
  )
}

export default App
