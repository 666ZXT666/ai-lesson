import pkg from 'jsonwebtoken'
const { sign,verify } = pkg

export default [
    {
        url: '/userInfo',
        method: 'get',
        response: (req, res) => {
            console.log(req.headers['authorization'].split(' ')[1]);
            const token = req.headers['authorization'].split(' ')[1]
            try {
                const decoded = verify(token, 'secret')
                console.log(decoded)
            } catch (error) {
                console.log(error)
            }
            return {
                data: {
                    username: 'admin'
                },
                code: 200,
                message: 'success'
            }
        }
    },
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