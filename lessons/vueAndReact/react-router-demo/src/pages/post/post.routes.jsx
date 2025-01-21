import { Route } from 'react-router-dom'
import PostIndex from './PostIndex'
import PostShow from './PostShow'

export const postRoutes = (
    <>
        <Route path='post' element={<PostIndex />}></Route>
        <Route path='post/:postId' element={<PostShow />}></Route>
    </>

)