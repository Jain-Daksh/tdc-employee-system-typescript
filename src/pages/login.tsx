import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = (await signIn('credentials', {
      redirect: false,
      email,
      password
    })) as { error?: string }

    if (result.error) {
      toast.error('Invalid email or password')
    } else {
      router.push('/')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <h1>welcome back</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
      <ToastContainer />
    </div>
  )
}
