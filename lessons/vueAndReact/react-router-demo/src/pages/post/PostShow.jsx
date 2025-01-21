import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
const PostShow = () => {
    const { postId } = useParams()
    useEffect(() => {
        document.title = `文章id为：${postId}`
    }, [])
    return (
        <div>
            <h1>PostShow</h1>
            <p>postId: {postId}</p>
        </div>
    )
}

export default PostShow