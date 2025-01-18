import pkg from 'jsonwebtoken'
const { sign } = pkg

export default [
    {
        url: '/login',
        method: 'post',
        response: (req, res) => {
            console.log('Mock server received request:', req.url);
            console.log('Request body:', req.body);
            if (req.body.username === 'admin' && req.body.password === '123456') {
                const token = sign({ username: req.body.username }, 'secret', { expiresIn: '1h' })
                return {
                    data: {
                        token
                    },
                    code: 200,
                    message: 'success'
                }
            } else {
                return {
                    code: 401,
                    message: '用户名或密码错误'
                }
            }
        }
    }
]