import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
// import LoginImg from '../public/Login.avif'
import { useRouter } from 'next/router'

const Login = (props: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json()
        const token = data.token
        const admin = data.user.is_admin
        localStorage.setItem('authtoken', token)
        localStorage.setItem('admin', admin)
        console.log(data)
        console.log('Login successful!')
        console.log(response)
        router.push('/')
      } else {
        console.log('Invalid email or password')
        toast.error('incorrect email or password')
      }
    } catch (error) {
      console.error('Error occurred:', error)
    }
  }
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          {/* <Image height={700} width={700} src={LoginImg} alt="Login" /> */}
        </div>
        <form name="login-form" onSubmit={handleLogin}>
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onSubmit={handleLogin}
            >
              LOGIN
            </Button>
          </Form.Item>
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default Login
