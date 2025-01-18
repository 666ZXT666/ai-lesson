// vue中使用jsx
// State(UI jsx)
import { 
    defineComponent // 定义组件的函数
} from 'vue'

export default defineComponent({
    name: 'Hello',
    props: {
        msg: String
    },
    setup(props) {
        return () => {
            return <div className="hello">
                <h1>{props.msg}</h1>
                <p>Welcome to My JSX Component</p>
                </div>
        }
    },
})
